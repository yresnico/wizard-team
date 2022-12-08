import FormValidation from "./formValidation.js";
import Navigation from "./navigation.js";

const validate = new FormValidation();
const street = document.getElementById("street");
const city = document.getElementById("city");
const num = document.getElementById("number");

if (street && city && num) {
  street.addEventListener("input", () => {
    validate.checkStreetValidity();
  });

  city.addEventListener("input", () => {
    validate.checkCityValidity();
  });

  num.addEventListener("input", () => {
    validate.checkNumValidity();
  });
}

const navigation = new Navigation();

const nextPage = document.getElementById("nextPage");
const prevPage = document.getElementById("prevPage");

nextPage.addEventListener("click", () => {
  navigation.goNext();
});

prevPage.addEventListener("click", () => {
  navigation.goBack();
});
