class WizardStorage {

    getData(key) {
        sessionStorage.getItem(key)
    };

    setData(key, value) {
        sessionStorage.setItem(key, value);
        console.log(`${key} field information saved to storage.`)
    };

    clearData() {
        sessionStorage.clear();
        console.log('Wizard storage cleared.')
    };
};

export default WizardStorage;
