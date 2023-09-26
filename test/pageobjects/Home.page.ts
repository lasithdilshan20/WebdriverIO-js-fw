import Page from "./page.js";

class HomePage extends Page {
    get linkAddRemoveElements () { return $('a[href*="add_remove_elements"]') }

    open() {
        return super.open('/');
    }
}

export default new HomePage();
