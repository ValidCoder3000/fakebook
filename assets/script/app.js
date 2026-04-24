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
    set userName(userName) { this.#userName = userName }

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
        // constructor (id, name, userName, email, pages, initialState = false, groups)
    constructor (id, name, userName, email, pages, canMonetize, groups) {
        super (id, name, userName, email)
        this.#pages = pages;
        // this.#canMonetize = initialState;
        this.#canMonetize = canMonetize
        this.#groups = groups;
    }

    // getCanMonetize () {
    //         return this.#canMonetize;
    //     }

    //     setCanMonetize(state) {
    //     if (typeof state === "boolean") {
    //     this.#canMonetize = state;
    //     } else {
    //     throw new Error("Value must be boolean");
    //     }
    // }

    getInfo() {
        return `${this.#pages}`+`${this.#canMonetize}`+`${this.#groups}`
    }

}

const currentSubscriber = new Subscriber(20, 'Emmanuel', 'eeolannye@gmail.com', ['Book Page', 'History Page', 'Movie Page'], true, ['Second group', 'Wisdom group'])

const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close");
const button = document.querySelector("#button");
const text = document.querySelector("textarea");

btn.addEventListener("click", function() {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


button.addEventListener('click', function() {
    const typedText = text.value;
    if (typedText === '') return;
    const news = document.createElement('p')
    news.textContent = typedText;
    const postsSection = document.querySelector('section');
    postsSection.appendChild(news);
    text.value = '';
})