const USERNAME_TXTBX = '#username'
const PASSWORD_TXTBX = '#password'
const LOGIN_BTN = '[type="submit"]'

class Login_Page {
    waitForUsernameDisplayed(){
        $(USERNAME_TXTBX).waitForDisplayed(5000)
    }

    get username(){
        return $(USERNAME_TXTBX)
    }
    
    get password(){
        return $(PASSWORD_TXTBX)
    }

    get loginBtn(){
        return $(LOGIN_BTN)
    }
}

module.exports = new Login_Page(); // Export to instance

