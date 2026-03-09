const title = prompt("What is your project?")
const screens = prompt("What types of screens need to develope?")
const screenPrice = +prompt("How much will this work cost?")
const adaptive = confirm("Will the site be adaptive?")

const user1 = {
  service: prompt("What additional type of service is required?"),
  servicePrice: +prompt("How much will it cost?"),
}
const user2 = {
  service: prompt("What additional type of service is required?"),
  servicePrice: +prompt("How much will it cost?"),
}
const rollback = 20 // %
const fullPrice = screenPrice + user1.servicePrice + user2.servicePrice
const commision = fullPrice * (rollback/100)
const servicePercentPrice = Math.ceil(fullPrice - commision)

console.log(servicePercentPrice);

console.log(`Cost of screen layout ${screenPrice}$`);
console.log(`Website dev cost ${fullPrice}$`);
console.log(`Commission to intermediary for work ${commision}$`);

  if (fullPrice > 3000) {
  console.log("Descount 10%");
} else if (fullPrice > 1500 && fullPrice <= 3000) {
  console.log("Descount 5%");
} else if (fullPrice <= 1500 && fullPrice >= 0) {
  console.log("No discount is available");
} else {
  console.log("Something went wrong");
}