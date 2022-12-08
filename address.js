import FormValidation from "./formValidation.js";
import Navigation from "./navigation.js";
import WizardStorage from "./wizardStorage.js";

const navigator = new Navigation(2);
const validate = new FormValidation();
const storage = new WizardStorage();
const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage")
const street = document.getElementById("street");
const city = document.getElementById("city");
const num = document.getElementById("num");

navigator.onPageLoad();

street.addEventListener("input", () => {
    validate.checkStreetValidity();
});

city.addEventListener("input", () => {
    validate.checkCityValidity();
});

num.addEventListener("input", () => {
    validate.checkNumValidity();
});

prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.goBack();
});

nextBtn.addEventListener("click", () => {
    if (validate.checkStreetValidity() && validate.checkCityValidity() && validate.checkNumValidity()) {
        storage.setData("street", street.value);
        storage.setData("number", num.value);
        storage.setData("city", city.value);
        storage.setData("address", true)
        navigator.goNext();
    };
});



// const street = validate.checkStreetValidity();
// if (street && all its friends) {
//     local storage save
//     pagin
// }