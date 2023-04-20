import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/kontakt');

        const windowSize = await browser.getWindowSize();
        console.log(windowSize);

        await browser.saveScreenshot("kontakt_page.png")

        await browser.pause(5000);

    });

});
