const USERNAME_TXTBX = '#username'
const PASSWORD_TXTBX = '#password'
const LOGIN_BTN = '[type="submit"]'

class Login_Page {
    waitForDisplayed() {
        $(USERNAME_TXTBX).waitForDisplayed(5000);
    }

    inputUsername(username) {
        $(USERNAME_TXTBX).setValue(username)
    }

    inputPassword(password) {
        $(PASSWORD_TXTBX).setValue(password)
    }

    clickOnLoginBtn() {
        $(LOGIN_BTN).click()
    }
}

module.exports = new Login_Page(); // Export to instance
