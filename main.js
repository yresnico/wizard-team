import FormValidation from "./formValidation.js";

const validate = new FormValidation();
const street = document.getElementById("street");
const city = document.getElementById("city");
const num = document.getElementById("num");

street.addEventListener("input", () => {
  validate.checkStreetValidity();
});

city.addEventListener("input", () => {
  validate.checkCityValidity();
});

num.addEventListener("input", () => {
  validate.checkNumValidity();
});
