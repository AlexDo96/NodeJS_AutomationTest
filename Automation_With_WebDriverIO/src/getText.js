describe('API Learning', () => {
    const maxWaitTime = 3000;
    let pageUrl = "https://the-internet.herokuapp.com/dropdown";

    let highlighTextSelector = 'h3';
    let currentHighlighText;

    it('Get Text', () => {
        browser.url(pageUrl)

        //The $ command is a short way to call the findElement command in order to fetch a single element on the page.
        $(highlighTextSelector).waitForDisplayed(maxWaitTime);
        currentHighlighText = $(highlighTextSelector).getText(); //Get Text API
        console.log("Text value: ", currentHighlighText);

        browser.pause(maxWaitTime);

    });
});