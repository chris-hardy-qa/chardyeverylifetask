const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResidentProfilePage extends Page {
    get checkHeader () {
        return $('.header.ng-binding')
    }    
    get detailsLink () {
        const btnDetails = $('=Details')
        return btnDetails
    }

async openDetailsLink () {
    await expect(this.detailsLink).toBeClickable();
    await this.detailsLink.click();
}
}

module.exports = new ResidentProfilePage();