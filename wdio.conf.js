import allure from 'allure-commandline';
import video from 'wdio-video-reporter';
//import deepmerge from "deepmerge";
//import {config as baseConfig} from '../../../../wdio.conf.js';

const allureTmpDirectory = './.tmp/allure';
const allureReportDirectory = './reports/allure';



// wdio.conf.js

export const configfirefox = {
    // MANDATORY: Add geckodriver to service array.
    // Default: empty array
    services: [
        [
            'geckodriver',
            // service options
            {
                // The path where the output of the Geckodriver server should
                // be stored (uses the config.outputDir by default when not set).
                outputDir: './logs',

                // pass in custom options for Geckodriver, for more information see
                // https://github.com/webdriverio-community/node-geckodriver#options
                geckodriverOptions: {
                    log: 'debug' // set log level of driver
                }
            }
        ]
    ],
};



export const config = {
    // automationProtocol: 'devtools',
    runner: 'local',
    specs: [
        './test/specs/*.e2e.js'
    ],
    exclude: [
        // './test/specs/examples/**/*.js'
    ],
    suites: {
        exercise: ['./test/specs/exercise.e2e.js'],
        homework: ['./test/specs/homework/*.e2e.js'],
        lesson_01: ['./test/specs/examples/lesson-01/**/*.e2e.js'],
        lesson_02: ['./test/specs/examples/lesson-02/**/*.e2e.js'],
        lesson_03: ['./test/specs/examples/lesson-03/**/*.e2e.js'],
        lesson_04: ['./test/specs/examples/lesson-04/**/*.e2e.js'],
        lesson_05: ['./test/specs/examples/lesson-05/**/*.e2e.js'],
        lesson_07: ['./test/specs/examples/lesson-07/**/*.e2e.js'],
        lesson_08: ['./test/specs/examples/lesson-08/**/*.e2e.js'],
        lesson_09: ['./test/specs/examples/lesson-09/**/*.e2e.js'],
        lesson_10: ['./test/specs/examples/lesson-10/**/*.e2e.js'],
        lesson_11: ['./test/specs/examples/lesson-11/**/*.e2e.js'],
        org: ['./test/specs/org.e2e.js'],
        fixtures: ['./test/specs/fixtures.js'],
        ukol_11: ['./test/ukol_11/order_ukol.e2e.js']
        
    },
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        automationProtocol: 'devtools',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--window-size=1920,1080',
<<<<<<< HEAD
                //'--headless',
=======
                // '--headless',
>>>>>>> 74a9de0c039d5272f4b23ff3095bbe9e6e3d7d2a
                '--no-sandbox',
                '--disable-gpu',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-infobars'
            ]
        },
        "moz:firefoxOptions": {
            // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
            args: [
                // '-headless'
            ]
        }
    }],
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://team8-2022brno.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 12000,
    automationProtocol: 'devtools',
    connectionRetryCount: 3,
    services: [
        'chromedriver',
        'geckodriver'
    ],
    framework: 'mocha',
    reporters: ['spec',
    [video, {
        outputDir: allureTmpDirectory,
        saveAllVideos: true,        // If true, also saves videos for successful test cases
        videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
    }],

    ['allure', {
        outputDir: allureTmpDirectory,
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
        addConsoleLogs: true,
    }]
],
    mochaOpts: {
        ui: 'bdd',
        timeout: 90000
    },

        onPrepare: (config, capabilities) => {
        // remove previous tmp files
        fs.rmdir(allureTmpDirectory, { recursive: true }, err => {
            if (err) console.log(err);
        });
    },
    
        onComplete: () => {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', '--clean', allureTmpDirectory, '--output', allureReportDirectory]);
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(() => reject(reportError), 5000);
            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout);
                if (exitCode !== 0) return reject(reportError);
                console.log('Allure report successfully generated');
                resolve()
            });
        });
    }

}

