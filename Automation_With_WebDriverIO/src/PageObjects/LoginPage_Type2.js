const USERNAME_TXTBX = '#username'
const PASSWORD_TXTBX = '#password'
const LOGIN_BTN = '[type="submit"]'

class Login_Page {
    waitForUsernameDisplayed(){
        $(USERNAME_TXTBX).waitForDisplayed(5000);
    }

    setCreds(username,password){
        $(USERNAME_TXTBX).setValue(username)
        $(PASSWORD_TXTBX).setValue(password)
        $(LOGIN_BTN).click()
    }   
}

module.exports = new Login_Page(); // Export to instance
