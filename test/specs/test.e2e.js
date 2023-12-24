const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const dashboardPage = require('../pageobjects/dashboard.page')
const residentsPage = require('../pageobjects/residents.page')
const newResidentPage = require('../pageobjects/new-resident.page')
const residentProfilePage = require('../pageobjects/resident-profile.page')
const detailsPage = require('../pageobjects/details.page')
const testData = require('../testData/data')

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
        await newResidentPage.register(testData.title, 'Test', 'Name', 'Testy', 'Male', '20/05/1987', '10', '80', '180', '20/05/2023', 'Cody Technology Park', 'Ively Rd', 'Farnborough ', 'Hampshire', 'GU14 0LX', 'UK', '0330 094 0122', 'test@everylifetechnologies.com', '07111 111111', 'Test', 'None', 'Someone', '07111 111112', 'Dr Man', 'The Surgery', '07111 111113');
        //await expect(residentProfilePage.checkHeader).toHaveText('Mr ' + 'Test' + ' Name');
        await residentProfilePage.openDetailsLink();
        await detailsPage.updateStatus('ACTIVE','Test Message');
        await dashboardPage.goToResidentsPage();
        await residentsPage.searchForResident('Test Name')
        await residentProfilePage.openDetailsLink();

    });
})