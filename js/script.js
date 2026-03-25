const todoControl = document.querySelector(".todo-control");
const headerInput = todoControl.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");

const todoData = localStorage.getItem("todo")
  ? JSON.parse(localStorage.getItem("todo"))
  : [];

const save = () => {
  localStorage.setItem("todo", JSON.stringify(todoData));
};

const render = () => {
  todoList.innerHTML = "";
  todoCompleted.innerHTML = "";

  todoData.forEach((item, i) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");

    const todoText = document.createElement("span");
    todoText.classList.add("text-todo");
    todoText.textContent = item.text;

    const todoButtons = document.createElement("div");
    todoButtons.classList.add("todo-buttons");

    const todoRemove = document.createElement("button");
    todoRemove.classList.add("todo-remove");

    const todoComplete = document.createElement("button");
    todoComplete.classList.add("todo-complete");

    todoButtons.append(todoRemove, todoComplete);
    todoItem.append(todoText, todoButtons);

    if (item.completed) {
      todoCompleted.append(todoItem);
    } else {
      todoList.append(todoItem);
    }

    todoComplete.addEventListener("click", () => {
      item.completed = !item.completed;
      render();
    });

    todoRemove.addEventListener("click", () => {
      todoData.splice(i, 1);
      render();
    });
  });

  save();
};

todoControl.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTodo = {
    text: headerInput.value,
    completed: false,
  };

  if (headerInput.value) {
    todoData.push(newTodo);
  }
  headerInput.value = "";
  render();
});

render();
