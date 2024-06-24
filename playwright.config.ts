import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    // testMatch: ['tests/frames.test.ts'],
    use: {
        headless: false,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        launchOptions: {
            slowMo: 200
        }
    },
    retries: 0,
    reporter: [["dot"], ["html", {
        open: "on-failure"
    }]]
}

export default config;