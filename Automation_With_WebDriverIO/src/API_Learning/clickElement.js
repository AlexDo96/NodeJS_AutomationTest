describe('API Learning', () => {
    const maxWaitTime = 5000;
    let loginUrl = "https://the-internet.herokuapp.com";

    let formAuthenLinkText = '=Form Authentication';
    let usernameSelector = '#username';
    let passwordSelector = '#password';
    let loginBtn = '[type="submit"]';

    it('Click on Linktext', () => {
        browser.url(loginUrl)

        //The $ command is a short way to call the findElement command in order to fetch a single element on the page.
        //Click element using click() API
        $(formAuthenLinkText).waitForDisplayed(maxWaitTime);
        $(formAuthenLinkText).click();

        $(usernameSelector).waitForDisplayed(maxWaitTime);
        $(usernameSelector).setValue("Tuan Anh");
        $(passwordSelector).setValue("abc");
        $(loginBtn).click();

        browser.pause(maxWaitTime);
    });
});