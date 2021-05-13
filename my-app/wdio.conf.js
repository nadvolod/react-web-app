const visualOptions = {
    apiKey: process.env.SCREENER_API_KEY,
    projectName: 'new-app-2',
    scrollAndStitchScreenshots: true
};
const sauceOptions = {
    username: process.env.SAUCE_USERNAME,
    accesskey: process.env.SAUCE_ACCESS_KEY
};

exports.config = {
    runner: 'local',
    region: 'us',
    services: [
        ['sauce', {
            sauceConnect: true
        }]
    ],
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 100,
    //Screener config
    hostname: 'hub.screener.io',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',
    capabilities: [
        //Desktop A 24%: https://www.w3schools.com/browsers/browsers_display.asp
        {
            browserName: 'chrome',
            platformName: 'windows 10',
            browserVersion: 'latest',
            'sauce:options': {
                ...sauceOptions,
            },
            'sauce:visual':{
                ...visualOptions,
                viewportSize: '1366x768'
            }
        },
        {
            browserName: 'safari',
            platformName: 'macOS 10.15',
            browserVersion: 'latest',
            'sauce:options': {
                ...sauceOptions,
            },
            'sauce:visual': {
                ...visualOptions,
                viewportSize: '375x812'
            }
        }
    ],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    baseUrl: 'http://localhost:3000/',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,

    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}