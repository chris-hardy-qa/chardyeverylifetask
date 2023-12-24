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
    get surgeryTelephone () {
        return $('#surgerytel')
    }
    get btnSave () {
        return $('.action-save.btn.btn-card.btn-success.ng-binding')
    }

    async register (title, firstName, surname, nickname, sex, dateOfBirth, ssn, weight, height, admissionDate, address1, address2, city, county, postcode, country, telephone, email, mobile, accessDetails, allergies, nextOfKin, nextOfKinTelephone, doctor, surgery, surgeryTel){
        await this.title.selectByVisibleText(title);
        await this.firstName.setValue(firstName);
        await this.surname.setValue(surname);
        await this.knownAs.setValue(nickname)
        await this.sex.selectByVisibleText(sex)
        await this.dob.setValue(dateOfBirth)
        await this.socialServicesNumber.setValue(ssn)
        await this.weight.setValue(weight)
        await this.height.setValue(height)
        await this.admissionDate.setValue(admissionDate)
        await this.address1.setValue(address1)
        await this.address2.setValue(address2)
        await this.city.setValue(city)
        await this.county.setValue(county)
        await this.postcode.setValue(postcode)
        await this.country.setValue(country)
        await this.tel.setValue(telephone)
        await this.email.setValue(email)
        await this.mobile.setValue(mobile)
        await this.accessDetails.setValue(accessDetails)
        await this.allergies.setValue(allergies)
        await this.nextOfKin.setValue(nextOfKin)
        await this.nextOfKinTel.setValue(nextOfKinTelephone)
        await this.doctor.setValue(doctor)
        await this.surgery.setValue(surgery)
        await this.surgeryTelephone.setValue(surgeryTel)

        await this.btnSave.click();
    }
}


module.exports = new NewResidentPage();