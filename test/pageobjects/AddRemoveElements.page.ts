import Page from "./page.js";

class AddRemoveElements extends Page {

    get lblAddRemoveElements () { return $('h3') }
    //Add/Remove Elements
    get btnAddElements () { return $('button') }

    open() {
        return super.open('/');
    }
}

export default new AddRemoveElements();
