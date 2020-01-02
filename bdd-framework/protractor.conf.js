exports.config = {
    directConnect: false,
    ignoreUncaughtExceptions: true,
    framework: 'custom',
    seleniumAddress: 'http://selenium:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--headless',
                '--disable-web-security',
                '--disable-gpu',
                '--no-sandbox',
                '--disable-dev-shm-usage'
            ]
        }
    },
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        'test/features/*.feature'
    ],
    cucumberOpts: {
        strict: true,
        format: [
            'json:reports/results.json',
            'pretty'
        ],
        require: [
            'dist/stepdefs/**/*.js',
            'node_modules/bdd-test-framework/dist/stepdefs/**/*.js'
        ],
        'fail-fast': false
    },
    onPrepare: function () {
        browser.ignoreSynchronization = false;
        browser.manage().timeouts().pageLoadTimeout(120000);
        browser.manage().timeouts().implicitlyWait(10000);
        browser.manage().timeouts().setScriptTimeout(60000);
        return browser.driver.get(browser.baseUrl);
    }
};