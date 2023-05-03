import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');

        await browser.saveScreenshot("prihl2.png")

        const emailField = await $('#email');
        console.log(await emailField.getHTML());

        const buttonTagSelector = await $('button');
        console.log(await buttonTagSelector.getHTML());

        const windowSize = await browser.getWindowSize();
        console.log(windowSize);

    });

});
