import {Client, Databases, Query} from 'appwrite'


const client = new Client().setEndpoint('http://localhost/v1').setProject('SupportMe');
const db = new Databases(client);
const dbId = 'SupportMe', cId1 = 'User', cId2 = 'Course';


// first_name, last_name, age, educational_level, tutor_tags, student_tags, email, phone_number, password, introduction
async function userSignUp(data) {
    let num = await getUserNum();
    if (num == null) return false;
    num++;
    const promise = db.createDocument(dbId, cId1, num.toString(), {
        id: num, first_name: data[0], last_name: data[1], age: data[2], education_level: data[3],
        tutor_rating: 10, student_rating: 10, tutor_tags: data[4], student_tags: data[5], email: data[6], 
        phone_number: data[7], password: data[8], tutor_course_ids: [], student_course_ids: [], 
        is_need_help: false, help_num: 0, introduction: data[9]
    });
    return promise.then(response => {
        return true;
    }, error => {
        console.log(error);
        return false;
    })
}


// email, password
async function userSignIn(email, password) {
    let user = await findUsers('email', email);
    return user != null && user.length == 1 && user[0]['password'] == password;
}



async function isExistUser(key, value) {
    let users = await findUsers(key, value);
    if (users == null) return true;
    return users.length != 0;
}


async function getUserNum() {
    const promise = db.listDocuments(dbId, cId1);
    return promise.then(response => {
        return response['total'];
    }, error => {
        console.log(error);
        return null;
    });
}


async function findUsers(key, value) {
    const promise = db.listDocuments(dbId, cId1, [Query.equal(key, value)]);
    return promise.then(response => {
        return response['documents'];
    }, error => {
        console.log(error);
        return null;
    });
}


async function findUserById(id) {
    const promise = db.listDocuments(dbId, cId1, [Query.equal('id', id)]);
    return promise.then(response => {
        return response['documents'][0];
    }, error => {
        console.log(error);
        return null;
    });
}


// key is either "tutor" or "student"
async function findUsersByTags(key, value) {
    key += '_tags';
    const promise = db.listDocuments(dbId, cId1);
    return promise.then(response => {
        let users = [];
        for (const user of response['documents']) {
            for (const tag of user[key]) {
                if (tag.includes(value)) {
                    users.push(user);
                    break;
                }
            }
        }
        return users;
    }, error => {
        console.log(error);
        return null;
    });
}


async function sortTutorByRating() {
    const promise = db.listDocuments(dbId, cId1, [Query.orderDesc('tutor_rating')]);
    return promise.then(response => {
        return response;
    }, error => {
        console.log(error);
        return null;
    });
}


async function updateUser(id, data) {
    const promise = db.updateDocument(dbId, cId1, id, data);
    return promise.then(response => {
        return true;
    }, error => {
        console.log(error);
        return false;
    });
}


async function getCourseNum() {
    const promise = db.listDocuments(dbId, cId2);
    return promise.then(response => {
        return response['total'];
    }, error => {
        console.log(error);
        return null;
    })
}


async function findCourseById(id) {
    const promise = db.listDocuments(dbId, cId2, [Query.equal('id', id)]);
    return promise.then(response => {
        return response['documents'][0];
    }, error => {
        console.log(error);
        return null;
    });
}


// key is either "tutor" or "student"
async function findCoursesByUserId(type, id) {
    type += '_course_ids'
    let courses = [];
    let user = await findUserById(id);
    for (const i of user[type]) {
        let course = await findCourseById(i);
        if (course != null) courses.push(course);
    }
    return courses;
}


async function updateCourse(id, data) {
    const promise = db.updateDocument(dbId, cId2, id, data);
    return promise.then(response => {
        return true;
    }, error => {
        console.log(error);
        return false;
    });
}


// student_id, description, subject
async function postTutorOder(data) {
    let num = await getCourseNum();
    if (num == null) return false;
    num++;
    const promise = db.createDocument(dbId, cId2, num.toString(), {
        id: num, tutor_id: 999999, student_id: data[0], description: data[1], 
        is_accepted: false, is_started: false, is_finished: false, is_rejected: false, 
        is_one_time: true, subject: data[2], tutor_rating: 10, student_rating: 10
    });
    return promise.then(response => {
        return true;
    }, error => {
        console.log(error);
        return false;
    })
}


async function getTutorOrder() {
    const promise = db.listDocuments(dbId, cId2, [Query.equal('is_one_time', true)]);
    return promise.then(response => {
        return response['documents'];
    }, error => {
        console.log(error);
        return null;
    });
}


//  tutor_id, student_id, description, subject
async function createTutorRequest(data) {
    let num = await getCourseNum();
    if (num == null) return false;
    num++;
    const promise = db.createDocument(dbId, cId2, num.toString(), {
        id: num, tutor_id: data[0], student_id: data[1], description: data[2], 
        is_accepted: false, is_started: false, is_finished: false, is_rejected: false, 
        is_one_time: false, subject: data[3], tutor_rating: 10, student_rating: 10
    });
    return promise.then(response => {
        sendTutorRequest([response['id'], response['tutor_id'], response['student_id']])
        return true;
    }, error => {
        console.log(error);
        return false;
    })
}


// id, tutor_id, student_id
async function sendTutorRequest(data) {
    let tutor = await findUserById(data[1]);
    let trq = tutor['request_course_ids'];
    trq.push(data[0])
    await updateUser(data[1], {request_course_ids: trq});
    let student = await findUserById(data[2]);
    let srq = student['request_course_ids'];
    srq.push(data[0]);
    await updateUser(data[2], {request_course_ids: srq});   
}


async function acceptCourse(cid) {
    let course = await findCourseById(cid);
    let tid = course['tutor_id'];
    let sid = course['student_id'];
    await updateCourse(cid, {is_accepted: true, is_started: true});
    let tutor = await findUserById(tid);
    let tc = tutor['tutor_course_ids'];
    tc.push(cid);
    let trq = tutor['request_course_ids'];
    trq = trq.splice(trq.findIndex(e => {return e == cid}), 1);
    await updateUser(tid, {tutor_course_ids: tc, request_course_ids: trq});
    let student = await findUserById(sid);
    let sc = student['student_course_ids'];
    sc.push(cid);
    let srq = student['request_course_ids'];
    srq = srq.splice(srq.findIndex(e => {return e == cid}), 1);
    await updateUser(sid, {student_course_ids: sc, request_course_ids: srq});
}


async function rejectCourse(cid) {
    await updateCourse(cid, {is_rejected: true});
}


async function finishedCourse(cid) {
    await updateCourse(cid, {is_started: false, is_finished: true});
}


// type is either "tutor" or "student"
async function rating(type, cid, rate) {
    let course = await findCourseById(cid);
    let uid = course[type+'_id'];
    let user = await findUserById(uid);
    let current_rate = user[type+'_rating'];
    let num_rate = user[type+'_course_ids'].length;
    let new_rate = Math.round((current_rate*num_rate+rate)/(num_rate+1));
    if (type == 'tutor') {
        await updateUser(uid, {tutor_rating: new_rate});
        await updateCourse(cid, {tutor_rating: rate});
    } else {
        updateUser(uid, {student_rating: new_rate});
        await updateCourse(cid, {student_rating: rate});
    }
}


export {userSignIn, userSignUp, isExistUser, getUserNum, findUsers, findUserById, findUsersByTags, sortTutorByRating, 
    updateUser, getCourseNum, findCourseById, findCoursesByUserId, updateCourse, postTutorOder, getTutorOrder, 
    createTutorRequest, sendTutorRequest, acceptCourse, rejectCourse, finishedCourse, rating};
