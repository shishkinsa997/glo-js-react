const block = document.createElement("pre");
const now = new Date();

const hours = now.getHours();
const greet =
  hours < 6
    ? "Доброй ночи"
    : hours < 12
      ? "Доброе утро"
      : hours < 18
        ? "Добрый день"
        : "Добрый вечер";

const daysOfWeek = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];
const weekday = now.getDay();

const time = now.toLocaleTimeString("en");

const endOfYear = new Date(2027, 0)
const diff = endOfYear - now
const remainingDays = Math.floor(diff / 1000 / 60 / 60 / 24)

const text = `${greet}
Сегодня: ${daysOfWeek[weekday]}
Текущее время: ${time}
До нового года осталось ${remainingDays}
`;

block.textContent = text;
document.body.append(block);
