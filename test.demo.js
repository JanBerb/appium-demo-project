//importing and implementing pages
import { LoginPage } from "./Pages/login-page";
import { HomePage } from "./Pages/home-page";
import { FormPage } from "./Pages/form-page";

const homePage = new HomePage;
const loginPage = new LoginPage;
const formPage = new FormPage;


//login variables
const email = "example@a.com"; //valid email
const password = "qwer1234"; //valid password
const loginSuccessTxt = "You are logged in!"; //what should be succes pop-up text

//form variables
const inputText = "abc"; //input for the first form element
const switchToOn = "Click to turn the switch ON"; //text under the switch button when switch button is off
const switchToOff = "Click to turn the switch OFF"; //text under the switch button when switch button is on
const dropItemNum = 2; //from 1 to 4
const activeButtonAllertTxt = "This button is active"; // what should be succes button pop-up text


describe('TC01:Filling the form after successful login in Wdio Demo App for android', () => {

    it('Log in and fill the form with positive values.', () => {
        homePage.goToLogin(); // change view to Login

        loginPage.login(email, password); //login to system
        loginPage.checkLoginMessage(loginSuccessTxt); //check if succes pop-up message is correct

        homePage.goToForm(); //change view to Forms

        formPage.fillFormInput(inputText); //fill input field
        formPage.changeSwitchValue(switchToOn, switchToOff); //check if switch toggle button is working
        formPage.selectFromDropdown(dropItemNum); //choose from dropdown menu and check if choosen item is correct
        formPage.swipeToButton(); //swipe screen up to see buttons
        formPage.clickActiveButton(activeButtonAllertTxt); //click the active button and check if pop-up message is correct
    });


});