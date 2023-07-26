import { Key } from 'webdriverio'

/**
 * Resolves input element value by it's ID using JavaScript call to document.getElementById
 * @param id input element id
 * @returns {Promise<*>}
 */
export function getFieldValueById(id) {
    return browser.execute((id) => {
        return document.getElementById(id).value
    }, id);
}

async function setICO(ico) {
    await $('#ico').setValue(ico);
    await browser.keys('Enter');
    await $('.toast-message').waitForDisplayed();
}

async function companyIdField() { return this.mainContent.$(`#${this._companyIdFieldId}`); }
async function toast() { return $('.toast-message'); }

describe('Objednávka pro MŠ/ZŠ', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('objednavka/pridat');
    });

    describe('Navigace na strance', async () => {

        it('Aplikace umožňuje uživateli v menu Pro učitele vytvoření nové objednávky pro MŠ/ZŠ', async () => {


            const ico = await $('#ico'); 
            await expect(ico).toBeDisplayed();
            await expect(ico).toBeEnabled();

            const client = await $('#client'); 
            await expect(client).toBeDisplayed();
            await expect(client).toBeEnabled();
            
            await browser.pause(1000)

            const address = await $('#address'); 
            await expect(address).toBeDisplayed();
            await expect(address).toBeEnabled();

            const substitute = await $('#substitute'); 
            await expect(substitute).toBeDisplayed();
            await expect(substitute).toBeEnabled();

        }); 

        it('ICO se vyplni ze systemu ARES', async () => {
            const ico = await $('#ico'); 
            
            await $('#ico').setValue('22834958');
            await browser.keys([Key.Enter])
            await $('.toast-message').waitForDisplayed();
            
            const toastMessage = $('.toast-message');
            console.log('Conformation text: ' + await toastMessage.getText());
            

            
            });


            //await OrderPage.navbar(NAVBAR_TEACHERS, NAVBAR_NEW_ORDER);
            //await expect(OrderPage.pageHeader).toHaveText(ORDER_PAGE_TITLE);
            //await expect(OrderPage.contentHeader).toHaveText(ORDER_FORM_TITLE);
        });

    });