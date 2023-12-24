const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResidentsPage extends Page {
    get btnAddResident () {
        return $('.action-add.btn.btn-card.btn-primary.ng-binding')
    }
    get searchResidents () {
        return $('#filterTerm')
    }
    get selectSearchResult() {
        return $('.panel.panel-primary.ng-scope')
    }


async addNewResident () {
        await this.btnAddResident.click();
}

async searchForResident (residentName) {
    await this.searchResidents.setValue(residentName)
    await this.selectSearchResult.click()
}

}

module.exports = new ResidentsPage();