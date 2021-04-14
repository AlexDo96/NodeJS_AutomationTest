describe('API Learning', () => {
    const maxWaitTime = 3000;
    let pageUrl = "https://the-internet.herokuapp.com";
    let currentURL = "";
    let currentPageTitle = "";

    let welcomeTextSelector = 'h1';

    it('Get URL and Title', () => {
        browser.url(pageUrl)

        //The $ command is a short way to call the findElement command in order to fetch a single element on the page.
        $(welcomeTextSelector).waitForDisplayed(maxWaitTime);

        currentURL = browser.getUrl(); //Get Url API
        currentPageTitle = browser.getTitle(); //Get page title API

        console.log("Page url: ", currentURL);
        console.log("Page title: ", currentPageTitle);

    });
});