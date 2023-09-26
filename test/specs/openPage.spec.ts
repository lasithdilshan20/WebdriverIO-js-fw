import HomePO from "../pageobjects/homePO.page.js";

describe('Volvo Home Automation', () => {
    it('Contact US', async () => {
        await HomePO.open();
        await HomePO.maximizeWindow();
        await HomePO.acceptCookies();
        await HomePO.pause(2000);
    })
})
