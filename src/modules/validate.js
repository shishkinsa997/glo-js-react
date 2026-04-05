const validate = () => {
  const typeOfFlat = document.querySelector(".calc-type");
  const totalSquare = document.querySelector(".calc-square");
  const flatCount = document.querySelector(".calc-count");
  const dueDays = document.querySelector(".calc-day");

  const form1 = document.querySelector("#form1");
  const form2 = document.querySelector("#form2");
  const form3 = document.querySelector("#form3");

  const textForm1 = form1.querySelectorAll('input[type="text"]');
  const textForm2 = form2.querySelectorAll('input[type="text"], input[placeholder="Ваше сообщение"]');
  const textForm3 = form3.querySelectorAll('input[type="text"]');

  const textInputs = [...textForm1, ...textForm2, ...textForm3];
  const emailImputs = document.querySelectorAll('input[type="email"]');
  const phoneImputs = document.querySelectorAll('input[type="tel"]');

  const handleInput = (isValid = false) => {
    if (!isValid) {
      this.style.border = "2px solid red";
    } else {
      this.style.border = "";
    }
  };

  const validateNumber = function () {
    this.value = this.value.replace(/\D/g, "");
  };
  const validateText = function () {
    this.value = this.value.replace(/[^а-я\s-]/gi, "");
  };
  const validateEmail = function () {
    this.value = this.value.replace(/[^a-z@_.!~*'-]/gi, "");
  };
  const validatePhone = function () {
    this.value = this.value.replace(/[^\d()-]/gi, "");
  };

  totalSquare.addEventListener("input", validateNumber);
  flatCount.addEventListener("input", validateNumber);
  dueDays.addEventListener("input", validateNumber);

  textInputs.forEach((input) => {
    input.addEventListener("input", validateText);
  });
  emailImputs.forEach((input) => {
    input.addEventListener("input", validateEmail);
  });
  phoneImputs.forEach((input) => {
    input.addEventListener("input", validatePhone);
  });
};

export default validate;
