// Structures and Units
var amountOfCranks = 0;
var amountOfWindmills = 0;

var crankPrice = 14;
var windmillPrice = 99;

var crankProduction = 0.1;
var windmillProduction = 1;

var upgradeWindmillPrice = 1000;
var upgradeCrankPrice = 500;
// /Structures and Units

// Structure and Unit Tax Variables
var windmillTax = 0;
var windmillPurchaseTax = 0;
var windmillUpgradeTax = 0;

// Start And variables
var batteries = 999999999998999;
var batteriesPerSecond = 0;
var batteriesPerSecondToShow = 0;
var batteriesPerClick = 1.0;
var purchasePrice = 1;
var taxes = 0;
var settingOpen = false;
var earningOpen = false;
document.getElementById("crankPrice").innerHTML = crankPrice;
document.getElementById("windmillPrice").innerHTML = windmillPrice;
const upgradesList = document.getElementById("upgradesContainer");
const upgrade = document.getElementById("upgrades");
const settingButton = document.getElementById("settingButton");
const setting = document.getElementById("setting");
const earninggButton = document.getElementById("earningButton");
const earning = document.getElementById("earning");
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
upgrade.style.display = "none";
taxmode = document.getElementById("taxmodeSwitch");

// Hiding Function
upgradesList.addEventListener("mouseover", function handleMouseOver() {
  upgrade.style.display = "flex";
});

upgradesList.addEventListener("mouseout", function handleMouseOut() {
  upgrade.style.display = "none";
});

// Show taxes
setting.style.display = "none";
earning.style.display = "none";

function settingPressed() {
  if (settingOpen == false) {
    setting.style.display = "flex";
    settingOpen = true;
  } else {
    setting.style.display = "none";
    settingOpen = false;
  }
}

function earningPressed() {
  if (earningOpen == false) {
    earning.style.display = "flex";
    earningOpen = true;
  } else {
    earning.style.display = "none";
    earningOpen = false;
  }
}

function onClick() {
  batteries += batteriesPerClick;
  document.getElementById("batteries").innerHTML = batteries.toFixed(1);
  document.getElementById("batteriesPerSecond").innerHTML =
    batteriesPerSecond.toFixed(1);
}

function purchaseCrank() {
  if (batteries > crankPrice) {
    batteries -= crankPrice;
    amountOfCranks += 1;
    batteriesPerSecond += 0.1;
    crankPrice += amountOfCranks;
    crankPrice = Math.round(crankPrice);
    document.getElementById("crankPrice").innerHTML = crankPrice;
    document.getElementById("amountOfCranks").innerHTML = amountOfCranks;
  } else if (batteries < crankPrice) {
    console.log("Cannot Afford!");
  }
}

function purchaseWindmill() {
  if (batteries > windmillPrice) {
    batteries -= windmillPrice;
    amountOfWindmills += 1;
    batteriesPerSecond += windmillProduction;
    windmillPrice += amountOfWindmills;
    windmillPrice = Math.round(windmillPrice);
    windmillPurchaseTax += 0.5;
    document.getElementById("windmillPrice").innerHTML = windmillPrice;
    document.getElementById("amountOfWindmills").innerHTML = amountOfWindmills;
  } else if (batteries < crankPrice) {
    console.log("Cannot Afford!");
  }
}

function upgradeCrank() {
  if (batteries > upgradeCrankPrice) {
    upgradeCrankPrice *= 5;
    crankProduction *= 2;
    batteriesPerClick *= 2;
  } else if (batteries < 500) {
    console.log("Cannot Afford!");
  }
}

function upgradeWindmill() {
  if (batteries > upgradeWindmillPrice) {
    upgradeWindmillPrice *= 5;
    windmillProduction *= 2;
    amountOfWindmillUpgrades += 1;
    windmillUpgradeTax += 0.1;
  } else if (batteries < 1000) {
    console.log("Cannot Afford!");
  }
}

$(function () {
  setInterval(oneSecondFunction, 1000);
});

function oneSecondFunction() {
  // Check if the element is selected/checked
  if (taxmode.checked) {
    windmillTax = windmillPurchaseTax += windmillUpgradeTax;
    taxes = windmillTax;
    batteries -= taxes;
    batteriesPerSecondToShow = batteriesPerSecond -= taxes;
    document.getElementById("batteriesPerSecond").innerHTML =
      batteriesPerSecondToShow;
  } else {
    document.getElementById("batteriesPerSecond").innerHTML =
      batteriesPerSecond;
  }
  batteriesPerSecondToShow;
  batteries += batteriesPerSecond;
  document.getElementById("batteries").innerHTML = batteries.toFixed(1);
  document.getElementById("windmillTax").innerHTML = windmillTax.toFixed(1);
}
