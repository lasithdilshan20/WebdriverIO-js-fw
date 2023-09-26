import {browser} from "@wdio/globals";

describe('Volvo Home Automation', () => {
    beforeEach(async () => {
        await browser.url('/')
        await browser.maximizeWindow()
        await browser.$('#onetrust-accept-btn-handler').click()
    })

    it('Contact US', async () => {
        const elementToHover = await $('a[title="About us"]');
        await elementToHover.moveTo();

        await browser.$('a[title="Contact us"]').click()

        await browser.execute(() => {
            window.scrollBy(0, 1000);
        });

        const topic = await $(`select[id='topic']`);
        await topic.selectByAttribute('value', 'Feedback');

        const recipient = await $(`select[id='recipient']`);
        await recipient.selectByAttribute('value', 'press@volvo.com');

        await browser.$(`textarea`).setValue('Test');

        await browser.$(`//label[contains(text(),'Name')]/../input`).setValue('Test User');
        await browser.$(`//label[contains(text(),'E-mail address')]/../input`).setValue('testuser@gmail.com');
        await browser.$(`//label[contains(text(),'Address')]/../input`).setValue('testuser@gmail.com');
        await browser.$(`//label[contains(text(),'City')]/../input`).setValue('Kuala Lumpur');

        await browser.$(`//label[contains(text(),'Postal Code')]/../input`).setValue('55000');
        await browser.$(`//label[contains(text(),'Phone number')]/../input`).setValue('+60123456789');

        await browser.pause(10000)

    })
})
