import FormValidation from "./formValidation.js";

const validate = new FormValidation();
const prevButton = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage")
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

prevButton.addEventListener("onClick", () => {
    // Validate all fields
    // checkCityValidity
    // checkStreetValidity
    // checkNumValidity
    // Navigate to next page
})



// const street = validate.checkStreetValidity();
// if (street && all its friends) {
//     local storage save
//     pagin
// }