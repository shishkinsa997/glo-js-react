class Item {
  constructor(type, name, predator) {
    this.id = Date.now();
    this.type = type;
    this.name = name;
    this.predator = predator;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  static deleteById(id, array) {
    const index = array.findIndex((item) => item.id === id);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}

class Animal extends Item {
  constructor(type, name, predator, skin, habitat) {
    super(type, name, predator);
    this.skin = skin;
    this.habitat = habitat;
  }
}

class Plant extends Item {
  constructor(type, name, predator, structure, feature) {
    super(type, name, predator);
    this.structure = structure;
    this.feature = feature;
  }
}

class Insect extends Item {
  constructor(type, name, predator, size, limbs) {
    super(type, name, predator);
    this.size = size;
    this.limbs = limbs;
  }
}

const seed = [
  {
    id: 1,
    type: "animal",
    name: "Brown Bear",
    predator: true,
    skin: "Wool",
    habitat: "Forest",
  },
  {
    id: 2,
    type: "plant",
    name: "Oak",
    predator: false,
    structure: "Tree",
    feature: "Prolific",
  },
  {
    id: 3,
    type: "insect",
    name: "Mantis",
    predator: true,
    size: "Medium",
    limbs: "6",
  },
];

if (!localStorage.getItem("items")) {
  localStorage.setItem("items", JSON.stringify(seed));
}

const itemArray = JSON.parse(localStorage.getItem("items")) || seed;

const select = document.getElementById("type");
const props = document.getElementById("props");
const clear = document.getElementById("clear")

const showProps = () => {
  switch (select.value) {
    case "animal":
      props.innerHTML = `
      <div>
        <label for="skin">Skin</label>
        <input type="text" name="skin" id='prop1'/>
      </div>
      <div>
        <label for="habitat">Habitat</label>
        <input type="text" name="habitat" id='prop2'/>
      </div>
      `;
      console.log("animal");
      break;
    case "plant":
      props.innerHTML = `
      <div>
        <label for="structure">Structure</label>
        <input type="text" name="structure" id='prop1'/>
      </div>
      <div>
        <label for="feature">Feature</label>
        <input type="text" name="feature" id='prop2'/>
      </div>
      `;
      console.log("plant");
      break;
    case "insect":
      props.innerHTML = `
      <div>
        <label for="size">Size</label>
        <input type="text" name="size" id='prop1'/>
      </div>
      <div>
        <label for="limbs">Limbs</label>
        <input type="number" name="limbs" id='prop2'/>
      </div>
      `;
      console.log("insect");
      break;
    default:
      props.innerHTML = `
      <span>Select type</span>
      `;
      console.log("not found");
      break;
  }
};

showProps();

select.addEventListener("change", () => {
  showProps();
});

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const type = document.getElementById("type").value;
  const name = document.getElementById("name").value;
  const predator = document.getElementById("predator").checked;
  const prop1 = document.getElementById("prop1").value;
  const prop2 = document.getElementById("prop2").value;

  let item;
  switch (type) {
    case "animal":
      item = new Animal(type, name, predator, prop1, prop2);
      break;
    case "plant":
      item = new Plant(type, name, predator, prop1, prop2);
      break;
    case "insect":
      item = new Insect(type, name, predator, prop1, prop2);
      break;
    default:
      return;
  }

  itemArray.push(item);
  localStorage.setItem("items", JSON.stringify(itemArray));
  renderTable();
  document.getElementById("form").reset();
  showProps();
});

document.getElementById("clear").addEventListener("click", (e) => {
  localStorage.setItem("items", []);
  itemArray.length = 0;
  renderTable()
})

function renderTable() {
  const tbody = document.getElementById("table").querySelector("tbody");
  tbody.innerHTML = "";

  itemArray.forEach((item) => {
    const tr = document.createElement("tr");

    let props;
    if (item.type === "animal") {
      props = `Skin: ${item.skin}<br>Habitat: ${item.habitat}`;
    } else if (item.type === "plant") {
      props = `Structure: ${item.structure}<br>Feature: ${item.feature}`;
    } else if ( item.type === "insect") {
      props = `Size: ${item.size}<br>Limbs: ${item.limbs}`;
    }
    tr.innerHTML = `
            <td>${item.type}</td>
            <td>${item.name}</td>
            <td>${item.predator ? `<input type='checkbox' checked disabled/>` : `<input type='checkbox' disabled/>`}</td>
            <td>${props}</td>
            <td><button onclick="deleteItem(${item.id})">Delete</button></td>
        `;
    tbody.append(tr);
  });
  console.log(itemArray);
}

const deleteItem = (id) => {
  Item.deleteById(id, itemArray);
  localStorage.setItem("items", JSON.stringify(itemArray));
  renderTable();
}

renderTable();
