
//import { usernameCzechitas } from "../fixtures.js";
//import RegistrationPage from "./registration.page.js";


class AppUserPage {

    get toast() { return $('.toast-message'); }
    get navbarRight() { return $('.navbar-right'); }
    get userNameDropdown() { return this.navbarRight.$('[data-toggle="dropdown"]'); }
    get logoutLink() { return $('#logout-link'); }
    get appButton() {return $('.btn-sm');}

    async open() {
        await browser.url('/');
    }

    async getToastMessage() {
        return await this.toast.getText();
    }

    async logout() {
        await this.userNameDropdown.click();
        await this.logoutLink.click();
    }

    async appCreated() {
        await this.appButton.click();
        
    }

    async getCurrentUser() {
        return await this.userNameDropdown.getText();
    }

}

// NOT a new instance!!!
export default AppUserPage;