let LoginBase = require('./LoginBase.js')

const USERNAME_TXTBX = '#username'
const PASSWORD_TXTBX = '#password'
const LOGIN_BTN = '[type="submit"]'
const LOGIN_ERR_TXT = '#flash-messages'

class Login_Page extends LoginBase {
    waitForDisplayed() {
        $(USERNAME_TXTBX).waitForDisplayed(5000);
        return this;
    }

    inputUsername(username) {
        $(USERNAME_TXTBX).setValue(username);
        return this;  // After every interaction method -> Return this for Method chaining
    }

    inputPassword(password) {
        $(PASSWORD_TXTBX).setValue(password);
        return this;
    }

    clickOnLoginBtn() {
        $(LOGIN_BTN).click();
        return this;
    }

    getLoginErrorText(){
        return $(LOGIN_ERR_TXT).getText();
    }

    verifyInvalidUsernameText(){
        let currentLoginErr = this.getLoginErrorText();
        let expectedErrText = "Your username is invalid!";

        expect(currentLoginErr).to.include(expectedErrText);
    }

    verifyInvalidPasswordText(){
        let currentLoginErr = this.getLoginErrorText();
        let expectedErrText = "Your password is invalid!";

        expect(currentLoginErr).to.include(expectedErrText);
    }
}

module.exports = new Login_Page(); // Export to instance
