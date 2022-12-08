import Navigation from './navigation.js'
const btnProceed = document.getElementById('btnProceed'); 
const navigator = new Navigation(0);
btnProceed.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.goToFirst();
})


