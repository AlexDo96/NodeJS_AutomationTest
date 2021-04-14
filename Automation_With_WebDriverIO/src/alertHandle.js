describe('API Learning', () => {
    const maxWaitTime = 3000;
    let pageUrl = "https://the-internet.herokuapp.com";
    let jsLinkText = '=JavaScript Alerts';
    let jsConfirmElementSelector = '[onClick="jsConfirm()]';

    it('Alert Handle', () => {
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
});