const title = document.getElementsByTagName("h1")[0];
const mainControls = document.getElementsByClassName("main-controls")[0];
const [startBtn, resetBtn] = document.getElementsByClassName("handler_btn");
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

  init: function () {
    this.addTitle();
    this.handleStartButton();

    screens[0].addEventListener("input", () => this.handleStartButton());
    startBtn.addEventListener("click", () => this.start());
    resetBtn.addEventListener("click", () => {
      this.reset(true);
      this.handleStartButton();
    });
    screenBtn.addEventListener("click", () => this.addScreenBlock());
    this.addRollback();
  },

  addTitle() {
    document.title = title.textContent;
  },

  addScreens() {
    screens = [];
    screens = document.querySelectorAll(".screen");
    screens.forEach((screen, i) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      this.screens.push({
        id: i,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
  },

  addServices() {
    percentItems.forEach((item) => {
      const check = item.querySelector("input[type='checkbox']");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type='text']");
      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });
    numberItems.forEach((item) => {
      const check = item.querySelector("input[type='checkbox']");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type='text']");
      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addRollback() {
    const updateRollback = () => {
      rollbackSpan.textContent = rollbackInput.value + "%";
      this.rollback = +rollbackInput.value;
    };
    updateRollback();
    rollbackInput.addEventListener("input", () => {
      updateRollback();
    });
  },

  addScreenBlock() {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
    cloneScreen.addEventListener("input", () => this.handleStartButton());
    this.handleStartButton();
  },

  addPrices() {
    this.screenPrice = this.screens.reduce((acc, { price }) => acc + price, 0);

    this.servicePricesPercent = Object.values(this.servicesPercent).reduce(
      (acc, service) => acc + this.screenPrice * (service / 100),
      0,
    );

    this.servicePricesNumber = Object.values(this.servicesNumber).reduce(
      (acc, service) => acc + service,
      0,
    );

    this.fullPrice =
      this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;

    this.screenCount = this.screens.reduce((acc, { count }) => acc + count, 0);
  },
  showResult() {
    totalInputs[0].value = this.screenPrice;
    totalInputs[1].value = this.screenCount;
    totalInputs[2].value = this.servicePricesPercent + this.servicePricesNumber;
    totalInputs[3].value = this.fullPrice;
    totalInputs[4].value = Math.ceil(
      this.fullPrice - this.fullPrice * (this.rollback / 100),
    );
  },
  areScreensValid() {
    this.addScreens();
    let select, input;
    return ![...screens].some((screen) => {
      select = screen.querySelector("select").value;
      input = screen.querySelector("input").value;

      return select === "" || input === "" || !areDigits(input);
    });
  },
  handleStartButton() {
    if (!this.areScreensValid()) {
      startBtn.disabled = true;
      startBtn.style.cursor = "default";
      startBtn.style.opacity = "0.5";
    } else {
      startBtn.disabled = false;
      startBtn.style.cursor = "pointer";
      startBtn.style.opacity = "1";
    }
  },

  handleForm(clear) {
    if (clear) {
      [...screens].slice(1).forEach((el) => el.remove());
      
      screens[0].querySelector("input").disabled = false;
      screens[0].querySelector("input").value = "";
      screens[0].querySelector("select").disabled = false;
      screens[0].querySelector("select").value = "";

      mainControls
        .querySelectorAll("input[type='checkbox'] ")
        .forEach((checkbox) => {
          checkbox.disabled = false;
          checkbox.checked = false;
        });

      rollbackInput.disabled = false;
      rollbackInput.value = 0;
      rollbackSpan.textContent = "0%";

      screenBtn.disabled = false;
      screenBtn.style.cursor = "pointer";

      resetBtn.style.display = "none";
      startBtn.style.display = "block";
    } else {
      mainControls.querySelectorAll("input").forEach((input) => {
        input.disabled = true;
      });
      mainControls.querySelectorAll("select").forEach((select) => {
        select.disabled = true;
      });

      screenBtn.disabled = true;
      screenBtn.style.cursor = "default";

      resetBtn.style.display = "block";
      startBtn.style.display = "none";
    }
  },
  start() {
    this.reset();
    this.addScreens();
    this.addServices();
    this.addPrices();
    this.showResult();
    this.handleForm();
  },
  reset(clear = false) {
    this.screens = [];
    this.screenPrice = 0;
    this.screenCount = 0;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.fullPrice = 0;
    this.servicesPercent = [];
    this.servicesNumber = [];
    this.handleForm(clear);
    this.showResult();
  },
};

appData.init();
