const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: [],
  asking: () => {
    const areDigits = (str) => /^\d+$/.test(str);
    const hasLetters = (str) => /[a-zA-Zа-яА-Я]/.test(str);

    do {
      appData.title = prompt("What is your project?", "Project");
    } while (!hasLetters(appData.title));

    appData.adaptive = confirm("Will the site be adaptive?");

    for (let i = 0; i < 2; i++) {
      let name, price;

      do {
        name = prompt("What types of screens need to develope?", "Simple");
      } while (!hasLetters(name));

      do {
        price = prompt("How much will this work cost?", 10000);
      } while (!areDigits(price));

      price = +price;

      appData.screens.push({ id: i, name, price });
    }

    for (let i = 0; i < 2; i++) {
      let name, price;
      do {
        name = prompt(
          "What additional type of service is required?",
          "Packaging",
        );
      } while (!hasLetters(name));

      do {
        price = prompt("How much will it cost?", 1500);
      } while (!areDigits(price));

      price = +price;

      appData.services.push({ id: i, name, price });
    }
  },
  addPrices: () => {
    appData.screenPrice = appData.screens.reduce(
      (acc, screen) => (acc += +screen.price),
      0,
    );
    appData.allServicePrices = appData.services.reduce(
      (acc, screen) => (acc += +screen.price),
      0,
    );
  },
  getFullPrice: () => {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },
  getServicePercentPrices: () => {
    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100),
    );
  },
  getTitle: (title) => {
    title = title.trim().toLowerCase();
    appData.title = title[0].toUpperCase() + title.slice(1);
  },
  getRollBackMessage: (price) => {
    if (price > 3000) {
      return "Descount 10%";
    } else if (price > 1500 && price <= 3000) {
      return "Descount 5%";
    } else if (price <= 1500 && price >= 0) {
      return "No discount is available";
    } else {
      return "Something went wrong";
    }
  },

  start: () => {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle(appData.title);
    appData.logger();
  },
  logger: () => {
    const logObj = (obj, indent = 0) => {
      let res = "";
      for (let key in obj) {
        const val = obj[key];
        if (typeof val === "object" && val !== null) {
          res += " ".repeat(indent) + key + ":";
          res += logObj(val, indent + 1);
        } else {
          res += " ".repeat(indent) + key + ": " + val + " ";
        }
      }
      return res;
    };

    for (let key in appData) {
      if (typeof appData[key] === "object") {
        console.log(key + ":");
        console.log(logObj(appData[key]));
        continue;
      }
      if (typeof appData[key] === "function") {
        console.log(key + ": function() {}");
        continue;
      }
      console.log(key + ": " + appData[key]);
    }
  },
};

appData.start();
