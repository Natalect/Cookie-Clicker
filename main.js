// Structures and Units
var amountOfCranks = 0;
var amountOfWindmills = 0;
var amountOfWindTurbines = 0;
var amountOfSolarPanels = 0;

var crankPrice = 18;
var windmillPrice = 115;
var windTurbinePrice = 1265;
var solarPanelPrice = 13800;

var crankProduction = 0.1;
var windmillProduction = 1;
var windTurbineProduction = 8;
var solarPanelProduction = 47;

var upgradeWindmillPrice = 1000;
var upgradeCrankPrice = 500;
var upgradeWindmillPrice = 1500;
var upgradeSolarPanelPrice = 2000;
// /Structures and Units

// Structure and Unit Tax Variables
var windmillTax = 0;
var windTurbineTax = 0;
var solarPanelTax = 0;

// Start And variables
var batteries = 0.1;
var batteriesPerSecond = 0;
var batteriesPerClick = 1.0;
var purchasePrice = 1;
var taxes = 0;
var sandboxGetAmount = 0;
document.getElementById("crankPrice").innerHTML = crankPrice;
document.getElementById("windmillPrice").innerHTML = windmillPrice;
const upgradesList = document.getElementById("upgradesContainer");
const upgrade = document.getElementById("upgrades");
const taxCounter = document.getElementById("taxCounter");
const settingButton = document.getElementById("settingButton");
const clicker = document.getElementById("clicker");
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);

const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

upgrade.style.display = "none";
taxCounter.style.display = "none";
taxmode = document.getElementById("taxmodeSwitch");

// Hiding Function
upgradesList.addEventListener("mouseover", function handleMouseOver() {
  upgrade.style.display = "flex";
});

upgradesList.addEventListener("mouseout", function handleMouseOut() {
  upgrade.style.display = "none";
});

function clickerMouseDown() {
  clicker.style.color = "yellow";
}

function clickerMouseUp() {
  clicker.style.color = "rgba(255, 255, 255, 0.347)";
}

function onClick() {
  batteries += batteriesPerClick;
  document.getElementById("batteries").innerHTML = batteries.toFixed(0);
  document.getElementById("batteriesPerSecond").innerHTML =
    batteriesPerSecond.toFixed(1);
}

function sandboxGetButton() {
  var sandboxGetAmount = document.getElementById("sandboxGetAmount").value;
}

function addALot() {
  batteries += 999999999999999999999999999;
}

function purchaseCrank() {
  if (batteries > crankPrice) {
    batteries -= crankPrice;
    amountOfCranks++;
    batteriesPerSecond += 0.1;
    crankPrice += amountOfCranks;
    crankPrice = Math.round(crankPrice);
    document.getElementById("crankPrice").innerHTML = crankPrice;
    document.getElementById("amountOfCranks").innerHTML = amountOfCranks;
    document.getElementById("batteries").innerHTML = batteries.toFixed(0);
  } else if (batteries < crankPrice) {
    console.log("Cannot Afford!");
  }
}

function purchaseWindmill() {
  if (batteries > windmillPrice) {
    batteries -= windmillPrice;
    amountOfWindmills++;
    batteriesPerSecond += windmillProduction;
    windmillPrice += amountOfWindmills;
    windmillPrice = Math.round(windmillPrice);
    windmillTax += 0.5;
    document.getElementById("windmillPrice").innerHTML = windmillPrice;
    document.getElementById("amountOfWindmills").innerHTML = amountOfWindmills;
    document.getElementById("batteries").innerHTML = batteries.toFixed(0);
  } else if (batteries < crankPrice) {
    console.log("Cannot Afford!");
  }
}

function purchaseWindTurbine() {
  if (batteries > windTurbinePrice) {
    batteries -= windTurbinePrice;
    amountOfWindTurbines++;
    batteriesPerSecond += windTurbineProduction;
    windTurbinePrice += amountOfWindTurbines;
    windTurbinePrice = Math.round(windTurbinePrice);
    windTurbineTax += 2;
    document.getElementById("windTurbinePrice").innerHTML = windmillPrice;
    document.getElementById("amountOfWindTurbines").innerHTML =
      amountOfWindTurbines;
    document.getElementById("batteries").innerHTML = batteries.toFixed(0);
  } else if (batteries < windTurbinePrice) {
    console.log("Cannot Afford!");
  }
}

