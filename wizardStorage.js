class WizardStorage {

    getData(key) {
        sessionStorage.getItem(key)
    }

    setData(key, value) {
        sessionStorage.setItem(key, value);
        console.log(`${key} field information saved to storage.`)
    }
};

export default WizardStorage;
