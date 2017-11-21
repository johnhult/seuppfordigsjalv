let page;
let stopNav = false;
let routes;
let routesSorted;

class NavigationService {
    
    static get sortedRoutes() {
        if(!routesSorted) {
            let r = this.fullRoutes;
            routesSorted = [];
            Object.keys(r).forEach((keyName) => {
                routesSorted.push(r[keyName]);
            });
        }
        return routesSorted;
    }
    
    static get fullRoutes() {
        if(!routes) {
            routes = {
                Home: {
                    name: 'Hem',
                    url: '/',
                    animationOut: function() {
                        NavigationService.animateHome();
                    },
                    index: 0
                },
                Fact1: {
                    name: 'En',
                    url: '/fact/1',
                    animationOut: function() {
                        NavigationService.animateOne();
                    },
                    index: 1
                },
                Fact2: {
                    name: 'Två',
                    url: '/fact/2',
                    animationOut: function() {
                        NavigationService.animateTwo();
                    },
                    index: 2
                },
                Fact3: {
                    name: 'Tre',
                    url: '/fact/3',
                    animationOut: function() {
                        NavigationService.animateThree();
                    },
                    index: 3
                }
            };
        }
        return routes;
    }
    
    static get currentPage() {
        return page;
    }
    
    static set currentPage(newPage) {
        page = newPage;
    }
    
    static get currentlyNavigating() {
        return stopNav;
    }
    
    static set currentlyNavigating(navigating) {
        stopNav = navigating;
    }
    
    static goTo(newRouteObj, historyObj, fastNav) {
        if(this.currentlyNavigating) {
            return;
        }
        this.currentlyNavigating = true;
        if(this.currentPage.animationOut) {
            this.currentPage.animationOut();
        }
        if(fastNav) {
            this.currentPage = newRouteObj;
            historyObj.push(newRouteObj.url);
        }
        else {
            setTimeout(() => {
                this.currentPage = newRouteObj;
                historyObj.push(newRouteObj.url);
            }, 3000);
        }
    }
    
    static get nextPage() {
        let i = this.currentPage.index + 1;
        if(i >= this.sortedRoutes.length) {
            i = 0;
        }
        return this.sortedRoutes[i];
    }
    
    static get prevPage() {
        let i = this.currentPage.index - 1;
        if(i < 0) {
            i = this.sortedRoutes.length - 1;
        }
        return this.sortedRoutes[i];
    }
    
    // Private
    static animateHome() {
        let d = document;
        var header = d.getElementsByClassName('Header')[0];
        let aktaSpans = d.getElementsByClassName('Akta')[0].getElementsByTagName('span');
        [...aktaSpans].forEach((currentSpan, index) => {
            setTimeout(() => {
                currentSpan.className += ' AktaLetterOutLeft';
            }, 250*index);
        });
        header.className += ' HeaderOut';
    }
    static animateOne() {
//        let d = document;
    }
    static animateTwo() {
//        let d = document;
    }
    static animateThree() {
//        let d = document;
    }
    
}


export default NavigationService;