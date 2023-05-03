
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

describe('Czechitas Login Page', async () => {

    it('examples of selectors', async () => {

        await browser.reloadSession();
        await browser.url('/registrace');

        await browser.saveScreenshot("registracka.png")

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
});
