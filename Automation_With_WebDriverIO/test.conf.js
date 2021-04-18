exports.config = {
    // Test scripts
    specs: [
        "./src/Test_Scripts/Login_Type_Method_Chaining.js"
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
    ]
}