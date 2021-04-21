let LoginPage = require('../page-objects/LoginPage_Type1.js')

describe('Login Type 01', () => {
    it('Login to the Page', () => {
        browser.url("https://the-internet.herokuapp.com/login")

        LoginPage.waitForUsernameDisplayed()
        LoginPage.username.setValue('ABC')
        LoginPage.password.setValue('XYZ')
        LoginPage.loginBtn.click()

        browser.pause(2000)
    });
});

