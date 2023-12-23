const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    get navbar () {
        return $('.ng-binding.ng-scope.username');
    }
    get btnResidents () {
        return $('#customersTab')
    }

    async goToResidentsPage () {
        await expect(this.btnResidents).toBeClickable();
        await this.btnResidents.click();
}
}

module.exports = new DashboardPage();