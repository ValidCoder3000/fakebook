'use strict';

class User {
    #id;
    #name;
    #userName;
    #email;
    constructor (id, name, userName, email) {
        this.#id = id;
        this.#email = email;
        this.#name = name;
        this.#userName = userName;
    }
    set id (id) { this.#id = id}
    set email(email) { this.#email = email;}
    set name(name) { this.#name = name;}
    set userName(userName) { this.#userName}

    get id() {return this.#id}
    get email() { return this.#email}
    get name() { return this.#name}
    get userName() { return this.#userName}

    getInfo() {
        return `${this.#name}`+`${this.#userName}`+`${this.#email}`+`${this.#id}`
    }
}

class Subscriber extends User {
    #pages=[];
    #groups=[];
    #canMonetize;
    constructor (id, name, userName, email, pages, canMonetize, groups) {
        super (id, name, userName, email)
        this.#pages = pages;
        this.#canMonetize = canMonetize;
        this.#groups = groups;
    }

    getInfo() {
        return `${this.#pages}`+`${this.#canMonetize}`+`${this.#groups}`
    }

}

const Subscriber = new Subscriber()