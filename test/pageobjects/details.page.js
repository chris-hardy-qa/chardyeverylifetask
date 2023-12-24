const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DetailsPage extends Page {
    get updateButton () {
        return $('#customer-status-update');
    }
    get status () {
        const statusDropdown = $('select[ng-model="statusModalVm.status.newStatus"]')
        return (statusDropdown)
    }
    get reason () {
        return $('input[ng-model="statusModalVm.status.reasonMsg"]')
    }
    get saveButton () {
        return $('button[ng-click="statusModalVm.ok()"]')
    }

    async updateStatus (status, reasonMessage) {
        await this.updateButton.click()
        await this.status.selectByVisibleText(status)
        await this.reason.setValue(reasonMessage)
        await this.saveButton.click()
    }
}

module.exports = new DetailsPage();