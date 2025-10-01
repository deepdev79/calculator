"use strict";

const inp = document.querySelector(".inp");
const digits = document.querySelectorAll(".digit");
const operations = document.querySelectorAll(".opt");
let a, b, tempCh, result;
a = null;

const operate = function (x, y) {};

const choice = function (z) {
  if (z === "C") {
    a = null;
    b = null;
    inp.value = "";
    return;
  }
  if (a === null) {
    a = Number(inp.value);
    inp.value = "";
    tempCh = z;
    return;
  }
  b = Number(inp.value);
  switch (tempCh) {
    case "+":
      result = a + b;
      inp.value = result;
      break;
    case "-":
      result = a - b;
      inp.value = result;
      break;
    case "*":
      result = a * b;
      inp.value = result;
      break;
    case "/":
      result = a / b;
      inp.value = result;
      break;
    // case "=":
    //   break;
    default:
      console.log("Error");
  }
  if (z === "=") {
    a = null;
    b = null;
    return;
  } else {
    a = b;
    tempCh = z;
    return;
  }
};

let test;
digits.forEach(function (digit) {
  digit.addEventListener("click", function () {
    inp.value += digit.textContent;
  });
});
operations.forEach(function (option) {
  option.addEventListener("click", function () {
    choice(option.textContent);
  });
});
