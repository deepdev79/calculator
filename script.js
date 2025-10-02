"use strict";

const inp = document.querySelector(".inp");
const digits = document.querySelectorAll(".digit");
const operations = document.querySelectorAll(".opt");
let a, b, tempCh, result;
a = null;

const operate = function (x, y) {};

const choice = function (z) {
  if (z === "AC") {
    a = null;
    b = null;
    inp.value = "";
    return;
  } else if (z === "C") {
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
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) {
        inp.value = "undefined";
        return;
      }
      result = a / b;
      break;
    case "%":
      result = a % b;
      break;
    default:
      console.log("Error");
  }
  inp.value = parseFloat(result.toFixed(2));
  if (z === "=") {
    a = null;
    b = null;
    return;
  } else {
    a = result;
    tempCh = z;
    inp.value = "";
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
