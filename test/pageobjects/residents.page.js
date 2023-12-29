const { $ } = require('@wdio/globals')
const Page = require('./page');


class ResidentsPage extends Page {
    get btnAddResident () {
        return $('.action-add.btn.btn-card.btn-primary.ng-binding')
    }
    get searchResidents () {
        return $('#filterTerm')
    }
    get selectSearchResults() {
        const cards = ($$('.panel-heading.flex-heading-container')[0])
        return (cards)
    }



async addNewResident () {
        await this.btnAddResident.click();
}

async searchForResident (residentName) {
    await this.searchResidents.setValue(residentName)
     await this.selectSearchResults.click()

}

}

module.exports = new ResidentsPage();