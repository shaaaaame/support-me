import {userSignIn, findUsers, postTutorOder, createTutorRequest, rating} from './Database.js'


class User {
    #id
    #is_sign_in
    constructor() {
        this.#id = -1;
        this.#is_sign_in = false;
    }

    async login(email, password) {
        let status = await userSignIn(email, password);
        if (status) {
            this.#is_sign_in = true;
            let user = await findUsers('email', email);
            this.#id = user[0]['id'];
        }
        return status;
    }

    logout() {
        this.#id = -1;
        this.#is_sign_in = false;
    }

    getUserId() {
        return this.#id;
    }

    getSignInStatus() {
        return this.#is_sign_in;
    }

    async postQuestion(subject, description) {
        if (this.#is_sign_in) return await postTutorOder([this.#id, description, subject]);
        return false;
    }

    async sendRequest(tid, subject, description) {
        if (this.#is_sign_in) return await createTutorRequest([tid, this.#id, description, subject]);
        return false;
    }

    async rateTutor(cid, rate) {
        if (this.#is_sign_in) {
            await rating('tutor', cid, rate);
            return true;
        }
        return false;
    }

    async rateStudent(cid, rate) {
        if (this.#is_sign_in) {
            await rating('student', cid, rate);
            return true;
        }
        return false;
    }
}


const user = new User();

export {user};