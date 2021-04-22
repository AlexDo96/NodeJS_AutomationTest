let LoginBase = require('./LoginBase.js')

const USERNAME_TXTBX = '#username'
const PASSWORD_TXTBX = '#password'
const LOGIN_BTN = '[type="submit"]'

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
}

module.exports = new Login_Page(); // Export to instance
