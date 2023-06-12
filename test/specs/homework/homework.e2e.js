//Meeting ID: 810 9278 7649

//Passcode: 797195

/**
 * Lesson 2: Selectors
 *
 * Example HTML (simplified)
 *
 * <div class="card-body">
 *     <form method="POST" action="https://...">
 *         <input id="email" type="email" name="email" value="">
 *         <input id="password" type="password" name="password">
 *         <button type="submit" class="btn btn-primary">Přihlásit</button>
 *         <a class="btn btn-link" href="https://...">Zapomněli jste své heslo?</a>
 *     </form>
 * </div>
 */


async function openLoginPage() {
    await browser.reloadSession();
    await browser.url('/prihlaseni');
}



function getNameField() {
    return $('#name');
}
  
function getEmailField() {
        return $('#email');
    }
 /*   
function getPasswordField() {
        return $('#password');
    }
   
function getPasswordConfirmField() {
        return $('#password-confirm');
    }    

function getLoginButton() {
        return $('.btn-primary');
    }
    
function getToast() {
        return $('.toast-message');  
        
};  */     


describe('Login Page', async () => {
            
    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/registrace');
    });
    
    it('should save screenshot', async () => {
        
        await browser.saveScreenshot("registracka.png")
    });

    it('examples of selectors', async () => {
        
        const idNameSelector = await $('#name');
        console.log(await idNameSelector.getHTML());

        const idEmailSelector = await $('#email');
        console.log(await idEmailSelector.getHTML());

        const idPasswordSelector = $('#password');
        console.log(await idPasswordSelector.getHTML());

        const idPasswordConfirmSelector = $('#password-confirm');
        console.log(await idPasswordConfirmSelector.getHTML());

        const classSelector = $('.btn-primary');
        console.log(await classSelector.getHTML());

    })

    
        
    it('should show reg form', async () => {

        const idNameSelector = await $('#name'); // awaited once, used result on twice
        await expect(idNameSelector).toBeDisplayed();
        await expect(idNameSelector).toBeEnabled();

        const emailField = await getEmailField();
        await expect(emailField).toBeDisplayed();
        await expect(emailField).toBeEnabled();
              
        const passwordField = await $('#password'); // awaited once, used result on twice
        await expect(passwordField).toBeDisplayed();
        await expect(passwordField).toBeEnabled();

        const passwordConfirmField = await $('#password-confirm'); // awaited once, used result on twice
        await expect(passwordConfirmField).toBeDisplayed();
        await expect(passwordConfirmField).toBeEnabled();
        
        const loginButton = $('.btn-primary'); // did not await element here
        await expect(await loginButton.getText()).toEqual('Zaregistrovat'); // awaited getText() which resolved the whole chain
    });
            
   
    it('should verify valid reg form2', async () => {
        let nahodneCislo = Math.random()
        
        const NameSelector = await $('#name');
        const emailField = await $('#email');
        const passwordField = await $('#password');
        const passwordConfirmField = await $('#password-confirm');
        const loginButton = await $('.btn-primary');
        const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');

        /*await idNameSelector.setValue(Venny)
        await emailField.setValue(gfh@seznam.cz);
        await passwordField.setValue(pass1);
        await passwordConfirmField.setValue(pass1);
        await loginButton.click()*/
       
        await NameSelector.setValue("Vendy77");
        await emailField.setValue(nahodneCislo + '@seznam.cz');
        await passwordField.setValue("Ahoj123");
        await passwordConfirmField.setValue("Ahoj123")
        await loginButton.click()

        await expect(await userNameDropdown.getText()).toEqual("Vendy77");

    });

        /*const navbarRight = $('.navbar-right')
        const userNameDropdown = await navbarRight.$('[data-toggle="dropdown"]');
        console.log('User currently logged in: ' + await userNameDropdown.getText());*/


    it('invalid registration - numeric password', async () => {
        let nahodneCislo = Math.random()

        const NameSelector = await $('#name');
        const emailField = await $('#email');
        const passwordField = await $('#password');
        const passwordConfirmField = await $('#password-confirm');
        const loginButton = await $('.btn-primary');
        const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');
        
        await NameSelector.setValue("Ve1");
        await emailField.setValue(nahodneCislo + '@seznam.cz');
        await passwordField.setValue("1123");
        await passwordConfirmField.setValue("1123")

        await loginButton.click();
        const fieldError = $('.invalid-feedback');
        console.log('Field error: ' + await fieldError.getText());

        const toastMessage = $('.toast-message');
        console.log('Error: ' + await toastMessage.getText());

        
        const fieldError1 = $('.invalid-feedback');
        console.log('Field error: ' + await fieldError1.getText());
        //console.log('User currently logged in: ' + await userNameDropdown.getText()); //pokus jestli to selže

        const navBarNavSelector = $('.active');
        console.log(await navBarNavSelector.getHTML);
        console.log(await navBarNavSelector.getText);
    });
});
