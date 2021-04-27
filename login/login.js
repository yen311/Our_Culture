"use strict";

const registerpop = document.querySelector(".register");
const register = document.querySelector("#register");
const loginpop = document.querySelector(".login");
const login = document.querySelector("#login");
const closeR = document.querySelector("#closeR");
const closeL = document.querySelector("#closeL");
const closeReset = document.querySelector("#closeReset");
const overlay = document.querySelector(".overlay");
const forgetpop = document.querySelector(".forget");
const forget = document.querySelector("#forget");
const newbtn = document.querySelector("#new");

// Resigter form pop
const pop = function () {
  registerpop.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// Login form pop
const pop1 = function () {
  loginpop.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// Pop close
const close = function () {
  registerpop.classList.add("hidden");
  loginpop.classList.add("hidden");
  forgetpop.classList.add("hidden");
  overlay.classList.add("hidden");
};
// Forget pop
const forgetf = function () {
  loginpop.classList.add("hidden");
  forgetpop.classList.remove("hidden");
};
const newf = function () {
  loginpop.classList.add("hidden");
  registerpop.classList.remove("hidden");
};

register.addEventListener("click", pop);
closeR.addEventListener("click", close);
closeL.addEventListener("click", close);
closeReset.addEventListener("click", close);
login.addEventListener("click", pop1);
forget.addEventListener("click", forgetf);
newbtn.addEventListener("click", newf);
