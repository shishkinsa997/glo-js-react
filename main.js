let title;
let screens;
let screenPrice;
let adaptive;

let rollback = 20; // %
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(parseFloat(num));
};

const asking = function () {
  title = prompt("What is your project?", "Project");
  screens = prompt(
    "What types of screens need to develope?",
    "Simple, Complex",
  );

  do {
    screenPrice = parseFloat(prompt("How much will this work cost?", 1200));
  } while (!isNumber(screenPrice));

  screenPrice = parseFloat(screenPrice);

  adaptive = confirm("Will the site be adaptive?");
};

const getAllServicePrices = function () {
  let servicePrice;
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt(
        "What additional type of service is required?",
        "Packaging",
      );
    } else if (i === 1) {
      service2 = prompt(
        "What additional type of service is required?",
        "Shipping",
      );
    }

    do {
      servicePrice = parseFloat(prompt("How much will it cost?", 1500));
    } while (!isNumber(servicePrice));

    sum += servicePrice;
  }

  return sum;
};

const showTypeOf = function (value) {
  console.log(value, typeof value);
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

function getServicePercentPrices() {
  return Math.ceil(fullPrice - fullPrice * (rollback / 100));
}

const getTitle = function (title) {
  title = title.trim().toLowerCase();
  return title[0].toUpperCase() + title.slice(1);
};

const getRollBackMessage = function (price) {
  if (price > 3000) {
    return "Descount 10%";
  } else if (price > 1500 && price <= 3000) {
    return "Descount 5%";
  } else if (price <= 1500 && price >= 0) {
    return "No discount is available";
  } else {
    return "Something went wrong";
  }
};

asking();

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle(title);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(getRollBackMessage(fullPrice));
console.log(screens.length);

console.log("allServicePrices: ", allServicePrices);
console.log("servicePercentPrice: ", servicePercentPrice);
