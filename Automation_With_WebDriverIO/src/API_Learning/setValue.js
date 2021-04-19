describe('API Learning', () => {
    it('Set value to a textbox', () => {
        browser.url("https://the-internet.herokuapp.com/login")
        browser.pause(2000);

        //The $ command is a short way to call the findElement command in order to fetch a single element on the page.
        let usernameSelector = "#username"
        $(usernameSelector).setValue("Tuan Anh")

        browser.pause(3000);
    });
});