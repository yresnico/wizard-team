class Storage {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    getData(key) {
        sessionStorage.getItem(key)
    }

    setData(key, value) {
        sessionStorage.setItem(key, value);
        console.log(`${key} field information saved to storage.`)
    }
}