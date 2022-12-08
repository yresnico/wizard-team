import WizardStorage from "./wizardStorage.js";
export default class Navigation {
    static pageArray = [0, 1, 2, 3, 4];
    static urlMap = new Map([
        [0, '/splash.html'], [1, '/personal-details.html'], [2, '/address.html'], [3, '/miscellaneous.html'], [4, '/summary.html']
    ]);
    static phaseKeyMap = new Map([
        [1, 'details'], [2, 'address'], [3, 'misc']
    ]);
    
    static first_page= 1;

    constructor(page_id) {
        this.page_id = page_id
    }

    onPageLoad() {
        if(!this.checkPhase()) {
            this.goBack()
        }
    }

    checkPhase() {
        let currentPageIndex = Navigation.pageArray.indexOf(this.page_id);
        console.log('Current page index in order array', currentPageIndex)
        if(currentPageIndex > 0){
            const prevID = Navigation.pageArray[currentPageIndex - 1];
            if(Navigation.phaseKeyMap.has(prevID)){
                const storage = new WizardStorage();
                if(storage.getData(Navigation.phaseKeyMap.get(prevID))){
                    return true;
                }
                return false
            }
        }
        return true;
    }

    getPrevious() {
        let currentPageIndex = Navigation.pageArray.indexOf(this.page_id);
        if(currentPageIndex === 0) {
            return '';
        }
        else {
            return Navigation.urlMap.get(Navigation.pageArray[currentPageIndex - 1]);
        }
    }

    getNext() {
        let currentPageIndex = Navigation.pageArray.indexOf(this.page_id);
        if(currentPageIndex === Navigation.pageArray.length - 1) {
            return '';
        }
        else {
            return Navigation.urlMap.get(Navigation.pageArray[currentPageIndex + 1]);
        }
    }

    goBack() {
        location.href = this.getPrevious();
    }

    goNext() {
        location.href = this.getNext();
    }

    goTo(page_id) {
        location.href = Navigation.urlMap.get(page_id);
    }

    goToFirst() {
        location.href = Navigation.urlMap.get(Navigation.first_page);
    }

}