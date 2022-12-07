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
}

export default FormValidation;