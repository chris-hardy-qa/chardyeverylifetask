const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const dashboardPage = require('../pageobjects/dashboard.page')
const residentsPage = require('../pageobjects/residents.page')
const newResidentPage = require('../pageobjects/new-resident.page')
const residentProfilePage = require('../pageobjects/resident-profile.page')
const detailsPage = require('../pageobjects/details.page')
const testData = require('../testData/data')
const residentFilePage = require('../pageobjects/resident-file.page')

describe('My Login application', () => {

    beforeEach(() => {
         browser.maximizeWindow();
    });
    it('should login with valid credentials', async () => {
       
        await LoginPage.open()

        await LoginPage.login(testData.username, testData.password)
    })

    it('setup a new resident', async() => {
        await expect(dashboardPage.navbar).toHaveText(testData.username)
        await dashboardPage.goToResidentsPage();
        await residentsPage.addNewResident();
        await newResidentPage.register(testData.title, testData.firstName, testData.surname, testData.nickname, testData.sex, testData.dateOfBirth, testData.ssn, testData.weight, testData.height, testData.admissionDate, testData.address1, testData.address2, testData.city, testData.county, testData.postcode, testData.country, testData.telephone, testData.email, testData.mobile, testData.accessDetails, testData.allergies, testData.nextOfKin, testData.nextOfKinTelephone, testData.doctor, testData.surgery, testData.surgeryTel);
       
    
        await residentProfilePage.openDetailsLink();
        await detailsPage.updateStatus(testData.residentStatus, testData.residentReasonMessage);
 
        await dashboardPage.goToResidentsPage();
        await residentsPage.searchForResident(testData.firstName + " " + testData.surname)
        await residentProfilePage.openResidentFileLink();
       
        await residentFilePage.checkDetails(testData.title, testData.firstName, testData.surname)
        
        
    });
})