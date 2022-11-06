import {userSignIn, userSignUp, isExistUser, getUserNum, findUsers, findUserById, findUsersByTags, 
    sortTutorByRating, updateUser, getCourseNum, findCourseById, findCoursesByUserId, updateCourse, 
    postTutorOder, getTutorOrder, createTutorRequest, sendTutorRequest, acceptCourse, rejectCourse, 
    finishedCourse, rating} from './Database.js'


class System {
    static async regsiter(email, password, phone_number, first_name, last_name, age, education_level, introduction, tutor_tags, student_tags) {
        if (!await isExistUser('email', email)) return await userSignUp([first_name, last_name, age, education_level, tutor_tags, student_tags, email, phone_number, password, introduction]);
        return false;
    }

    static async showQuestions() {
        return await getTutorOrder();
    }
}