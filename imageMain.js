import FormValidation from "./formValidation.js";
import WizardStorage from "./wizardStorage.js";
import Navigation from "./navigation.js";

const navigation = new Navigation(3);
navigation.onPageLoad();
const wizardStorage = new WizardStorage();
const validate = new FormValidation();

const image = document.getElementById("image");

const chess = document.getElementById("chess");
const movies = document.getElementById("movies");
const sport = document.getElementById("sport");
const cars = document.getElementById("cars");
const dolls = document.getElementById("dolls");

const checkboxes = [chess, movies, sport, cars, dolls];

const checkboxesToUpload = {};

const nextPage = document.getElementById("nextPage");
const prevPage = document.getElementById("prevPage");

nextPage.addEventListener("click", () => {
    wizardStorage.setData("image", image.value);
  wizardStorage.setData("hobbies", JSON.stringify(checkboxesToUpload));
  navigation.goNext();
});

prevPage.addEventListener("click", () => {
  navigation.goBack();
});

for (const checkbox of checkboxes) {
  checkbox.addEventListener("onchange", () => {
    if (checkbox.checked) {
      checkboxesToUpload = {
        ...checkboxesToUpload,
        checkbox,
      };
    }
  });
}

image.addEventListener("input", () => {
    const validation = validate.checkImageValidity()
    if (validation) {
        nextPage.classList.remove("submitDisabled")
     }
})
