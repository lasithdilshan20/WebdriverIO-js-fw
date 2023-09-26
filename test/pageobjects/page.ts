export default class Page {
    open (path: string) {
        return browser.url(path)
    }
    maximizeWindow () {
        return browser.maximizeWindow()
    }
    acceptCookies () {
        return browser.$('#onetrust-accept-btn-handler').click()
    }
}
