let path = require('path'); //Must need to run TC 2

describe('API Learning', () => {
    it('TC 1: Alert Handle', () => {
        const maxWaitTime = 3000;
        let pageUrl = "https://the-internet.herokuapp.com";
        let jsLinkText = '=JavaScript Alerts';
        let jsConfirmElementSelector = '[onClick="jsConfirm()]';

        browser.url(pageUrl)

        //The $ command is a short way to call the findElement command in order to fetch a single element on the page.
        $(jsLinkText).waitForDisplayed(maxWaitTime);
        $(jsLinkText).click();

        $(jsConfirmElementSelector).waitForDisplayed(maxWaitTime);
        $(jsConfirmElementSelector).click();

        let alertText = browser.getAlertText(); //Get Alert Text API
        console.log("Alert Text: ", alertText);

        browser.acceptAlert(); // Click OK JS Alert
        browser.pause(maxWaitTime);

        $(jsConfirmElementSelector).click();

        browser.dismissAlert(); // Click Cancel JS Alert
        browser.pause(maxWaitTime);
    });

    it('TC 2: Upload File', () => {
        const maxWaitTime = 3000;
        let pageUrl = "https://the-internet.herokuapp.com/upload";
        let chooseFileSelector = '#file-upload';
        let uploadBtnSelector = '#file-submit';

        browser.url(pageUrl)

        //The $ command is a short way to call the findElement command in order to fetch a single element on the page.
        let fileToUploadRelativePath = path.join(__dirname, './fileUpload')
        $(chooseFileSelector).waitForDisplayed(maxWaitTime);
        $(uploadBtnSelector).waitForDisplayed(maxWaitTime);

        $(chooseFileSelector).setValue(fileToUploadRelativePath); // Using this API to upload file
        $(uploadBtnSelector).click();

        browser.pause(maxWaitTime);
    });


});