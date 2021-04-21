let chai = require("chai"); // Import Chai assertion library

exports.config = {
    // Test scripts
    specs: [
        "./src/test-scripts/TC_001_Get_Welcome.js",
        "./src/test-scripts/TC_002_Login_Failed.js",
        "./src/test-scripts/TC_003_Get_Welcome.js",
        "./src/test-scripts/TC_004_Login_Invalid_Username.js",
        "./src/test-scripts/TC_005_Login_Invalid_Password.js"
    ],

    maxInstances: 2, // Define how many sessions to run test

    // Define test suites
    suites: {
        API_Learning: [
            "./src/API_Learning/alertHandle.js",
            "./src/API_Learning/browserTabsHandle.js",
            "./src/API_Learning/clickElement.js"
        ],

        login_function: [
            "./src/test-scripts/TC_001_Get_Welcome.js",
            "./src/test-scripts/TC_002_Login_Failed.js",
            "./src/test-scripts/TC_003_Get_Welcome.js",
            "./src/test-scripts/TC_004_Login_Invalid_Username.js",
            "./src/test-scripts/TC_005_Login_Invalid_Password.js"
        ]
    },

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