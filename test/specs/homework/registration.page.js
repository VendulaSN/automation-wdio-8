//import { password, username } from "../fixtures";
//import { password_confirm } from "../fixtures";
//import { usernameTest } from "../fixtures";
//import { email, userFullNameCzechitas } from "../fixtures.js";

import AppUserPage from "./app.users.js";

class RegistrationPage extends AppUserPage {

    constructor() {
        super();
        this.url = '/registrace';
    }

    //metody které vrací 'něco' na stránce
    get nameField() {return $('#name'); }
    get emailField() { return $('#email'); }
    get passwordField() { return $('#password'); }
    get passwordConfirmField() { return $('#password-confirm'); }
    get loginButton() { return $('.btn-primary'); }
    get fieldError() { return $('.invalid-feedback'); }
    get toast() { return $('.toast-message'); }
    get navbarRight() { return $('.navbar-right'); }
    get userNameDropdown() { return this.navbarRight.$('[data-toggle="dropdown"]'); }
    get logoutLink() { return $('#logout-link'); }

    async open() {
        await browser.reloadSession();
        await browser.url(this.url);
    }

    async login(usernameTest, email, password, password_confirm) {
        await this.nameField.setValue(usernameTest);
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.passwordConfirmField.setValue(password_confirm);
        await this.loginButton.click();
    }

    async logout() {
        await this.userNameDropdown.click();
        await this.logoutLink.click();
    }

    async getCurrentUser() {
        return await this.userNameDropdown.getText();
    }

    async getFieldError() {
        return await this.fieldError.getText();
    }

    async getToastMessage() {
        return await this.toast.getText();
    }

   
    }



//export novou instanci třídy 
export default new RegistrationPage();

