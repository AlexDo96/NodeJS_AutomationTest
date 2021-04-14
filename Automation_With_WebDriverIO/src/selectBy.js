describe('API Learning', () => {
    const maxWaitTime = 3000;
    let pageUrl = "https://the-internet.herokuapp.com/dropdown";

    let dropDownSelector = '#dropdown';

    it('Handle Dropdown Menu', () => {
        browser.url(pageUrl)

        //The $ command is a short way to call the findElement command in order to fetch a single element on the page.
        $(dropDownSelector).waitForDisplayed(maxWaitTime);
        $(dropDownSelector).selectByVisibleText('Option 2'); //Select By Text API
        browser.pause(maxWaitTime);
        $(dropDownSelector).selectByAttribute('value', '3'); //Select By Attribute API
        browser.pause(maxWaitTime);
    });
});