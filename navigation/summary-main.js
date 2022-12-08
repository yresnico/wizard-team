import Navigation from "../navigation.js";

const navigation = new Navigation(4);

const prevPage = document.getElementById("prevPage");

  prevPage.addEventListener("click", () => {
    navigation.goBack();
  });