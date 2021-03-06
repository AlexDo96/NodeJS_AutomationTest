let LoginPage = require('../page-objects/Login.js')
let LoginData = require('../test-data/Data_TCs.js')

describe('LOGIN', () => {
    const LOGIN_DATA = LoginData.INVALID_LOGIN_CREDS; // Import and using INVALID_LOGIN_CREDS properties
    
    before(() => {
        // Do something common for all test scripts
        // To create testing data for all scripts
        console.log("=> Start testing")
        LoginPage.openTestingPage('/login')
    });

    after(() => {
        // Clean up testing data
        browser.pause(3000)
        console.log("=> Done testing")
    });

    it('Login Failed', () => {
        LoginPage
            .waitForDisplayed()
            .inputUsername(LOGIN_DATA.username)  // Call and using data value from LOGIN_DATA constant
            .inputPassword(LOGIN_DATA.password) // Call and using data value from LOGIN_DATA constant
            .clickOnLoginBtn();
    });
});