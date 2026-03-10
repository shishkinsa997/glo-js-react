const title = prompt("What is your project?");
const screens = prompt("What types of screens need to develope?");
const screenPrice = +prompt("How much will this work cost?");
const adaptive = confirm("Will the site be adaptive?");
const user1 = {
  service: prompt("What additional type of service is required?"),
  servicePrice: +prompt("How much will it cost?"),
};
const user2 = {
  service: prompt("What additional type of service is required?"),
  servicePrice: +prompt("How much will it cost?"),
};
const getAllServicePrices = function () {
  return user1.servicePrice + user2.servicePrice;
};

const allServicePrices = getAllServicePrices();
const rollback = 20; // %
const fullPrice = getFullPrice();
const commision = fullPrice * (rollback / 100);
const servicePercentPrice = getServicePercentPrices();

const showTypeOf = function (value) {
  console.log(value, typeof value);
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

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getTitle = function (title) {
  title = title.trim().toLowerCase();
  return title[0].toUpperCase() + title.slice(1);
};
function getServicePercentPrices() {
  return Math.ceil(fullPrice - commision);
}

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens);

console.log(getRollBackMessage(fullPrice));
console.log("Cost of work: ", getServicePercentPrices());
