describe('API Learning', () => {

    let loginUrl = "https://the-internet.herokuapp.com/login";
    let usernameSelector = '#username';
    let passwordSelector = '#password';

    it('Wait For Display', () => {
        browser.url(loginUrl)

        //The $ command is a short way to call the findElement command in order to fetch a single element on the page.
        //Wait for using waitForDisplayed(ms) API
        $(usernameSelector).waitForDisplayed(5000);

        $(usernameSelector).setValue("Tuan Anh");
        $(passwordSelector).setValue("abc");

        browser.pause(3000);
    });
});