// Structures and Units
var amountOfCursors = 0;
var amountOfGrandmas = 0;

var cursorPrice = 14;
var grandmaPrice = 99;

var cursorProduction = 0.1;
var grandmaProduction = 0.1;
// /Structures and Units

// Start And variables
var cookies = 0;
var cookiesPerSecond = 0;
var cookiesPerClick = 1.0;
var purchasePrice = 1;
document.getElementById("cursorPrice").innerHTML = cursorPrice;
document.getElementById("grandmaPrice").innerHTML = grandmaPrice;
const el = document.getElementById("upgradesContainer");
const hiddenDiv = document.getElementById("upgrades");
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
hiddenDiv.style.display = "none";

// Hiding Function
el.addEventListener("mouseover", function handleMouseOver() {
  hiddenDiv.style.display = "flex";
});

el.addEventListener("mouseout", function handleMouseOut() {
  hiddenDiv.style.display = "none";
});

function onClick() {
  cookies += cookiesPerClick;
  document.getElementById("cookies").innerHTML = cookies.toFixed(1);
  document.getElementById("cookiesPerSecond").innerHTML =
    cookiesPerSecond.toFixed(1);
}

function onCursorClick() {
  if (cookies > cursorPrice) {
    cookies -= cursorPrice;
    amountOfCursors += 1;
    cookiesPerSecond += 0.1;
    cursorPrice += amountOfCursors;
    cursorPrice = Math.round(cursorPrice);
    document.getElementById("cursorPrice").innerHTML = cursorPrice;
    document.getElementById("amountOfCursors").innerHTML = amountOfCursors;
  } else if (cookies < cursorPrice) {
    console.log("Cannot Afford!");
  }
}

function onGrandmaClick() {
  if (cookies > grandmaPrice) {
    cookies -= grandmaPrice;
    amountOfGrandmas += 1;
    cookiesPerSecond += grandmaProduction;
    grandmaPrice += amountOfGrandmas;
    grandmaPrice = Math.round(grandmaPrice);
    document.getElementById("grandmaPrice").innerHTML = grandmaPrice;
    document.getElementById("amountOfGrandmas").innerHTML = amountOfGrandmas;
  } else if (cookies < cursorPrice) {
    console.log("Cannot Afford!");
  }
}

function upgradeCursor1() {
  if (cookies > 500) {
    cursorProduction *= 2;
    cookiesPerClick *= 2;
  } else if (cookies < 500) {
    console.log("Cannot Afford!");
  }
}

function upgradeGrandma1() {
  if (cookies > 1000) {
    grandmaProduction *= 2;
  } else if (cookies < 1000) {
    console.log("Cannot Afford!");
  }
}

$(function () {
  setInterval(oneSecondFunction, 1000);
});

function oneSecondFunction() {
  cookies += cookiesPerSecond;
  document.getElementById("cookies").innerHTML = cookies.toFixed(1);
  document.getElementById("cookiesPerSecond").innerHTML =
    cookiesPerSecond.toFixed(1);
}
