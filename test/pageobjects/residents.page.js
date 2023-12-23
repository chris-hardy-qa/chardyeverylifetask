const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResidentsPage extends Page {
    get btnAddResident () {
        return $('.action-add.btn.btn-card.btn-primary.ng-binding')
    }

async addNewResident () {
        await this.btnAddResident.click();
}
}

module.exports = new ResidentsPage();