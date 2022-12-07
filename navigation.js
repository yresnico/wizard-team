class Navigation {
    static baseURL = 'http://localhost:3000/';
    static pageArray = [1, 2, 3, 4];
    static urlMap = new Map([
        [1, 'personal-details.html'], [2, 'address.html'], [3, 'image-form.html'], [4, 'summary.html']
    ]);
    static phaseKeyMap = new Map([
        [1, 'name'], [2, 'city'], [3, 'image']
    ]);
        
    constructior(page_id) {
        // this.page_id = page_id
    }

    onPageLoad() {
        // if(!this.checkPhase) {
        //     this.goPrevious()
        // }
    }

    checkPhase() {

    }

    getPrevious() {
        // let currentPageIndex = Navigation.pageArray.findIndex(this.page_id);
        // if(currentPageIndex === 0) {
        //     return '';
        // }
        // else {
        //     return Navigation.baseURL + Navigation.urlMap.get(Navigation.pageArray[currentPageIndex - 1]);
        // }
    }

    getNext() {
        // let currentPageIndex = Navigation.pageArray.findIndex(this.page_id);
        // if(currentPageIndex === Navigation.pageArray.length - 1) {
        //     return '';
        // }
        // else {
        //     return Navigation.baseURL + Navigation.urlMap.get(Navigation.pageArray[currentPageIndex + 1]);
        // }
    }

    goPrevious() {
        // location.href = this.getPrevious();
    }

    goNext() {
        // location.href = this.getNext();
    }

}