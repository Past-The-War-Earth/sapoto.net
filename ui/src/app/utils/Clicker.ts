export class Clicker {

    clickInProgress = false

    // Needed for Safari, which multi-clicks the button
    // deskop closes extra popups but mobile does not
    click(
        callback
    ) {
        if (!this.clickInProgress) {
            this.clickInProgress = true
            callback()
            setTimeout(() => {
                this.clickInProgress = false
            }, 1000)
        }
    }

}