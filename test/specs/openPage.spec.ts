import {browser} from "@wdio/globals";
import HomePO from "../pageobjects/homePO";

describe('Volvo Home Automation', () => {
    beforeEach(async () => {
        await HomePO.open();
        await HomePO.maximizeWindow();
        await HomePO.acceptCookies();
    })

    it('Contact US', async () => {
        await browser.pause(10000)

    })
})
