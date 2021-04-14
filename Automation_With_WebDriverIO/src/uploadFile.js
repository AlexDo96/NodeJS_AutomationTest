let path = require('path');

describe('API Learning', () => {
    const maxWaitTime = 3000;
    let pageUrl = "https://the-internet.herokuapp.com/upload";
    let chooseFileSelector = '#file-upload';
    let uploadBtnSelector = '#file-submit';

    it('Upload File', () => {
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