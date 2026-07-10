const getData = (link) => {
  return fetch(link)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error("Error: ", error));
};

const sendData = ({
  link,
  data,
  method = "POST",
  type = "application/json; charset=UTF-8",
}) => {
  return fetch(link, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-type": type,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error("Error: ", error));
};

getData("dbHeroes.json").then((response) => {
  console.log("dbHeroes.json: ", response);
  return sendData({
    link: "https://jsonplaceholder.typicode.com/posts",
    data: response,
  });
});

const filterBar = document.getElementById("filterBar");
const clearBtn = document.getElementById("clearBtn");
const grid = document.getElementById("grid");

const filterData = (data, type) =>
  Array.from(
    new Set(
      data.flatMap((x) => {
        if (!x) return;
        if (x[type] instanceof Object) return x[type];
        return x[type] ? x[type].toLowerCase().trim() : x[type];
      }),
    ),
  ).sort();

const createSelect = (array, selectName) => {
  const container = document.createElement("div");
  const select = document.createElement("select");
  const emptyOption = document.createElement("option");
  const label = document.createElement("label");

  container.className = "filter";
  select.id = selectName;
  select.append(emptyOption);
  emptyOption.textContent = "-- empty --";
  emptyOption.setAttribute("value", "");
  label.textContent = selectName;

  array.forEach((x) => {
    if (!x) return;
    const option = document.createElement("option");
    option.value = x;
    option.textContent = x;
    select.append(option);
  });

  container.append(label, select);
  return container;
};

const createInput = (inputName, type) => {
  const container = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");

  container.className = "filter";
  input.type = type;
  input.id = inputName;
  label.textContent = inputName;

  container.append(label, input);
  return container;
};

const createCard = (item) => {
  const card = document.createElement("div");
  card.className = "card";
  const movies = item.movies;

  card.innerHTML = `
      <img src="${item.photo}" alt="${item.name}">
      <span><b>Name: </b><span>${item.name || "unknown"}</span></span>
      <span><b>Lifetime: </b>${[item.birthDay || null, item.deathDay || null].join(" - ")}</span>
      <span><b>Real Name: </b><span>${item.realName || "unknown"}</span></span>
      <span><b>Species: </b><span>${item.species || "unknown"}</span></span>
      <span><b>Gender: </b><span>${item.gender || "unknown"}</span></span>
      <span><b>Status: </b><span>${item.status || "unknown"}</span></span>
      <span><b>Actor: </b><span>${item.actors || "unknown"}</span></span>
      <span><b>Movies: </b></span>
      <span>${movies ? movies.join(" <br>") : "unknown"}</span>
  `;
  return card;
};

let chars = [];
let filters = {
  name: "",
  species: "",
  gender: "",
  status: "",
  citizenship: "",
  actors: "",
  movies: "",
};

const handleFilterChange = () => {
  let filtered = chars;

  for (let label in filters) {
    let value = filters[label];
    if (value === "") continue;
    switch (label) {
      case "name":
        filtered = filtered.filter(
          (x) =>
            x["name"]?.toLowerCase().startsWith(value) ||
            x["realName"]?.toLowerCase().startsWith(value),
        );
        break;
      case "actors":
        filtered = filtered.filter((x) =>
          x["actors"]?.toLowerCase().startsWith(value),
        );
        break;
      case "movies":
        filtered = filtered.filter((x) => x["movies"]?.includes(value));
        break;
      default:
        filtered = filtered.filter((x) => x[label]?.toLowerCase() === value);
    }
  }

  renderGrid(filtered);
};

const renderFilterBar = (data) => {
  const species = filterData(data, "species");
  const gender = filterData(data, "gender");
  const status = filterData(data, "status");
  const citizenship = filterData(data, "citizenship");
  const movies = filterData(data, "movies");

  filterBar.append(
    createInput("name", "text"),
    createInput("actors", "text"),
    createSelect(species, "species"),
    createSelect(gender, "gender"),
    createSelect(status, "status"),
    createSelect(citizenship, "citizenship"),
    createSelect(movies, "movies"),
  );
};

const renderGrid = (data) => {
  grid.innerHTML = "";
  data.forEach((x) => {
    grid.append(createCard(x));
  });
};

filterBar.addEventListener("change", (e) => {
  const t = e.target;

  if (t.tagName === "SELECT") {
    const label = t.closest("div")?.querySelector("select")?.id || "unknown";
    const value = t.value;

    filters[label] = value;
    handleFilterChange();
  }
});

filterBar.addEventListener("input", (e) => {
  const t = e.target;

  if (t.tagName === "INPUT") {
    const label = t.closest("div")?.querySelector("input")?.id || "unknown";
    const value = t.value;
    filters[label] = value;

    handleFilterChange();
  }
});

clearBtn.addEventListener("click", () => {
  Object.keys(filters).forEach((key) => (filters[key] = ""));
  filterBar.querySelectorAll("input").forEach((el) => (el.value = ""));
  filterBar.querySelectorAll("select").forEach((el) => (el.value = ""));
  handleFilterChange();
});

getData("dbHeroes.json").then((data) => {
  chars = data;
  renderFilterBar(data);
  renderGrid(data);
});
