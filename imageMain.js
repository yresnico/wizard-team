import FormValidation from "formValidation.js";
import WizardStorage from "./wizardStorage";
import Navigation from "./navigation";

const navigation = new Navigation(3);
const wizardStorage = new WizardStorage();

const image = document.getElementById("image");

const chess = document.getElementById("chess");
const movies = document.getElementById("movies");
const sport = document.getElementById("sport");
const cars = document.getElementById("cars");
const dolls = document.getElementById("dolls");

const checkboxes = [chess, movies, sport, cars, dolls]

const checkboxesToUpload = {};

const nextPage = document.getElementById("nextPage");
const prevPage = document.getElementById("prevPage");

nextPage.addEventListener("click", () => {
  wizardStorage.setData("image", image.value)
  wizardStorage.setData("hobbies", JSON.stringify(checkboxesToUpload))
  navigation.goNext();
});

prevPage.addEventListener("click", () => {
  navigation.goBack();
});

for (const checkbox of checkboxes) {
    checkbox.addEventListener("onchange", () => {
        if(checkbox.checked) {
            checkboxesToUpload = {
                ...checkboxesToUpload,
                checkbox
            }
        }
    })
}