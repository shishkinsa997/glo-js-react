const books = document.querySelectorAll(".book");
books[5].after(books[2]);
books[1].after(books[0]);
books[4].after(books[3]);

document.body.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';

const domBooks = document.getElementsByClassName("book");
domBooks[2].querySelector("a").textContent =
  "Книга 3. this и Прототипы Объектов";

document.querySelector(".adv").remove();

const sortTopics = (book) => {
  const ul = book.querySelector("ul");
  const ulChildren = [...ul.children];

  const filtered = ulChildren.filter((li) => {
    return (
      li.innerText.startsWith("Глава") || li.innerText.startsWith("Приложение")
    );
  });
  filtered.sort((a, b) => {
    return a.innerText > b.innerText;
  });
  filtered.forEach((li) => ul.append(li));
};

const addedTopic = document.createElement("li");
addedTopic.textContent = "Глава 8: За пределами ES6";
domBooks[5].querySelector("ul").append(addedTopic);

sortTopics(domBooks[1]);
sortTopics(domBooks[4]);
sortTopics(domBooks[5]);

