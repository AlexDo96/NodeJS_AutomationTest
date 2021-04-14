describe('API Learning', () => {
    const maxWaitTime = 3000;
    let pageUrl = "https://webdriver.io/docs/api.html";
    let AppiumLinkSelector = '#__docusaurus > div.main-wrapper > div > main > div > div > div.col.docItemCol_U38p > div > article > div > p:nth-child(1) > a:nth-child(2)';

    it('Handle Multiple Tabs', () => {
        browser.url(pageUrl)

        //The $ command is a short way to call the findElement command in order to fetch a single element on the page.
        $(AppiumLinkSelector).waitForDisplayed(maxWaitTime);
        $(AppiumLinkSelector).click();

        let allWindowsIds = browser.getWindowHandles(); // Get all current windows ID / Array
        console.log(allWindowsIds);

        let firstWindowId = allWindowsIds[0];
        let secondWindowId = allWindowsIds[1];

        browser.switchToWindow(secondWindowId); // Switch to second window/tab

        let secondWindowTitle = browser.getTitle(); // Get second window title
        console.log('2nd Window Title: ', secondWindowTitle);

        browser.switchToWindow(firstWindowId);

        let firstWindowTitle = browser.getTitle(); // Get first window title
        console.log('1st Window Title: ', firstWindowTitle);

        browser.pause(maxWaitTime);
    });
});