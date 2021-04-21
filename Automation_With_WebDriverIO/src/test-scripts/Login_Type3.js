let LoginPage = require('../page-objects/LoginPage_Type3.js')

describe('Page Object type 3', () => {
    it('Login to the page', () => {
        browser.url("https://the-internet.herokuapp.com/login")

        LoginPage.waitForUsernameDisplayed()
        LoginPage.inputUsername('Tuan Anh')
        LoginPage.inputPassword('!#@$#$#%')
        LoginPage.clickOnLoginBtn()

        browser.pause(3000)
    });
});