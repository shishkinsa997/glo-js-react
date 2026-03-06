const title = "js-react"
const screens = "Простые, Сложные, Интерактивные"
const screenPrice = (Math.random() * Math.random() * 1000).toFixed(0)
const rollback = Math.floor(Math.random() * 100)
const fullPrice = Math.round(Math.random() * 5000)
const adaptive = !true

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} долларов`);
console.log(`Стоимость разработки сайта ${fullPrice} долларов`);

console.log(screens.toLocaleLowerCase().split(""));
console.log(`Процент отката посреднику за работу ${fullPrice * (rollback/100)} `);
