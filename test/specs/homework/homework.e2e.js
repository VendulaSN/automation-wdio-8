
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



describe('Login Page', async () => {
        
            
    beforeEach(async () => {
        //await browser.reloadSession();
        await browser.url('/registrace');
    });
            
        
    it('should show reg form', async () => {

        const idNameSelector = await $('#name'); // awaited once, used result on twice
        await expect(idNameSelector).toBeDisplayed();
        await expect(idNameSelector).toBeEnabled();

        const emailField = await $('#email'); // awaited once, used result on twice
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
            
    });

    await browser.pause(1000);
    
    it('reg with valid credentials', async () => {

       
        const idNameSelector = await $('#name');
        const emailField = await $('#email');
        const passwordField = await $('#password');
        const passwordConfirmField = await $('#password-confirm');
        const classSelector = await $('.btn-primary');
        //const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');

        await idNameSelector.setValue(Vvv)
        await emailField.setValue(gfh@gmail.cz);
        await passwordField.setValue(pass1);
        await passwordConfirmField.setValue(pass1);
        await classSelector.click()

        //await expect(await userNameDropdown.getText()).toEqual(userFullName);

});
           
    /*await idNameSelector.setValue("Vendy77");
    await idEmailSelector.setValue("ahoj22222222@seznam.cz");
    await idPasswordSelector.setValue("Ahoj123");
    await idPasswordConfirmSelector.setValue("Ahoj123")
    await classSelector.click()



        /*const navbarRight = $('.navbar-right')
        const userNameDropdown = await navbarRight.$('[data-toggle="dropdown"]');
        console.log('User currently logged in: ' + await userNameDropdown.getText());*/

        
        


    

/*nevalidní přihlašování - číselné heslo
        await idNameSelector.setValue("Vendy");
        await idEmailSelector.setValue("ahoj@seznam.cz");
        await idPasswordSelector.setValue("1123");
        await idPasswordConfirmSelector.setValue("1123")

        await classSelector.click();
        const fieldError = $('.invalid-feedback');
        console.log('Field error: ' + await fieldError.getText());

        const toastMessage = $('.toast-message');
        console.log('Error: ' + await toastMessage.getText());

        /*
        const fieldError1 = $('.invalid-feedback');
        console.log('Field error: ' + await fieldError1.getText());
        const userNameDropdown = navbarRight.$('[data-toggle="dropdown"]'); */


               /*const navBarNavSelector = $('.active');
        console.log(await navBarNavSelector.getHTML);
        console.log(await navBarNavSelector.getText);*/
