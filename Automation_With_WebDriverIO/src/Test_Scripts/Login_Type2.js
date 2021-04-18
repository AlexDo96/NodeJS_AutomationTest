let LoginPage = require('../PageObjects/LoginPage_Type2.js')

describe('Page Object type 2', () => {
    it('Login to the page', () => {
        browser.url("https://the-internet.herokuapp.com/login")

        LoginPage.waitForUsernameDisplayed()
        LoginPage.setCreds('Tuan Anh', '!#@@%%^')

        browser.pause(3000)
    });
});