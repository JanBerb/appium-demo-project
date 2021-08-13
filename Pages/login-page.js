export class LoginPage {


    //login to system
    login(email, password) {
        const emailInputField = $("~input-email");
        const passwordInputField = $("~input-password");
        const loginButton = $("~button-LOGIN");

        emailInputField.setValue(email);
        passwordInputField.setValue(password);
        loginButton.click();

    }

    //check if login succes message is correct
    checkLoginMessage(messageTxt) {
        const successMessage = $("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/" +
            "android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView");

        const successButtonOk = $("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/" +
            "android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button");

        expect(successMessage).toHaveText(messageTxt);
        successButtonOk.click();

    }

}