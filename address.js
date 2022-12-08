import FormValidation from "./formValidation.js";
import Navigation from "./navigation.js";
import WizardStorage from "./wizardStorage.js";

const navigator = new Navigation(2);
const validate = new FormValidation();
const storage = new WizardStorage();
const prevBtn = document.getElementById("prevPage");
const submit = document.getElementById("nextPage")
const street = document.getElementById("street");
const city = document.getElementById("city");
const num = document.getElementById("num");
let validStreet = false;
let validNum = false;
let validCity = false;
submit.classList.add('submitDisabled')


function checkBooleans() {
    return (validStreet && validNum && validCity)
};

street.addEventListener("input", () => {
    if (validate.checkStreetValidity()) {
        validStreet = true;
        if (checkBooleans()) {
            submit.classList.remove('submitDisabled')
        }
    } else {
        validStreet = false;
    }
});

num.addEventListener("input", () => {
    if (validate.checkNumValidity()) {
        validNum = true;
        if (checkBooleans()) {
            submit.classList.remove('submitDisabled')
        }
    } else {
        validNum = false;
    }
});

city.addEventListener("input", () => {
    if (validate.checkCityValidity()) {
        validCity = true;
        if (checkBooleans()) {
            submit.classList.remove('submitDisabled')
        }
    } else {
        validCity = false;
    }
});

prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.goBack();
});

submit.addEventListener("click", () => {
    if (validate.checkStreetValidity() && validate.checkCityValidity() && validate.checkNumValidity()) {
        storage.setData("street", street.value);
        storage.setData("number", num.value);
        storage.setData("city", city.value);
        storage.setData("address", "street number city");
        navigator.goNext();
    };
});
