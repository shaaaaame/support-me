// import {Client, Account, Databases, Query} from 'appwrite'


// const client = new Client().setEndpoint('http://localhost/v1').setProject('SupportMe');
// const db = new Databases(client);
// const dbId = 'SupportMe', cId1 = 'User', cId2 = 'Course';


// // first_name, last_name, age, educational_level, tutor_tags, student_tags, email, phone_number, password, introduction
// async function createUser(data) {
//     let num = await getUsersNum();
//     num++;
//     const promise = db.createDocument(dbId, cId1, num.toString(), {
//         id: num, first_name: data[0], last_name: data[1], age: data[2], education_level: data[3],
//         tutor_rating: 10, student_rating: 10, tutor_tags: data[4], student_tags: data[5], email: data[6], 
//         phone_number: data[7], password: data[8], tutor_course_ids: [], student_course_ids: [], 
//         is_need_help: false, help_num: 0, introduction: data[9]
//     });
//     return promise.then(response => {
//         return true;
//     }, error => {
//         console.log(error);
//         return false;
//     })
// }


// // email, password
// async function login(data) {
//     let user = await searchUsers('email', data[0]);
//     return user != null && user['total'] == 1 && user['documents'][0]['password'] == data[1];
// }


// async function getUsersNum() {
//     const promise = db.listDocuments(dbId, cId1);
//     return promise.then(response => {
//         return response['total'];
//     }, error => {
//         console.log(error);
//         return 0;
//     });
// }


// async function searchUsers(key, value) {
//     const promise = db.listDocuments(dbId, cId1, [Query.equal(key, value)]);
//     return promise.then(response => {
//         return response;
//     }, error => {
//         console.log(error);
//         return null;
//     });
// }


// async function isExistUser(key, value) {
//     let users = await searchUsers(key, value);
//     if (users == null) return true;
//     return users['total'] != 0;
// }


// async function searchUsersTags(key, value) {
//     const promise = db.listDocuments(dbId, cId1, [Query.search(key, value)]);
//     return promise.then(response => {
//         return response;
//     }, error => {
//         console.log(error);
//         return null;
//     })
// }


// // async function testing() {
// //     let t = await searchUsersTags(, 'a');
// //     console.log(t);
// // }


// // testing();

// export default login;