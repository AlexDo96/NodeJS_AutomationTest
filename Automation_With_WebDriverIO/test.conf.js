let chai = require("chai"); // Import Chai assertion library

exports.config = {
    // Test scripts
    specs: [
        "./src/Test_Scripts/TC_003_Get_Welcome.js"
    ],
    capabilities: [
        {
            browserName: "chrome"
        }
    ],
    runner: 'local',

    // Declare server info 
    hostname: 'localhost',
    port: 9515,
    path: '//',
    baseUrl: "https://the-internet.herokuapp.com",

    // Test framework
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },

    // Reporter configuration
    reporters: [
        ['junit', {
            outputDir: './reports'
        }]
    ],

    before: () => {
        global.expect = chai.expect; // Define "expect" as global variable using Chai "expect" property
    }
}