
import {test, expect} from "@playwright/test"
import { LoginPage } from "../../pages/LoginPage.js"

//Write all negative  scenarios for login functionality

//describe creates agroup of tests
test.describe("All Negative Scenarios", ()=>{

    let loginpage

    //to run this BeforeEach for each test
    test.beforeEach(async function( {page} ){

        loginpage  = new LoginPage(page)

        await page.goto("https://freelance-learn-automation.vercel.app/login")


    })

    test("Login Negative scenario - without user ID & password", async function ({page})
        {

            await page.waitForTimeout(2000)

            await loginpage.fillEmail("")

            await loginpage.fillPassword("")

            await loginpage.signIn()

            expect(page.locator(".errorMessage")).toContainText("Email and Password is required")

            await page.waitForTimeout(2000)

        }),

    test("Login Negative scenario - with user ID & without pwd", async function( {page} )
        {

            await page.goto("https://freelance-learn-automation.vercel.app/login")

            await loginpage.fillEmail("")

            await loginpage.fillPassword("admin@123")

            await loginpage.signIn()

            expect(page.locator(".errorMessage")).toContainText("Email is required")

            await page.waitForTimeout(2000)
        
        }),

    test("Login Negative scenario - without user ID & with pwd", async function( {page} )
        {

            await page.goto("https://freelance-learn-automation.vercel.app/login")

            await loginpage.fillEmail("admin@email.com")

            await loginpage.fillPassword("")

            await loginpage.signIn()

            expect(page.locator(".errorMessage")).toContainText("Password is required")

            await page.waitForTimeout(2000)
        
        }),

    test("Login Negative scenario - Invalid user ID & Invalid pwd", async function( {page} )
        {

            await page.goto("https://freelance-learn-automation.vercel.app/login")

            await loginpage.fillEmail("admin125488544sd@email.com")

            await loginpage.fillPassword("154dhnbsv")

            await loginpage.signIn()

            expect(page.locator(".errorMessage")).toContainText("USER Email Doesn't Exist")

            await page.waitForTimeout(2000)
        
        })

})














