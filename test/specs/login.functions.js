async function openLoginPage() {
    await browser.reloadSession();
    await browser.url('/prihlaseni');
}

export function getEmailField() {
    return $('#email');
}

export function getPasswordField() {
    return $('#password');
}

export function getLoginButton() {
    return $('.btn-primary');
}

export function getToast() {
    return $('.toast-message');
}

export function getFieldError() {
    return $('.invalid-feedback');
}

export function getRightNavbar() {
    return $('.navbar-right');
}

export function getUserNameDropdown() {
    return getRightNavbar().$('[data-toggle="dropdown"]');
}

export function getLogoutLink() {
    return $('#logout-link');
}