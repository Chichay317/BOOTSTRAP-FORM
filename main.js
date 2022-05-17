const form = document.querySelector(".forms");
const userName = document.querySelector(".username");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const c_pass = document.querySelector(".c_pass");
const error = document.querySelector(".error");
const userContainer = document.querySelector(".user-container");
const phoneContainer = document.querySelector(".phone-container");
const emailContainer = document.querySelector(".email-container");
const passContainer = document.querySelector(".password-container");
const c_passContainer = document.querySelector(".c-pass-container");
const passIcon = document.querySelector(".pass-icon");
const c_passIcon = document.querySelector(".c-pass-icon");
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".nav");

let errors = [];

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-bars");
  menu.classList.toggle("fa-xmark");
  navbar.classList.toggle("show");
});

passIcon.addEventListener("click", () => {
  passIcon.classList.toggle("fa-eye");
  passIcon.classList.toggle("fa-eye-slash");
  if (password.type == "password") {
    password.type = "text";
  } else if (password.type == "text") {
    password.type = "password";
  }
});

c_passIcon.addEventListener("click", () => {
  c_passIcon.classList.toggle("fa-eye");
  c_passIcon.classList.toggle("fa-eye-slash");
  if (c_pass.type == "password") {
    c_pass.type = "text";
  } else if (c_pass.type == "text") {
    c_pass.type = "password";
  }
});

userName.addEventListener("blur", (event) => {
  errors.length = 0;
  if (userContainer.children.length > 2) {
    console.log(userContainer.lastElementChild);
    userContainer.removeChild(userContainer.lastElementChild);
  }
  userName.value = event.target.value;
});

phone.addEventListener("blur", (event) => {
  errors.length = 0;
  if (phoneContainerlength > 2) {
    phoneContainer.removeChild(phoneContainer.lastElementChild);
  }
  phone.value = event.target.value;
});

email.addEventListener("blur", (event) => {
  errors.length = 0;

  if (emailContainer.children.length > 2) {
    emailContainer.removeChild(emailContainer.lastElementChild);
  }
  email.value = event.target.value;
});

password.addEventListener("blur", (event) => {
  errors.length = 0;

  if (passContainer.children.length > 2) {
    passContainer.removeChild(passContainer.lastElementChild);
  }
  password.value = event.target.value;
});

c_pass.addEventListener("blur", (event) => {
  errors.length = 0;

  if (c_passContainer.children.length > 2) {
    c_passContainer.removeChild(c_passContainer.lastElementChild);
  }
  c_pass.value = event.target.value;
});

const validateForm = (event) => {
  event.preventDefault();
  if (userName.value.length < 3) {
    errors.push("username");
    document
      .querySelector(".user-container")
      .insertAdjacentHTML(
        "beforeEnd",
        `<p class="error" style="color: red"> username must be more than 2 characters </p>`
      );
  }
  if (phone.value.length < 10 || phone.value.length > 14) {
    errors.push("phone");
    document
      .querySelector(".phone-container")
      .insertAdjacentHTML(
        "beforeEnd",
        `<p class="error" style="color: red"> phone Number must be more than 9 and less than 14 characters </p>`
      );
  }
  if (email.value.length < 6) {
    errors.push("email");
    document
      .querySelector(".email-container")
      .insertAdjacentHTML(
        "beforeEnd",
        `<p class="error" style="color: red"> email must be more than 5 characters </p>`
      );
  }
  if (password.value.length < 6) {
    errors.push("password");
    document
      .querySelector(".password-container")
      .insertAdjacentHTML(
        "beforeEnd",
        `<p class="error" style="color: red"> password must be more than 5 characters </p>`
      );
  }
  if (c_pass.value !== password.value) {
    errors.push("c-pass");
    document
      .querySelector(".c-pass-container")
      .insertAdjacentHTML(
        "beforeEnd",
        `<p class="error" style="color: red"> Confirm password must be the same as password</p>`
      );
  }

  if (errors.length === 0) {
    alert(`form from ${userName.value} has been submitted`);
    userName.value = "";
    phone.value = "";
    email.value = "";
    password.value = "";
    c_pass.value = "";
  }
};

form.addEventListener("submit", validateForm);
