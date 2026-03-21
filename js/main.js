const title = document.getElementsByTagName("h1")[0];
const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];
const screenBtn = document.querySelector(".screen-btn");

const percentItems = document.querySelectorAll(".other-items.percent");
const numberItems = document.querySelectorAll(".other-items.number");

const rollbackInput = document.querySelector('.rollback input[type="range"]');
const rollbackSpan = document.querySelector(".rollback span");

const totalInputs = [...document.getElementsByClassName("total-input")];
let screens = document.querySelectorAll(".screen");

const areDigits = (str) => /^\d+$/.test(str);

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  screenCount: 0,
  adaptive: true,
  rollback: 10,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicesPercent: [],
  servicesNumber: [],
  init: () => {
    appData.addTitle();
    startBtn.addEventListener("click", () => {
      if (appData.areScreensValid()) {
        appData.start();
      } else {
        console.log("screens are empty");
        appData.reset();
      }
    });
    screenBtn.addEventListener("click", appData.addScreenBlock);
    appData.addRollback();
  },
  addTitle: () => {
    document.title = title.textContent;
  },
  addScreens: function () {
    screens = document.querySelectorAll(".screen");
    screens.forEach((screen, i) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      appData.screens.push({
        id: i,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
  },
  addServices: () => {
    percentItems.forEach((item) => {
      const check = item.querySelector("input[type='checkbox']");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type='text']");
      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });
    numberItems.forEach((item) => {
      const check = item.querySelector("input[type='checkbox']");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type='text']");
      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addRollback: () => {
    const initRollback = () => {
      rollbackSpan.textContent = rollbackInput.value + "%";
      appData.rollback = +rollbackInput.value;
    };
    initRollback();
    rollbackInput.addEventListener("input", () => {
      initRollback();
    });
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },
  addPrices: () => {
    appData.screenPrice = appData.screens.reduce(
      (acc, screen) => (acc += +screen.price),
      0,
    );

    appData.servicePricesPercent = Object.values(
      appData.servicesPercent,
    ).reduce(
      (acc, service) => (acc += appData.screenPrice * (service / 100)),
      0,
    );

    appData.servicePricesNumber = Object.values(appData.servicesNumber).reduce(
      (acc, service) => (acc += service),
      0,
    );

    appData.fullPrice =
      appData.screenPrice +
      appData.servicePricesPercent +
      appData.servicePricesNumber;

    appData.screenCount = appData.screens.reduce(
      (acc, screen) => (acc += +screen.count),
      0,
    );
  },
  showResult: () => {
    totalInputs[0].value = appData.screenPrice;
    totalInputs[1].value = appData.screenCount;
    totalInputs[2].value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    totalInputs[3].value = appData.fullPrice;
    totalInputs[4].value = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100),
    );
  },
  areScreensValid: () => {
    appData.addScreens();
    let select, input;
    const result = [...screens].some((screen) => {
      select = screen.querySelector("select").value;
      input = screen.querySelector("input").value;

      return select === "" || input === "" || areDigits(input) === false;
    });
    return !result;
  },
  start: () => {
    appData.reset();
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    appData.showResult();
    console.log(appData);
  },
  reset: () => {
    appData.screens = [];
    appData.screenPrice = 0;
    appData.screenCount = 0;
    appData.servicePricesPercent = 0;
    appData.servicePricesNumber = 0;
    appData.fullPrice = 0;
    appData.servicesPercent = [];
    appData.servicesNumber = [];

    appData.showResult();
  },
};

appData.init();
