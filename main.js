import FormValidation from "./formValidation.js";
import Navigation from "./navigation.js";

const validate = new FormValidation();
const street = document.getElementById("street");
const city = document.getElementById("city");
const num = document.getElementById("number");

street.addEventListener("input", () => {
    validate.checkStreetValidity();
});

city.addEventListener("input", () => {
    validate.checkCityValidity();
});

num.addEventListener("input", () => {
    validate.checkNumValidity();
});

const navigation = new Navigation();
