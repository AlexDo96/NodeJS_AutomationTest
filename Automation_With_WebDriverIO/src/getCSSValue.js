describe('API Learning', () => {
    let pageUrl = "https://the-internet.herokuapp.com";
    let welcomeTextSeletor = 'h1';
    const maxWaitTime = 3000;

    it('Get CSS Value', () => {
        browser.url(pageUrl);
        $(welcomeTextSeletor).waitForDisplayed(maxWaitTime);
        let colorValue = $(welcomeTextSeletor).getCSSProperty('color');

        console.log("Color Value: ", colorValue);
    });
});