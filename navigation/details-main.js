import Navigation from "../navigation.js";

const navigation = new Navigation(1);

const nextPage = document.getElementById("nextPage");

nextPage.addEventListener("click", () => {
    navigation.goNext();
  });