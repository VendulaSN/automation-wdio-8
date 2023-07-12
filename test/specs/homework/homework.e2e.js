//Meeting ID: 810 9278 7649
//Passcode: 797195
//hlavní akceptační body - 1) zobrazení formuláře + ověření console.log/assertace!
//                         2) validní registrace uživatele + ověření console.log/assertace!
//                         3) invalidní registrace s existujícím maile + invalid feedback - assertace
//                         4) invalidní registrace s číselným heslem + invalid feedback - assertace


import {usernameTest, email, usernameCzechitas, password, userFullNameTest, password_confirm, generovanyEmail, generovanyUzivatel, numericPasword, numericPasword_confirm, invalidEmail} from '../../specs/fixtures.js'
import RegistrationPage from '../../specs/homework/registration.page.js'

describe('Registration page', async () => {

    beforeEach(async () => {
        await RegistrationPage.open();
    });

    
    it('should show registration form', async () => {
    await expect(await RegistrationPage.nameField).toBeDisplayed();
    await expect(await RegistrationPage.nameField).toBeEnabled();
    await expect(await RegistrationPage.emailField).toBeDisplayed();
    await expect(await RegistrationPage.emailField).toBeEnabled();
    await expect(await RegistrationPage.passwordField).toBeDisplayed();
    await expect(await RegistrationPage.passwordField).toBeEnabled();
    await expect(await RegistrationPage.passwordConfirmField).toBeDisplayed();
    await expect(await RegistrationPage.passwordConfirmField).toBeEnabled();
    await expect(await RegistrationPage.loginButton.getText()).toEqual('Zaregistrovat');

    });

    it('should register with valid credentials', async () => {

    await RegistrationPage.login(generovanyUzivatel, generovanyEmail, password, password_confirm);

    await expect(await RegistrationPage.getCurrentUser()).toEqual(generovanyUzivatel);

    });



    it('should not login with invalid credentials', async () => {

        await RegistrationPage.login(usernameTest, invalidEmail, password, password_confirm);

        // na stránce toast message?
        //await expect(await RegistrationPage.getToastMessage()).toContain('invalid');

        // validační message ve formuláři
        await expect(await RegistrationPage.getFieldError()).toContain('neexistuje')

        //login formulář
        await expect(await RegistrationPage.nameField).toBeDisplayed();
        await expect(await RegistrationPage.emailField).toBeDisplayed();
        await expect(await RegistrationPage.passwordField).toBeDisplayed();
        await expect(await RegistrationPage.passwordConfirmField).toBeDisplayed();
        await expect(await RegistrationPage.loginButton).toBeDisplayed();
    });

    
   
    it('should not login with invalid credentials - email already exists', async () => {

        await RegistrationPage.login(usernameCzechitas, email, password, password_confirm);

        // toast message
        await expect(await RegistrationPage.getToastMessage()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');

        // validační message ve formuláři
        await expect(await RegistrationPage.getFieldError()).toEqual('Účet s tímto emailem již existuje')

        // login formulář
        await expect(await RegistrationPage.nameField).toBeDisplayed();
        await expect(await RegistrationPage.emailField).toBeDisplayed();
        await expect(await RegistrationPage.passwordField).toBeDisplayed();
        await expect(await RegistrationPage.passwordConfirmField).toBeDisplayed();
        await expect(await RegistrationPage.loginButton).toBeDisplayed();
    });
        
    
    
    it ('invalid registration - password contains only numeric characters', async () => {
      await RegistrationPage.login(generovanyUzivatel, generovanyEmail, numericPasword, numericPasword_confirm);

        // toast message
        //await expect(await RegistrationPage.getToastMessage()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');

        // validační message ve formuláři
        await expect(await RegistrationPage.getFieldError()).toEqual('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici')

        // login formulář
        await expect(await RegistrationPage.nameField).toBeDisplayed();
        await expect(await RegistrationPage.emailField).toBeDisplayed();
        await expect(await RegistrationPage.passwordField).toBeDisplayed();
        await expect(await RegistrationPage.passwordConfirmField).toBeDisplayed();
        await expect(await RegistrationPage.loginButton).toBeDisplayed(); 

    });


   
    /*it('should verify valid reg form2', async () => {
        let nahodneCislo = Math.round(Math.random() * 100)

        await getNameField().setValue('Vendy77')
        await getEmailField().setValue(nahodneCislo + '@seznam.cz');
        await getPasswordField().setValue('Passw1');
        await getPasswordConfirmField().setValue('Passw1');
        await getLoginButton().click();

        await expect(await getUserNameDropdown().getText()).toEqual('Vendy77');
    

        
        
        /*const NameSelector = await $('#name');
        const emailField = await $('#email');
        const passwordField = await $('#password');
        const passwordConfirmField = await $('#password-confirm');
        const loginButton = await $('.btn-primary');
        const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');

        /*await idNameSelector.setValue(Venny)
        await emailField.setValue(gfh@seznam.cz);
        await passwordField.setValue(pass1);
        await passwordConfirmField.setValue(pass1);
        await loginButton.click()
       
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


    /*it('invalid registration - mail already exist', async () => {    

        await getNameField().setValue('Vendy77')
        await getEmailField().setValue('da-app.admin@czechitas.cz');
        await getPasswordField().setValue('Passw1');
        await getPasswordConfirmField().setValue('Passw1');
        await getLoginButton().click();


        await expect(await getToast().getText()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');

        await expect(await getFieldError().getText()).toEqual('Účet s tímto emailem již existuje');

        expect(getEmailField).toBeDisplayed();
        expect(getPasswordField).toBeDisplayed();
        expect(getLoginButton).toBeDisplayed();

    });    

    it('invalid registration - numeric password', async () => {
        let nahodneCislo = Math.round(Math.random() * 100)
        

        await getNameField().setValue('Vendy77')
        await getEmailField().setValue(nahodneCislo + '@seznam.cz');
        await getPasswordField().setValue('123');
        await getPasswordConfirmField().setValue('123');
        await getLoginButton().click();

        await expect(await getToast().getText()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');

        
        await expect(await getFieldError().getText()).toEqual('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');
        
        
        /*await emailField.setValue(username);
        await passwordField.setValue('invalid');
        await loginButton.click();

        await expect(await getToast().getText()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');

        await expect(await getFieldError().getText()).toEqual('Tyto přihlašovací údaje neodpovídají žadnému záznamu.');

        await expect(emailField).toBeDisplayed();
        await expect(passwordField).toBeDisplayed();
        await expect(loginButton).toBeDisplayed();


    });



        /*
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
    });*/



    
});