function purchaseSolarPanel() {
  if (batteries > solarPanelPrice) {
    batteries -= solarPanelPrice;
    amountOfSolarPanels++;
    batteriesPerSecond += solarPanelProduction;
    solarPanelPrice += amountOfSolarPanels;
    solarPanelPrice = Math.round(solarPanelPrice);
    solarPanelTax += 6;
    document.getElementById("solarPanelPrice").innerHTML = windmillPrice;
    document.getElementById("amountOfSolarPanels").innerHTML =
      amountOfSolarPanels;
    document.getElementById("batteries").innerHTML = batteries.toFixed(0);
  } else if (batteries < solarPanelPrice) {
    console.log("Cannot Afford!");
  }
}

function upgradeCrank() {
  if (batteries > upgradeCrankPrice) {
    upgradeCrankPrice *= 5;
    crankProduction *= 2;
    batteriesPerClick *= 2;
    document.getElementById("batteries").innerHTML = batteries.toFixed(0);
  } else if (batteries < upgradeCrankPrice) {
    console.log("Cannot Afford!");
  }
}

function upgradeWindmill() {
  if (batteries > upgradeWindmillPrice) {
    upgradeWindmillPrice *= 5;
    windmillProduction *= 2;
    amountOfWindmillUpgrades++;
    windmillTax += 0.1;
    document.getElementById("batteries").innerHTML = batteries.toFixed(0);
  } else if (batteries < upgradeWindmillPrice) {
    console.log("Cannot Afford!");
  }
}

function upgradeWindTurbine() {
  if (batteries > upgradeWindTurbinePrice) {
    upgradeWindTurbinePrice *= 5;
    windTurbineProduction *= 2;
    amountOfWindTurbineUpgrades++;
    windTurbineTax += 0.1;
    document.getElementById("batteries").innerHTML = batteries.toFixed(0);
  } else if (batteries < upgradeWindTurbinePrice) {
    console.log("Cannot Afford!");
  }
}

function upgradeSolarPanel() {
  if (batteries > upgradeSolarPanelPrice) {
    upgradeSolarPanelPrice *= 5;
    solarPanelProduction *= 2;
    amountOfSolarPanelsUpgrades++;
    solarPanelTax += 0.1;
    document.getElementById("batteries").innerHTML = batteries.toFixed(0);
  } else if (batteries < upgradeSolarPanelPrice) {
    console.log("Cannot Afford!");
  }
}

function advanceWindmill() {
  if (batteries > (windTurbinePrice -= windmillPrice)) {
    batteries -= windTurbinePrice;
    amountOfWindTurbines++;
    batteriesPerSecond += windTurbinePrice;
    windTurbinePrice += amountOfWindTurbines;
    windTurbinePrice = Math.round(windTurbinePrice);
    windTurbineTax += 2;
    document.getElementById("windTurbinePrice").innerHTML = windmillPrice;
    document.getElementById("amountOfWindTurbines").innerHTML =
      amountOfWindTurbines;

    amountOfWindmills -= 1;
    batteriesPerSecond -= windmillProduction;
    windmillPrice -= amountOfWindmills;
    windmillPrice = Math.round(windmillPrice);
    windmillTax -= 0.5;
    document.getElementById("windmillPrice").innerHTML = windmillPrice;
    document.getElementById("amountOfWindmills").innerHTML = amountOfWindmills;
    document.getElementById("batteries").innerHTML = batteries.toFixed(0);
    document.getElementById("batteries").innerHTML = batteries.toFixed(0);
  } else if (batteries < (windTurbinePrice -= windmillPrice)) {
    console.log("Cannot Afford!");
  }
}

$(function () {
  setInterval(oneSecondFunction, 1000);
});

function oneSecondFunction() {
  // Check if the element is selected/checked
  if (taxmode.checked) {
    taxes = windmillTax += windTurbineTax += solarPanelTax;
    batteries += batteriesPerSecond;
    batteries -= taxes;
    document.getElementById("windmillTax").innerHTML = windmillTax.toFixed(0);
    document.getElementById("taxCounter").innerHTML = taxes.toFixed(0);
    taxCounter.style.display = "block";
    document.getElementById("taxCounter").innerHTML = taxes.toFixed(0);
  } else {
    batteries += batteriesPerSecond;
    taxCounter.style.display = "none";
  }

  document.getElementById("batteries").innerHTML = batteries.toFixed(0);
  document.getElementById("batteriesPerSecond").innerHTML =
    batteriesPerSecond.toFixed(1);
}
