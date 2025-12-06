import {expect} from "@playwright/test"
import {test} from "../../fixtures/auth.fixture.js"
import {CoursePage} from "../../pages/CoursePage.js"
import {HomePage} from "../../pages/HomePage.js"

test("Create a new course and verify it is displayed successfully", async function({page, loginpageJSON,CoursePageJSON})
{
    
    //***CREATE A HOOK TO CREATE THE PAGES, BEFORE EVERY TEST IS RUN 
    // ( BEFORE EACH HOOK)***

    //test.setTimeout(120000)
    let homepage = new HomePage(page)
    let coursepage = new CoursePage(page)
    let courseName

    await homepage.clickManageMenuButton()
    await homepage.clickManageCourses()

    await page.waitForTimeout(5000)

    await coursepage.addNewCourse()

    await page.waitForTimeout(2000)

    //filling up all the values in new course papge
    await coursepage.chooseThumbnailImage("./testdata/sample.png")

    courseName = CoursePageJSON.courseName+Math.floor(Math.random()*10000)
    await coursepage.enterCourseName(courseName)

    await coursepage.enterCourseDescription(CoursePageJSON.description)

    await coursepage.enterInstructorName(CoursePageJSON.instructor)

    await coursepage.enterPrice(CoursePageJSON.price)

    await coursepage.selectCategory(CoursePageJSON.categoryName)

    await coursepage.clickSaveButton()

    //await page.waitForLoadState('networkidle')
    //await page.waitForTimeout(3000)

    console.log(`course name: ${courseName}`)

    await coursepage.waitForCourseToAppear(courseName)

    
    //console.log("Function locator xpath:" + await coursepage.verifyCourseIsVisible(courseName))
   
    //1. verify that newly created course is visible in the course page or not
    expect(await coursepage.verifyCourseIsVisible(courseName)).toBeVisible()

    //2. Verify that newly course is deleted
    expect(await coursepage.deleteCourse(courseName))

    page.waitForSelector  

})

