import Navigation from "./navigation.js";
import WizardStorage from "./wizardStorage.js";
import FormValidation from "./formValidation.js";


const validate = new FormValidation();
const wizardStorage = new WizardStorage();
const navigation = new Navigation(1);
navigation.onPageLoad();
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const submit = document.getElementById('nextPage');
submit.classList.add('submitDisabled')
const validName = false;
const validEmail = false;
const validBirthdate = false;
function checkBooleans() {
    return (validName && validEmail && validBirthdate);
}

fullName.addEventListener("input", () => {
    if(validate.checkNameValidity()) {
        validName = true;
        if(checkBooleans){
            submit.classList.remove('submitDisabled')
        }
    } else {
        validName = false;
    }
});

email.addEventListener("input", () => {
    if(validate.checkEmailValidity()) {
        validEmail = true;
        if(checkBooleans){
            submit.classList.remove('submitDisabled')
        }
    } else {
        validEmail = false;
    }
});

birthdate.addEventListener("input", () => {
    if(validate.checkBirthDateValidity()) {
        validBirthdate = true;
        if(checkBooleans){
            submit.classList.remove('submitDisabled')
        }
    } else {
        validBirthdate = false;
    }
});


function submitPhase1() {
    wizardStorage.setData('name', fullName.value);
    wizardStorage.setData('email', email.value);
    wizardStorage.setData('birthdate', birthdate.value);
    wizardStorage.setData('details', 'name, email, birthdate');
    navigation.goNext();
}
submit.addEventListener('click', submitPhase1);
