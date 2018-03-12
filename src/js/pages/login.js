import 'babel-polyfill';
import 'document-register-element';
import { LoginForm } from '../components/login-form';

export default `
    <link rel="stylesheet" href="assets/css/style.login.css">
    <main>
        <section class="form-container flex-container flex-center">
            <form class="flex-container flex-column">                
                <login-form class="flex-container flex-column"></login-form>
            </form>
        </section>
    </main>
`;