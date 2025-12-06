
import {expect} from "@playwright/test"
import{test} from "../../fixtures/auth.fixture.js"
import { readCSV } from "../../utils/readcsv.js"
import { LoginPage } from "../../pages/LoginPage.js"
import { HomePage } from "../../pages/HomePage.js"


test.skip("Login Test using Loginpage Fixture", async function( {page, loginpage} )

{
    test.setTimeout(120000)

    // await page.goto("https://freelance-learn-automation.vercel.app/login")

    // //Objects of loginpage and dashboard page
    // const loginpage = new LoginPage(page)
    // const Dashboardpage = new DashboardPage(page)

    // //1. Log into the application
    // await loginpage.logintoApplication("admin@email.com", "admin@123")

    // await page.waitForTimeout(5000)

    // //2. Validating the message displayed in Dashboard page
    // //expect(await Dashboardpage.validateWelecomeMessage()).toContain("Welcome")
    // expect(await Dashboardpage.validateWelecomeMessage()).toMatch(/Welcome/)

    await page.waitForTimeout(5000)
     

}),

test.skip("Login Test using loginpageJSON fixture", async function ( { page, loginpageJSON} ){

    await page.waitForTimeout(5000)

}),

test("Login using CSV file",async function({page,CourseCSV}){

    console.log("Running Login Page using CSV file")

    //const CSVdata = readCSV("./testdata/users.json")

    let loginpage = new LoginPage(page)
    let homepage = new HomePage(page)

    await loginpage.goToUrl()

    await loginpage.fillEmail(CourseCSV[0].username)

    await loginpage.fillPassword(CourseCSV[0].password)

    await loginpage.signIn()

    //await use(JSONdata)

    //console.log("Running Fixture After Test using JSON file")

    await page.waitForLoadState('load')

    expect(await homepage.validateWelecomeMessage()).toBe("Welcome Admin Manager to Learn Automation Courses")

    await page.waitForTimeout(3000)


})

