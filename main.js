const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 20,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",
  asking: () => {
    appData.title = prompt("What is your project?", "Project");
    appData.screens = prompt(
      "What types of screens need to develope?",
      "Simple, Complex",
    );

    do {
      appData.screenPrice = parseFloat(
        prompt("How much will this work cost?", 20000),
      );
    } while (!appData.isNumber(appData.screenPrice));

    appData.screenPrice = parseFloat(appData.screenPrice);

    appData.adaptive = confirm("Will the site be adaptive?");
  },
  isNumber: (num) => {
    return !isNaN(parseFloat(num)) && isFinite(parseFloat(num));
  },
  getAllServicePrices: () => {
    let servicePrice;
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt(
          "What additional type of service is required?",
          "Packaging",
        );
      } else if (i === 1) {
        appData.service2 = prompt(
          "What additional type of service is required?",
          "Shipping",
        );
      }

      do {
        servicePrice = parseFloat(prompt("How much will it cost?", 1500));
      } while (!appData.isNumber(servicePrice));

      sum += servicePrice;
    }

    return sum;
  },
  getFullPrice: () => {
    return appData.screenPrice + appData.allServicePrices;
  },
  getServicePercentPrices: () => {
    return Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100),
    );
  },
  getTitle: (title) => {
    title = title.trim().toLowerCase();
    return title[0].toUpperCase() + title.slice(1);
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
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle(appData.title);
    appData.logger();
  },
  logger: () => {
    for (let key in appData) {
      if (typeof appData[key] === "function") {
        console.log(key + ": function() {}");
        continue;
      }
      console.log(key + ": " + appData[key]);
    }
  },
};

appData.start();
