import Navigation from "../navigation.js";

const navigation = new Navigation(2);

const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");

nextPage.addEventListener("click", () => {
    navigation.goNext();
  });

  prevPage.addEventListener("click", () => {
    navigation.goBack();
  });