export class HomePage {

    // change view to Login
    goToLogin() {
        const loginMenu = $("~Login");
        loginMenu.click();
    }

    //change view to Forms
    goToForm() {
        const formMenu = $("~Forms");
        formMenu.click();
    }

}