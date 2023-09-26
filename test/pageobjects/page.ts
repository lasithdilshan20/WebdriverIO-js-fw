export default class Page {
    open (path: string) {
        return browser.url(path)
    }
    maximizeWindow () {
        return browser.maximizeWindow()
    }
    pause (time: number) {
        return browser.pause(time)
    }
}
