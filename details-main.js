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
let validName = false;
let validEmail = false;
let validBirthdate = false;
loadPhase1();
function loadPhase1(){
    if(wizardStorage.getData(Navigation.phaseKeyMap.get(1))){
        fullName.value = wizardStorage.getData('name');
        email.value = wizardStorage.getData('email');
        birthdate.value = wizardStorage.getData('birthdate')
        checkName();
        checkEmail();
        checkBirthdate(); 
    }
      
}
function checkBooleans() {
    return (validName && validEmail && validBirthdate);
}
function checkName(){
    if(validate.checkNameValidity()) {
        validName = true;
        if(checkBooleans()){
            submit.classList.remove('submitDisabled')
        }
    } else {
        validName = false;
    }
}

function checkEmail() {
    if(validate.checkEmailValidity()) {
        validEmail = true;
        if(checkBooleans()){
            submit.classList.remove('submitDisabled')
        }
    } else {
        validEmail = false;
    }
}

function checkBirthdate() {
    if(validate.checkBirthDateValidity()) {
        validBirthdate = true;
        if(checkBooleans()){
            submit.classList.remove('submitDisabled')
        }
    } else {
        validBirthdate = false;
    }
}
fullName.addEventListener("input", checkName);

email.addEventListener("input", checkEmail);

birthdate.addEventListener("input", checkBirthdate);


function submitPhase1() {
    wizardStorage.setData('name', fullName.value);
    wizardStorage.setData('email', email.value);
    wizardStorage.setData('birthdate', birthdate.value);
    wizardStorage.setData('details', 'name, email, birthdate');
    navigation.goNext();
}
submit.addEventListener('click', submitPhase1);
