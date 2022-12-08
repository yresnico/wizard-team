class WizardStorage {

    getData(key) {
        return sessionStorage.getItem(key);

    };

    setData(key, value) {
        sessionStorage.setItem(key, value);
    };

    clearData() {
        sessionStorage.clear();
    };
};

export default WizardStorage;
