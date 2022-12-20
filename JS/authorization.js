"use strict";

const arrUsers = [
  {
    name: "Andrzey Kolovor",
    country: "Poland",
    age: "17",
    email: "AndrzeyLoko@gmail.com",
    role: "admin",
    image: "Ellipse 4.png",
    password: "5508",
  },
  {
    name: "Viktoria Dumbra",
    country: "Ukraine",
    age: "22",
    email: "ViktoriaDumb@gmail.com",
    role: "moderator",
    image: "Ellipse 1.png",
    password: "5508",
  },
  {
    name: "Katerina Polomova",
    country: "Poland",
    age: "19",
    email: "KaterinaPolo@gmail.com",
    role: "user",
    image: "Ellipse 2.png",
    password: "5508",
  },
  {
    name: "Timur Bondar",
    country: "Ukraine",
    age: "19",
    email: "rumbleeee431@gmail.com",
    role: "owner",
    image: "avatar luffy.jpg",
    password: "5508",
  },
  {
    name: "Olena Dumbra",
    country: "Poland",
    age: "27",
    email: "OlghaDumb@gmail.com",
    role: "admin",
    image: "Ellipse 1.png",
    password: "5508",
  },
];


let authorizationUser ;
const inputName = document.querySelector(".authorization__name");
const inputPassword = document.querySelector(".authorization__password");
const avatarImg = document.querySelector(".header__nav__avatar");

function loginUser() {
  console.log(authorizationUser);
  avatarImg.src = `../src/Image/${authorizationUser.image}`;
  sign_in.style.display = "none";
  avatarImg.style.display = "block";
}

window.addEventListener("DOMContentLoaded", () => {
    authorizationUser = JSON.parse(localStorage.getItem("user") );
  if(authorizationUser){
    loginUser()
  }
  })

  singIn.addEventListener("click", function () {
    for (let i = 0; i < arrUsers.length; i++) {
      let inputPasswordValue = inputPassword.value.trim();
      let inputNameValue = inputName.value.trim();
      if (arrUsers[i].name == inputNameValue) {
        if (inputPasswordValue == arrUsers[i].password) {
          authorizationUser = arrUsers[i];
          loginUser();
          localStorage.setItem("user",JSON.stringify(authorizationUser));
          window.location.reload();
        }
      } else if (arrUsers[i].email == inputNameValue) {
        if (inputPasswordValue == arrUsers[i].password) {
          authorizationUser = arrUsers[i];
          loginUser();
          localStorage.setItem("user",JSON.stringify(authorizationUser));
          window.location.reload();
        }
      }
    }
  });
  const logOutBtn = document.querySelector(".avatar-logOut");
  const avatarMenu = document.querySelector(".avatar-menu");
  const avatarMenuOverlay = document.querySelector(".avatar-menu-overlay");
  const clouseImgMenuAvatar = document.querySelector(".clouse-menu-avatar");
  
  function hiddenAvatarAndMenu() {
    avatarMenu.style.display = "none";
    avatarMenuOverlay.style.display = "none";
  }
  function logOut(){
    localStorage.removeItem("user");
    singIn.style.display = "block";
    avatarImg.style.display = "none";
    window.location.reload();
  };
  avatarImg.addEventListener("click", function () {
    avatarMenu.style.display = "flex";
    avatarMenuOverlay.style.display = "block";
    logOutBtn.addEventListener("click", function () {
      hiddenAvatarAndMenu();
      logOut();
    });
    avatarMenuOverlay.addEventListener("click", function () {
      hiddenAvatarAndMenu();
    });
    clouseImgMenuAvatar.addEventListener("click", function () {
      hiddenAvatarAndMenu();
    });

    console.log('wokr');
  });
  
