const routes = {
    Home: {
        name: 'Home',
        url: ''
    },
    Fact1: {
        name: 'Fakta 1',
        url: '1'
    },
    Fact2: {
        name: 'Fakta 2',
        url: '2'
    },
    Fact3: {
        name: 'Fakta 3',
        url: '3'
    },
    About: {
        name: 'Annat',
        url: 'about'
    }
};

let page = '';


class NavigationService {
    
    static get currentPage() {
        return page;
    }
    
    static set currentPage(newPage) {
        page = newPage;
    }
    
    static get fullRoutes() {
        return routes;
    }
    
    static goTo(newRoute, historyObj) {
        
        this.animateTransition(historyObj.location.pathname, newRoute);
        setTimeout(function() {
            historyObj.push(newRoute);
        }, 500);
    }
    
    
    //Private
    animateTransition(oldRoute, newRoute) {
        
    }
}

export default NavigationService;