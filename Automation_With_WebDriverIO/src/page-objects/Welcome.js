const WELCOME_TXT = ".subheader"

class Welcome {
    getWelcomeText() {
        $(WELCOME_TXT).waitForDisplayed(5000);

        let welcomeText = $(WELCOME_TXT).getText();
        return welcomeText;
    }

    // Define a function to compare Welcome text result using "expect" Chai assertion library
    verifyWelcomeText(){
        let currentWelcomeText = this.getWelcomeText();
        let expectedWelcomeText = "Welcome to the Secure Area. When you are done click logout below.";
        
        const VERIFICATION_ERR = '[ERROR] Welcome text is wrong !';
        
        // Can call "expect" as global variable due to already defined at test.config.js file
        // If currentWelcomeText not same with expectedWelcomeText => Return VERIFICATION_ERR
        expect(currentWelcomeText).to.equal(expectedWelcomeText, VERIFICATION_ERR);
    }
}

module.exports = new Welcome();