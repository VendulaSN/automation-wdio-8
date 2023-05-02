
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
        await browser.url('/prihlaseni');

        /*
        CSS Selectors: tag
         */
        const formTagSelector = $('form');
        console.log(await formTagSelector.getHTML());

        const inputTagSelector = $('input');
        console.log(await inputTagSelector.getHTML());

        const buttonTagSelector = $('button');
        console.log(await buttonTagSelector.getHTML());

    });

});
