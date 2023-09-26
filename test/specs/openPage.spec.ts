import HomePO from "../pageobjects/Home.page.js";
import AddRemoveElementsPage from "../pageobjects/AddRemoveElements.page.js";

describe('Volvo Home Automation', () => {
    beforeEach(async () => {
        await HomePO.open();
        await HomePO.maximizeWindow();
        await HomePO.pause(2000);
    })

    it('Add remove Elements', async () => {
        await HomePO.linkAddRemoveElements.click();
        await HomePO.pause(2000);
        await AddRemoveElementsPage.btnAddElements.click();
    })
})
