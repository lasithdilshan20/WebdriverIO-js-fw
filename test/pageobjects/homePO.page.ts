import Page from "./page.js";

class HomePage extends Page {
    get acceptCookiesBtn () { return $('#onetrust-accept-btn-handler') }

    open() {
        return super.open('/');
    }
}

export default new HomePage();