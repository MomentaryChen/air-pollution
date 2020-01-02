import { BaseStepDef, Given, Then, When } from 'bdd-test-framework';
import { browser, until, by, element } from 'protractor';
// import { async } from 'q';
declare let global: any;

/**
 * The Step Definitions for the root Showcase page.
 */
class AirStepDefs extends BaseStepDef {

    @Given(/^I open Air pollution page$/)
    public async iOpenAirPollutionPage() {
        super.setInShowcase(true);

        await browser.driver.get(browser.baseUrl);

        await browser.driver.wait(until.elementLocated(
            by.xpath('//*[@id="airpollutionicon"]')), 3000);

        // clear browser storage
        await browser.executeScript('window.sessionStorage.clear();');
        await browser.executeScript('window.localStorage.clear();');
        global.mainParent = await element(by.xpath('/*'));
        global.widgetParent = await global.mainParent;
        return browser.driver.manage().window().setSize(1704, 960);
    }

    @When(/^I click "([^"]*)" tab$/)
    public async iClickTab(tabName: string) {
        await browser.driver.findElement(by.xpath(`//*[text()=\'${tabName}\']`)).click();
        await browser.driver.sleep(3000);
    }
    @Then(/^I click "SAVE" buttom$/)
    public async iClickSaveButtom() {
        await browser.driver.findElement(by.xpath(`//*[@id="vertical-tabpanel-0"]/div/button`)).click();
        await browser.driver.sleep(3000);
    }


}

let stepDef = new AirStepDefs();
export = stepDef.getStepFunction();
