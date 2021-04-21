let LoginPage = require('../page-objects/LoginPage_Type_Method_Chaining.js')
let LoginData = require('../test-data/Data_TCs.js')
let WelcomePage = require('../page-objects/Welcome.js');

describe('LOGIN', () => {
    const LOGIN_DATA = LoginData.VALID_LOGIN_CREDS; // Import and using VALID_LOGIN_CREDS properties

    beforeEach(() => {
        // Run before Test case
        console.log("=> Start testing")
        LoginPage.openTestingPage('/login')
    });

    afterEach(() => {
        // Run after Test case
        browser.pause(3000)
        console.log("=> Done testing")
    });

    it('Login OK and Get welcome text', () => {
        LoginPage
            .waitForDisplayed()
            .inputUsername(LOGIN_DATA.username)  // Call and using data value from LOGIN_DATA constant
            .inputPassword(LOGIN_DATA.password) // Call and using data value from LOGIN_DATA constant
            .clickOnLoginBtn();

        WelcomePage.verifyWelcomeText();
    });
});