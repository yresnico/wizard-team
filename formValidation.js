class FormValidation {
  /**
   * Validates street input, saves to storage
   * Required, dependent on character length
   * @returns T/F
   */
  checkStreetValidity() {
    const street = document.getElementById("street").value;
    const streetError = document.querySelector("#street + p.error");
    const regex = /[A-Za-z]+/;

    if (street === "") {
      streetError.textContent = "Please enter a street.";
    } else if (street.length > 20) {
      streetError.textContent =
        "You have exceeded the maximum character limit.";
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
   * Validates city input, saves to storage
   * Required, dependent on character length
   * @returns T/F
   */
  checkCityValidity() {
    const city = document.getElementById("city").value;
    const cityError = document.querySelector("#city + p.error");
    const regex = /[A-Za-z]+/;

    if (city === "") {
      cityError.textContent = "Please enter a city.";
    } else if (city.length > 20) {
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
   * Validates address number input, saves to storage
   * Not required
   * @returns T/F
   */
  checkNumValidity() {
    const num = document.getElementById("num").value;
    const numError = document.querySelector("#num + p.error");
    const regex = /\d+/;

    if (num !== "") {
      if (!regex.test(num)) {
        numError.textContent = "Address number must be numeric.";
      }
    } else {
      numError.textContent = "";
      numError.className = "error";
      return true;
    }

    numError.className = "error active";
    return false;
  }

  #checkInputEmpty(element, elError) {
    if (element.value === "") elError.textContent = "This field is mandatory";
  }
  #checkInputLenght(element) {
    const maxLength = 20;
    const el = document.getElementById(element);
    const elError = document.querySelector(`#${element} + p.error`);

    if (el.value.length > maxLength)
      elError.textContent = "This field cannot have more than 20 chars";
  }

  #checkPattern(regex) {
    return regex.test(el.value);
  }

  checkEmailValidity() {
    const email = document.getElementById("email");
    const emailError = document.querySelector(`#email + p.error`);
    const regex =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

    this.#checkInputEmpty(email, emailError);
    this.#checkPattern(regex);
  }
}

export default FormValidation;
