// 'use strict';

// class User {
//     #id;
//     #name;
//     #userName;
//     #email;
//     constructor (id, name, userName, email) {
//         this.#id = id;
//         this.#email = email;
//         this.#name = name;
//         this.#userName = userName;
//     }
//     set id (id) { this.#id = id}
//     set email(email) { this.#email = email;}
//     set name(name) { this.#name = name;}
//     set userName(userName) { this.#userName = userName }

//     get id() {return this.#id}
//     get email() { return this.#email}
//     get name() { return this.#name}
//     get userName() { return this.#userName}

//     getInfo() {
//         return `${this.#name}`+`${this.#userName}`+`${this.#email}`+`${this.#id}`
//     }
// }

// class Subscriber extends User {
//     #pages=[];
//     #groups=[];
//     #canMonetize;
//         // constructor (id, name, userName, email, pages, initialState = false, groups)
//     constructor (id, name, userName, email, pages, canMonetize, groups) {
//         super (id, name, userName, email)
//         this.#pages = pages;
//         // this.#canMonetize = initialState;
//         this.#canMonetize = canMonetize
//         this.#groups = groups;
//     }

//     // getCanMonetize () {
//     //         return this.#canMonetize;
//     //     }

//     //     setCanMonetize(state) {
//     //     if (typeof state === "boolean") {
//     //     this.#canMonetize = state;
//     //     } else {
//     //     throw new Error("Value must be boolean");
//     //     }
//     // }

//     getInfo() {
//         return `${this.#pages}`+`${this.#canMonetize}`+`${this.#groups}`
//     }

// }

// const currentSubscriber = new Subscriber(20, 'Emmanuel', 'eeolannye@gmail.com', ['Book Page', 'History Page', 'Movie Page'], true, ['Second group', 'Wisdom group'])

// const modal = document.getElementById("myModal");
// const btn = document.getElementById("openModalBtn");
// const closeBtn = document.querySelector(".close");
// const button = document.querySelector("#button");
// const text = document.querySelector("textarea");

// btn.addEventListener("click", function() {
//   modal.style.display = "block";
// });

// closeBtn.addEventListener("click", function() {
//   modal.style.display = "none";
// });

// window.addEventListener("click", function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });


// button.addEventListener('click', function() {
//     const typedText = text.value;
//     if (typedText === '') return;
//     const news = document.createElement('p')
//     news.textContent = typedText;
//     const postsSection = document.querySelector('section');
//     postsSection.appendChild(news);
//     text.value = '';
// })

'use strict';

class User {
  #id;
  #name;
  #userName;
  #email;

  constructor(id, name, userName, email) {
    this.#id = id;
    this.#name = name;
    this.#userName = userName;
    this.#email = email;
  }

  getInfo() {
    return {
      id: this.#id,
      name: this.#name,
      userName: this.#userName,
      email: this.#email
    };
  }
}

class Subscriber extends User {
  #pages;
  #groups;
  #canMonetize;

  constructor(id, name, userName, email, pages, groups, canMonetize) {
    super(id, name, userName, email);
    this.#pages = pages;
    this.#groups = groups;
    this.#canMonetize = canMonetize;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      pages: this.#pages,
      groups: this.#groups,
      canMonetize: this.#canMonetize
    };
  }
}

const subscriber = new Subscriber(
  1,
  "Emmanuel Olannye",
  "Emmanuel",
  "eeolannye@email.com",
  ["HTML Page", "CSS Page"],
  ["FrontEnd Dev", "BackEnd Dev"],
  true
);

const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");
const fileNameSpan = document.getElementById("fileName");
const textarea = document.querySelector("textarea");
const postBtn = document.getElementById("post");
const postsContainer = document.createElement("div");
postsContainer.id = "posts";
document.querySelector(".container").appendChild(postsContainer);

document.getElementById("cancel-dropdown").addEventListener("click", () => {
  document.querySelector(".user-info").classList.add("hidden");
});

document.getElementById("user-icon").addEventListener("click", () => {
  const info = subscriber.getInfo();
  const infoDiv = document.querySelector(".info-body");

  infoDiv.innerHTML = `
    <p><strong>ID:</strong> ${info.id}</p>
    <p><strong>Name:</strong> ${info.name}</p>
    <p><strong>Username:</strong> ${info.userName}</p>
    <p><strong>Email:</strong> ${info.email}</p>
    <p><strong>Pages:</strong> ${info.pages.join(", ")}</p>
    <p><strong>Groups:</strong> ${info.groups.join(", ")}</p>
    <p><strong>Can Monetize:</strong> ${info.canMonetize}</p>
  `;

  document.querySelector(".user-info").classList.remove("hidden");
});

function togglePostButton() {
  postBtn.disabled = !(textarea.value.trim() || fileInput.files.length);
}
textarea.addEventListener("input", togglePostButton);
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    const imgURL = URL.createObjectURL(file);
    preview.innerHTML = `<img src="${imgURL}" style="max-width:500px; border-radius:5px;">`;
    fileNameSpan.textContent = file.name;
  } else {
    preview.innerHTML = "";
    fileNameSpan.textContent = "";
  }
  togglePostButton();
});

postBtn.addEventListener("click", () => {
  const text = textarea.value.trim();
  const file = fileInput.files[0];

  if (!text && !file) return;

  const postDiv = document.createElement("div");
  postDiv.classList.add("post-container");

  const header = `
    <div class="post-header">
      <div class="post-header-info">
        <img src="./assets/media/hot-air baloon.jpg" id="user-info-icon" style="border-radius:50%">
        <p>${subscriber.getInfo().name}</p>
      </div>
      <div class="post-date"><p>${new Date().toLocaleString()}</p></div>
    </div>
  `;
  postDiv.innerHTML = header;

  const body = document.createElement("div");
  body.classList.add("post-body");

  if (text) {
    const textP = document.createElement("p");
    textP.classList.add("post-text");
    textP.textContent = text;
    body.appendChild(textP);
  }

  if (file) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.classList.add("post-image");
    body.appendChild(img);
  }

  postDiv.appendChild(body);
  postsContainer.prepend(postDiv);

  textarea.value = "";
  fileInput.value = "";
  preview.innerHTML = "";
  fileNameSpan.textContent = "";
  togglePostButton();
});