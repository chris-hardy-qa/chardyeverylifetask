const { $ } = require('@wdio/globals')
const Page = require('./page')


class ResidentFilePage extends Page {
    get title () {
        return $('td[ng-bind="customerPrint.customer.title"]')
    }
    get firstName () {
        return $('td[ng-bind="customerPrint.customer.firstname"]')
    }
    get surname () {
        return $('td[ng-bind="customerPrint.customer.surname"]')
    }
   

async checkDetails (title, firstName, surname){
    await expect(this.title).toHaveText(title);
    await expect(this.firstName).toHaveText(firstName);
    await expect(this.surname).toHaveText(surname);
}
}

module.exports = new ResidentFilePage();