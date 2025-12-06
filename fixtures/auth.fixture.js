
import {test as base} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { readJSON } from "../utils/readjson"
import { readCSV } from "../utils/readcsv"

export const test=base.extend({

        loginpage: async ({page}, use) =>
        {

            console.log("Running Login Page Fixture Before Test")

            const loginpage = new LoginPage(page)

            await loginpage.goToUrl()

            await loginpage.fillEmail("admin@email.com")

            await loginpage.fillPassword("admin@123")

            await loginpage.signIn()

            await use(loginpage)

           console.log("Running Fixture After Test")

        },
        loginpageJSON: async ({page}, use) =>
        {

            console.log("Running Login Page Fixture Before Test using JSON file")

            const JSONdata = readJSON("./testdata/users.json")

            const loginpage = new LoginPage(page)

            await loginpage.goToUrl()

            await loginpage.fillEmail(JSONdata.username)

            await loginpage.fillPassword(JSONdata.password)

            await loginpage.signIn()

            await use(JSONdata)

           console.log("Running Fixture After Test using JSON file")

        },

        //fixture for creating allure screenshot
        page:async ({page}, use,testInfo) =>
        {
            //code written after 'use' will get executed after a test is run fully
            await use(page)

            if(testInfo.status != testInfo.expectedStatus)
            {
                //providing the path to the place where we want to store the screenshot
                const screenshotPath = await page.screenshot({path:`screenshots/${testInfo.title}_${Date.now()}.png`})
                await testInfo.attach('screenshot',{body:screenshotPath,contentType:"image/png"})
            }
        },

        //fixture to load the JSON file to test
        CoursePageJSON: async({page}, use)=>
        {
            console.log("Starting to read Create course JSON file")

            const data = readJSON("./testdata/newCourse.json")

            await use(data)

        },

        //fixture to load the csv file to test
        CourseCSV:async({page},use) =>
        {
            console.log("Running Course Creation Fixture Before Test using CSV file")

            const data = readCSV("./testdata/users.csv")

            await use(data)

        }
        

})

export const expect = test.expect;