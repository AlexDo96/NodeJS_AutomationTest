let path = require ('path');

describe('API Learning', () => {
    let pageURL = "https://the-internet.herokuapp.com";
    let screenshotPath = "./src/Screenshots/SaveScreenshot.png";

    it('Save Screenshot', () => {
        browser.url(pageURL);

        //Solution 1
        //browser.saveScreenshot(screenshotPath);

        //Solution 2
        browser.saveScreenshot(path.join(__dirname, screenshotPath));

    });
});