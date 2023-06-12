import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {


async function getEmailField() {
    return $('#email');
     
}
     
    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');

        //await browser.saveScreenshot("prihl2.png")

        //const emailField = await $('#email');
        //console.log(await emailField.getHTML());

        //const buttonTagSelector = await $('button');
        //console.log(await buttonTagSelector.getHTML());
        const emailField = await getEmailField();
        await expect(emailField).toBeDisplayed();
        await expect(emailField).toBeEnabled();

             
        //const EmailLabel = $('label[for="email"]')

        console.log('Email field is displayed: ' + await emailField.isDisplayed());
        console.log('Email field is enabled:' + await emailField.isEnabled());

        const passwordField = $('#password');
        console.log('Password field s displayed: ' + await passwordField.isDisplayed());
        console.log('Password field s enabled: ' + await passwordField.isEnabled());

        const loginButton = $('.btn-primary');
        console.log('Přihlásit: ' + await loginButton.getText());

        const link = $('form').$('a').getAttribute('href');
        console.log('Zapomněli jste své heslo? link: ' + await link);

        await emailField.setValue(username);
        await passwordField.setValue(password);
        await loginButton.click();

        //console.log("Email field label: " + await EmailLabel.getText());

        const toastMessage = $('.toast-message');
        console.log('Error: ' + await toastMessage.getText());

        const fieldError1 = $('.invalid-feedback');
        console.log('Field error: ' + await fieldError1.getText());
        const userNameDropdown = navbarRight.$('[data-toggle="dropdown"]');

        await emailField.setValue("da-app.admin@czechitas.cz");
        await passwordField.setValue("Czechitas123");
        await loginButton.click();
       

        const lisakAdmin = $ ('.navbar-right')

        await $('=Přihlášky').click();

        const rows = await $('.dataTable').$('tbody').$$('tr');
        console.log(rows.length + ' řádků v tabulce');

        ///???? vypsání těch řádek

                  

        await browser.pause(1000);

    });

});
