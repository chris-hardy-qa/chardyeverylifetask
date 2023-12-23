const { $ } = require('@wdio/globals')
const Page = require('./page');
//const titleDropdown = $('#title')
/**
 * sub page containing specific selectors and methods for a specific page
 */
class NewResidentPage extends Page {
    get title () {
        const titleDropdown = $('#title')
        return (titleDropdown)
    }
    get firstName () {
        return $('#firstname')
    }
    get surname () {
        return $('#surname')
    }
    get knownAs () {
        return $('#nickname')
    }
    get sex () {
        const sexDropdown = $('#sex')
        return (sexDropdown)
    }
    get dob () {
        return $('#dob')
    }
    get socialServicesNumber () {
        return $('#ssNumber')
    }
    get weight () {
        return $('#admissionWeightInKilograms')
    }
    get height () {
        return $('#admissionHeightInMeters')
    }
    get admissionDate () {
        return $('#startDate')
    }
    get address1 () {
        return $('input[data-testid="address1"]')
    }
    get address2 () {
        return $('input[data-testid="address2"]')
    }
    get city () {
        return $('input[data-testid="city"]')
    }
    get county () {
        return $('input[data-testid="county"]')
    }
    get postcode () {
        return $('input[data-testid="postcode"]')
    }
    get country () {
        return $('input[data-testid="country"]')
    }
    get tel () {
        return $('#tel')
    }
    get email () {
        return $('#email')
    }
    get mobile () {
        return $('#mobile')
    }
    get accessDetails () {
        return $('#accessDetails')
    }
    get allergies () {
        return $('#allergies')
    }
    get nextOfKin () {
        return $('#nextofkin')
    }
    get nextOfKinTel () {
        return $('#nextofkintel')
    }
    get doctor () {
        return $('#doctor')
    }
    get surgery () {
        return $('#surgery')
    }
    get btnSave () {
        return $('.action-save.btn.btn-card.btn-success.ng-binding')
    }

    async register (title, firstName, surname, nickname, sex, dateOfBirth, socialServicesNumber, weight, height, admissionDate, address1, address2) {
        await this.title.selectByVisibleText(title);
        await this.firstName.setValue(firstName);
        await this.surname.setValue(surname);
        await this.knownAs.setValue(nickname)
        await this.sex.selectByVisibleText(sex)
        await this.dob.setValue(dateOfBirth)
        await this.socialServicesNumber(socialServicesNumber)
        await this.weight(weight)
        await this.weight(height)
        await this.weight(admissionDate)
        await this.weight(address1)
        await this.weight(address2)

        await this.btnSave.click();
    }
}


module.exports = new NewResidentPage();