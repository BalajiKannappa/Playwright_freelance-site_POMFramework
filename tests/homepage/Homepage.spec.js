
import{expect} from "@playwright/test"
import {test} from "../../fixtures/auth.fixture.js"
import { HomePage } from "../../pages/HomePage.js"


test("Home page test for navigating to 'Manage courses' page", async function({page,loginpage}){

    let homepage = new HomePage(page)

    await homepage.clickManageMenuButton()

    await page.waitForLoadState('load')

    await homepage.clickManageCourses()

    await page.waitForTimeout(5000)


}),

test("Home page test for navigating to 'Manage Categories' page", async function({page,loginpage})
{
    let homepage = new HomePage(page)

    await homepage.clickManageMenuButton()

    //await page.waitForLoadState('load')

    await homepage.clickManageCategories()

    await page.waitForTimeout(3000)

}),

test("Home page test - for navigating welcome message",async function({page, loginpage}){

    let homepage = new HomePage(page)

    await page.waitForLoadState('load')

    expect(await homepage.validateWelecomeMessage()).toBe("Welcome Admin Manager to Learn Automation Courses")
    
    

})

