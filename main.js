import FormValidation from "./formValidation.js";
import Navigation from "./navigation.js";

const validate = new FormValidation();
const street = document.getElementById("street");
const city = document.getElementById("city");
const num = document.getElementById("num");

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

// const navigation = new Navigation(1);

// const nextPage = document.getElementById("nextPage");
// const prevPage = document.getElementById("prevPage");

// if (nextPage) {
//   nextPage.addEventListener("click", () => {
//     navigation.goNext();
//   });
// }

// if (prevPage) {
//   prevPage.addEventListener("click", () => {
//     navigation.goBack();
//   });
// }
