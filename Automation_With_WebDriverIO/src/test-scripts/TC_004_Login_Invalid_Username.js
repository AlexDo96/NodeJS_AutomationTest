let LoginPage = require('../page-objects/Login.js')
let LoginData = require('../test-data/Data_TCs.js')

describe('LOGIN', () => {
    const LOGIN_DATA = LoginData.INVALID_LOGIN_USERNAME; // Import and using INVALID_LOGIN_USERNAME properties

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

    it('Login with wrong username', () => {
        LoginPage
            .waitForDisplayed()
            .inputUsername(LOGIN_DATA.username)  // Call and using data value from LOGIN_DATA constant
            .inputPassword(LOGIN_DATA.password) // Call and using data value from LOGIN_DATA constant
            .clickOnLoginBtn();

        LoginPage.verifyInvalidUsernameText();
    });
});