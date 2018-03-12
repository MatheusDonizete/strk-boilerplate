import * as Pages from './pages';

const routes = {
    'index': Pages.Index.default,
    'login': Pages.Login.default,
    'board': Pages.Freeboard.default
}

class ConnectApp extends HTMLElement {

    static get observedAttributes() {
        return ['route'];
    }

    constructor() {
        super();
        this.render();
    }

    connectedCallback() {        
        setTimeout(() => {            
            const content = this.innerHTML;
            if (!content) {
                this.render();
            }
        }, 0);
    }

    render() {
        const route = this.getAttribute('route');
        console.log(routes, route, Pages);
        this.innerHTML = routes[route];         
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        this.render();
    }
}

window.customElements.define('connect-app', ConnectApp);

export { ConnectApp };