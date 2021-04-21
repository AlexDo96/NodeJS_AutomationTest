let LoginPage = require('../page-objects/LoginPage_Type_Method_Chaining.js')

describe('Login Function', () => {
    before(() => {
        // Do something common for all test scripts
        // To create testing data for all scripts
        console.log("=> Start testing");
        LoginPage.openTestingPage('/login')
    });

    beforeEach(() => {
        // Run before each Test case
        console.log("Before script");
    });

    afterEach(() => {
        // Run after each Test case
        console.log("After script");
    });

    it('Login Failed', () => {
        console.log("TC_001");
        LoginPage
            .waitForDisplayed()
            .inputUsername('AAAAAAAAA')
            .inputPassword('SuperSecretPassword!')
            .clickOnLoginBtn();
    });

    it('Login Passed', () => {
        console.log("TC_002");
        LoginPage
            .waitForDisplayed()
            .inputUsername('tomsmith')
            .inputPassword('SuperSecretPassword!')
            .clickOnLoginBtn();
    });

    after(() => {
        // Clean up testing data
        browser.pause(3000)
        console.log("=> Done testing")
    });
});