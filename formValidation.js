class FormValidation {
  /**
   * Validates name input
   * Required, dependent on character and word length
   * @returns T/F
   */
  checkNameValidity() {
      const name = document.getElementById("name").value;
      const nameError = document.querySelector("#name + p.error");
      const regex = /^[A-Za-z]{2,}\s[A-Za-z]{2,}$/;

      if (name === "") {
          nameError.textContent = "Please enter your full name.";
      } else if (!regex.test(name)) {
          nameError.textContent = "Please enter a valid format - e.g., John Smith."
      } else {
          nameError.textContent = "";
          nameError.className = "error";
          return true;
      }

      nameError.className = "error active";
      return false;
  }

  /**
   * Validates email input
   * Required, dependent on email address url 
   * @returns T/F
   */
  checkEmailValidity() {
      const email = document.getElementById("email").value;
      const emailError = document.querySelector("#email + p.error");
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (email === "") {
          emailError.textContent = "Please enter your email address.";
      } else if (!regex.test(email)) {
          emailError.textContent = "Please enter a valid email address.";
      } else {
          emailError.textContent = "";
          emailError.className = "error";
          return true;
      }

      emailError.className = "error active";
      return false;
  }

  /**
   * Validates birth date input
   * Required, dependent on birth date formatting
   * @returns T/F
   */
  checkBirthDateValidity() {
      const birthDate = document.getElementById("birthdate").value;
      const birthDateError = document.querySelector("#birthdate + p.error");
      const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.]\d\d$/;

      if (birthDate === "") {
          birthDateError.textContent = "Please enter your birthdate."
      } else if (!regex.test(birthDate)) {
          birthDateError.textContent = "Please enter your birthdate in a valid format.";
      } else {
          birthDateError.textContent = "";
          birthDateError.className = "error";
          return true;
      }

      birthDateError.className = "error active";
      return false;
  }

  /**
   * Validates street input
   * Required, dependent on character length
   * @returns T/F
   */
  checkStreetValidity() {
      const street = document.getElementById("street").value;
      const streetError = document.querySelector("#street + p.error");
      const maxLength = 20;
      const regex = /^[A-Za-z]+$/;

      if (street === "") {
          streetError.textContent = "Please enter a street.";
      } else if (street.length > maxLength) {
          streetError.textContent = "You have exceeded the maximum character limit.";
      } else if (!regex.test(street)) {
          streetError.textContent = "Street name must be alphabetic.";
      } else {
          streetError.textContent = "";
          streetError.className = "error";
          return true;
      }

      streetError.className = "error active";
      return false;
  }

  /**
   * Validates city input
   * Required, dependent on character length
   * @returns T/F
   */
  checkCityValidity() {
      const city = document.getElementById("city").value;
      const cityError = document.querySelector("#city + p.error");
      const maxLength = 20;
      const regex = /^[A-Za-z]+$/;

      if (city === "") {
          cityError.textContent = "Please enter a city.";
      } else if (city.length > maxLength) {
          cityError.textContent = "You have exceeded the maximum character limit.";
      } else if (!regex.test(city)) {
          cityError.textContent = "City name must be alphabetic.";
      } else {
          cityError.textContent = "";
          cityError.className = "error";
          return true;
      }

      cityError.className = "error active";
      return false;
  }

  /**
   * Validates address number input
   * Not required
   * @returns T/F
   */
  checkNumValidity() {
      const num = document.getElementById("num").value;
      const numError = document.querySelector("#num + p.error");
      const regex = /^[\d]+$/;

      if (num !== "" && !regex.test(num)) {
          numError.textContent = "Address number must be numeric.";
      } else {
          numError.textContent = "";
          numError.className = "error";
          return true;
      }

      numError.className = "error active";
      return false;
  }

  /**
   * Validates image input
   * Required, dependent on image url formatting
   * @returns T/F
   */
  checkImageValidity() {
      const image = document.getElementById("image").value;  
      const imageError = document.querySelector(".image > p");
      const regex = /([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

      if (image === "") {
          imageError.textContent = "Please enter an image.";
      } else if (!regex.test(image)) {
          imageError.textContent = "Please enter a valid image url.";
      } else {
          imageError.textContent = "";
          imageError.className = "error";
          return true;
      }

      imageError.className = "error active";
      return false;
  }
}

export default FormValidation;