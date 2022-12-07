import wizardStorage from './storage.js';

const nameSummary = document.getElementById('nameSummary');
const emailSummary = document.getElementById('emailSummary');
const birthdaySummary = document.getElementById('birthdaySummary');

const citySummary = document.getElementById('citySummary');
const streetSummary = document.getElementById('streetSummary');
const numberSummary = document.getElementById('numberSummary');

const hobbiesSummary = document.getElementById('hobbiesSummary');
const imageSummary = document.getElementById('imageSummary');

const btnBack = document.getElementById('btnBack');
const btnReset = document.getElementById('btnReset');

let wizardStorage = new wizardStorage();

let nameValue = wizardStorage.get('name');
if(nameValue){
    nameSummary.textContent += nameValue;
}

let emailValue = wizardStorage.get('email');
if(emailValue){
    emailSummary.textContent += emailValue;
}

let birthdayValue = wizardStorage.get('birthday');
if(birthdayValue){
    birthdaySummary.textContent += birthdayValue;
}

let cityValue = wizardStorage.get('city');
if(cityValue){
    citySummary.textContent += cityValue;
}

let streetValue = wizardStorage.get('street');
if(streetValue){
    streetSummary.textContent += streetValue;
}

let numberValue = wizardStorage.get('birthday');
if(numberValue){
    numberSummary.textContent += numberValue;
}

let hobbiesValue = wizardStorage.get('hobbies');
if(hobbiesValue){
    hobbiesSummary.textContent += hobbiesValue;
}

let imageSrc = wizardStorage.get('image');
if(imageSrc){
    imageSummary.src = imageSrc;
}

//TO DO;
//BTN BACK
//BTN RESET

