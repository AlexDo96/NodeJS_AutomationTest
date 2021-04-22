let LoginPage = require('../page-objects/LoginPage_Type_Method_Chaining')

describe('Page Object Method Chaining', () => {
    it('Login to the page', () => {
        LoginPage.openTestingPage('/login')

        LoginPage
            .waitForDisplayed()
            .inputUsername('tomsmith')
            .inputPassword('SuperSecretPassword!')
            .clickOnLoginBtn();

        browser.pause(3000)
    });
});