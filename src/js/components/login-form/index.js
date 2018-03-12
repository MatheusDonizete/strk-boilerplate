import { login } from '../../services/user-service';
const template = `            
    <input type="text" placeholder="Usuário">
    <input type="password" placeholder="Senha">
    <button>Entrar</button>
`;

class LoginForm extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = template;
    }

    connectedCallback() {
        console.log(this);
        setTimeout(() => {
            const button = this.querySelector('button');
            if (!button) {
                this.innerHTML = template;
            }
            this.querySelector('button').addEventListener('click', this.logon);
        }, 0);
    }

    // disconnectedCallback(){

    // }

    logon(evt) {
        evt.preventDefault();
        const user = this.parentElement.children.item(0).value;
        const pass = this.parentElement.children.item(1).value;
        const message = login();

        if (message.status === sucess) {
            window.location.href = '/';
        } else {
            alert('Error');
        }

        evt.stopPropagation();
    }
}

window.customElements.define('login-form', LoginForm);

export { LoginForm };