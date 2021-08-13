export class FormPage {

    //fill input field
    fillFormInput(inputTxt) {

        const inputField = $("~text-input");
        const inputResult = $("~input-text-result");

        inputField.setValue(inputTxt);
        expect(inputResult).toHaveText(inputTxt);

    }

    //check if  switch toggle button is working
    changeSwitchValue(toOnSwitchValue, toOffSwitchValue) {
        const switchButton = $("~switch");
        const switchButtonValue = $("~switch-text");

        expect(switchButton).toHaveText("OFF");
        expect(switchButtonValue).toHaveText(toOnSwitchValue);

        switchButton.click();

        expect(switchButton).toHaveText("ON");
        expect(switchButtonValue).toHaveText(toOffSwitchValue);
    }

    //choose from dropdown menu and check if choosen item is correct
    selectFromDropdown(dropItemNumber) {

        const dropdownMenu = $("//android.view.ViewGroup[@content-desc=\"Dropdown\"]/android.view.ViewGroup/android.widget.EditText");

        const defaultDropItem = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/" +
            "android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[1]");
        const wdioDropItem = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/" +
            "android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]");
        const appiumDropItem = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/" +
            "android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[3]");
        const thisAppDropItem = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/" +
            "android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[4]");

        dropdownMenu.click();

        //get text of dropdown menu items 
        let defaultDropText = defaultDropItem.getText();
        let wdioDropText = wdioDropItem.getText();
        let appiumDropText = appiumDropItem.getText();
        let thisAppDropText = thisAppDropItem.getText();

        //choosen dropdown item validation, check if new dropdown menu txt is equal to choosen drop down item text
        if (dropItemNumber == 1) {
            defaultDropItem.click();
            expect(dropdownMenu).toHaveText(defaultDropText);
        } else if (dropItemNumber == 2) {
            wdioDropItem.click();
            expect(dropdownMenu).toHaveText(wdioDropText);
        } else if (dropItemNumber == 3) {
            appiumDropItem.click();
            expect(dropdownMenu).toHaveText(appiumDropText);
        } else {
            thisAppDropItem.click();
            expect(dropdownMenu).toHaveText(thisAppDropText);
        }
    }

    //swipe screen up to see buttons
    swipeToButton() {
        const { height } = driver.getWindowSize()
        const anchor = height * 50 / 100;
        const startPoint = height * 90 / 100;
        const endPoint = height * 10 / 100;

        driver.touchPerform([{
                action: 'press',
                options: {
                    x: anchor,
                    y: startPoint
                }
            },
            {
                action: 'wait',
                options: {
                    ms: 1000
                }
            },
            {
                action: 'moveTo',
                options: {
                    x: anchor,
                    y: endPoint
                }
            },
            {
                action: 'release',
                options: {}
            }
        ]);

    }

    //click the last element of the form - active button and check if allert is correct
    clickActiveButton(activeTxt) {

        const activeButton = $("~button-Active");
        const actvieAllertText = $("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/" +
            "android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView");
        const activeAllertButton = $("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/" +
            "android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[3]");

        activeButton.click();
        expect(actvieAllertText).toHaveText(activeTxt);
        activeAllertButton.click();

    }
}