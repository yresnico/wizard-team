import WizardStorage from './wizardStorage.js';
import Navigation from './navigation.js';


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

const wizardStorage = new WizardStorage();
const navigator = new Navigation(4);

//TEST
wizardStorage.setData('name', 'Aleksandra');
wizardStorage.setData('email', 'andymar@gmail.com');
wizardStorage.setData('birthday', '12/08/1994');

wizardStorage.setData('street', 'hakaka');
wizardStorage.setData('city', 'london');
wizardStorage.setData('number', '12');

wizardStorage.setData('hobbies', 'chess,dance');
wizardStorage.setData('image', 'https://media.istockphoto.com/id/1203720438/vector/flower-line-icon-set-rose-tulip-in-vase-fruit-bouquet-spring-blossom-cactus-minimal-vector.jpg?s=1024x1024&w=is&k=20&c=RyiQHSwlKEAcWeCP9TwVJei9sh8YtPalPXZ0RtUUexU=');




let nameValue = wizardStorage.getData('name');
if(nameValue){
    nameSummary.textContent += nameValue;
};

let emailValue = wizardStorage.getData('email');
if(emailValue){
    emailSummary.textContent += emailValue;
};

let birthdayValue = wizardStorage.getData('birthday');
if(birthdayValue){
    birthdaySummary.textContent += birthdayValue;
};

let cityValue = wizardStorage.getData('city');
if(cityValue){
    citySummary.textContent += cityValue;
};

let streetValue = wizardStorage.getData('street');
if(streetValue){
    streetSummary.textContent += streetValue;
};

let numberValue = wizardStorage.getData('number');
if(numberValue){
    numberSummary.textContent += numberValue;
};

let hobbiesValue = wizardStorage.getData('hobbies');
if(hobbiesValue){
    hobbiesSummary.textContent += hobbiesValue;
};

let imageSrc = wizardStorage.getData('image');
if(imageSrc){
    imageSummary.src = imageSrc;
};

btnReset.addEventListener('click',(e) => {
    e.preventDefault();
    wizardStorage.clearData();
    navigator.gotToFirst();
});

btnBack.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.goBack();
});




