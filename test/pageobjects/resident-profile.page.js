const { $ } = require('@wdio/globals')
const Page = require('./page');


class ResidentProfilePage extends Page {
    get checkHeader () {
        return $('.header.ng-binding')
    }    
    get detailsLink () {
        const btnDetails = $('=Details')
        return btnDetails
    }
    get residentFileLink () {
        const btnResidentFile = $('=Resident File')
        return btnResidentFile
    }

async openDetailsLink () {
    await expect(this.detailsLink).toBeClickable();
    await this.detailsLink.click();
}

async openResidentFileLink () {
    await expect(this.residentFileLink).toBeClickable();
    await this.residentFileLink.click();
}
}

module.exports = new ResidentProfilePage();