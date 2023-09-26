import {browser} from "@wdio/globals";
import HomePO from "../pageobjects/homePO";

describe('Volvo Home Automation', () => {
    beforeEach(async () => {
        await HomePO.open();
        await HomePO.maximizeWindow();
        await HomePO.acceptCookies();
        await HomePO.pause(2000);
    })

    it('Contact US', async () => {


    })
})
