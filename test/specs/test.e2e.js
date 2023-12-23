const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const dashboardPage = require('../pageobjects/dashboard.page')
const residentsPage = require('../pageobjects/residents.page')
const newResidentPage = require('../pageobjects/new-resident.page')

describe('My Login application', () => {

    beforeEach(() => {
         browser.maximizeWindow();
    });
    it('should login with valid credentials', async () => {
       
        await LoginPage.open()

        await LoginPage.login('christopherHardy134679', '8eer&w1ne')
    })

    it('setup a new resident', async() => {
        await expect(dashboardPage.navbar).toHaveText('christopherHardy134679')
        await dashboardPage.goToResidentsPage();
        await residentsPage.addNewResident();
        await newResidentPage.register('Mr', 'Test', 'Name', 'Testy', 'Male');
        
    });
})