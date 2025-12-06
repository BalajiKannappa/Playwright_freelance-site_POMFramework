import{test, expect} from "@playwright/test"
import { LoginPage } from "../../pages/LoginPage.js"
import { RegistrationPage} from "../../pages/RegistrationPage.js"

test("New user signup test",async function({ page }){

const loginPage= new LoginPage(page)

loginPage.goToUrl()

const registrationPage = new RegistrationPage(page)

await page.waitForTimeout(5000)

registrationPage.signUpUser()

await page.waitForTimeout(5000)

//generate random email id each time
// Usage
let emailID = await registrationPage.generateRandomEmail()

await console.log(emailID);  // Output: user_a3k9m2x7@test.com

// To continue on this test
await registrationPage.fillUserDetails("Balaji", emailID, "welcome@1234", "Himachal Pradesh", "Playing")

await page.waitForTimeout(3000)

await registrationPage.clickSignUpButton()

await page.waitForTimeout(3000)

})