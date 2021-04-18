describe('API Learning', () => {
    const maxWaitTime = 5000;
    let loginUrl = "https://the-internet.herokuapp.com";

    let formAuthenLinkText = '=Form Authentication';
    let usernameSelector = '#username';
    let passwordSelector = '#password';
    let loginBtn = '[type="submit"]';
    let welcomeTextSelector = 'h2';

    it('Wait for disappeared', () => {
        browser.url(loginUrl)

        //The $ command is a short way to call the findElement command in order to fetch a single element on the page.
        //Click element using click() API
        $(formAuthenLinkText).waitForDisplayed(maxWaitTime);
        $(formAuthenLinkText).click();

        $(usernameSelector).waitForDisplayed(maxWaitTime);
        $(usernameSelector).setValue("tomsmith");
        $(passwordSelector).setValue("SuperSecretPassword!");
        $(loginBtn).click();

        //Wait for Login button disappear API
        $(loginBtn).waitForDisplayed(1000, true, '[ERROR] Login process takes longer than 5s');

        let welcomeText = $(welcomeTextSelector).getText();

        console.log(welcomeText);
    });
});