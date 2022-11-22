const { By, Builder, until } = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');
const assert = require("assert");

suite(function(env) {
    describe('Tests for chromedriver.chromium.org', function() {
        let driver;
        
        before(async function() {
            driver = await new Builder().forBrowser('chrome').build();
        });

        after(async () => await driver.quit());

        it('Test #1.1. Check title for /home', async function() {
            await driver.manage().window().maximize();
            await driver.get('https://chromedriver.chromium.org/home');
            const value = await driver.getTitle()
            assert.equal("ChromeDriver - WebDriver for Chrome", value);
        });

        it('Test #1.2. Check title for /extensions', async function() {
            await driver.manage().window().maximize();
            await driver.get('https://chromedriver.chromium.org/home');
            await driver.findElement(By.xpath('//*[@id="WDxLfe"]/ul/li[3]/div[1]/div/a')).click();
            const value = await driver.getTitle()
            assert.equal("ChromeDriver - WebDriver for Chrome - Chrome Extensions", value);
        });

        it('Test #2. Check search url contains word driver', async function() {
            await driver.manage().window().maximize();
            await driver.get('https://chromedriver.chromium.org/home');
            await driver.wait(until.elementLocated(By.xpath('//*[@id="atIdViewHeader"]/div/div[2]/div[1]/div[2]/div/span/span'))).click();
            await driver.wait(until.elementLocated(By.xpath('//*[@id="yDmH0d"]/div[1]/div/div[1]/div[2]/div[3]/div[2]/div/div[1]/div/div[1]/input'))).sendKeys('Driver');
            await driver.findElement(By.xpath('//*[@id="yDmH0d"]/div[1]/div/div[1]/div[2]/div[3]/div[2]/div/div[1]/div/span[1]/div[1]')).click();
            let href = await driver.wait(until.elementLocated(By.xpath('//*[@id="yDmH0d"]/div[1]/div/div[1]/div[3]/div[2]/div/div[2]/div[1]/div/a'))).getAttribute('href');
            assert.equal(href.includes('driver'), true);
        });

        it('Test #3. Check mobile-emulation url contains /mobile-emulation', async function() {
            await driver.manage().window().maximize();
            await driver.get('https://chromedriver.chromium.org/home');
            await driver.wait(until.elementLocated(By.xpath('//*[@id="WDxLfe"]/ul/li[12]/div[1]/div/a'))).click();
            await driver.wait(until.elementLocated(By.xpath('//*[@id="WDxLfe"]/ul/li[12]/div[2]/ul/li[9]/div/div/a'))).click();
            let url = await driver.getCurrentUrl();
            assert.equal(url.includes('/mobile-emulation'), true);
        });
    });
});