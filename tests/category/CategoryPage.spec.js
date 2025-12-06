
import { test, expect } from "../../fixtures/auth.fixture.js"
import { HomePage } from "../../pages/HomePage.js"
import { CategoryPage } from "../../pages/Categorypage.js";

//1. Postive test case to create a new category
test("Create new categoory test",async function({page, loginpageJSON, context})
{

    let homepage; 
    let categorypage;
    const categoryName = "Newtech"+"_"+(Math.floor(Math.random()*10000))
    Math.floor(Math.random()*10000)

    homepage = new HomePage(page)

    await homepage.clickManageMenuButton()

//promise.all and use context to wait for new tab

    const [newPage] = await Promise.all([

        context.waitForEvent('page'),

        homepage.clickManageCategories()
    
    ])

    await newPage.waitForLoadState('load')

    //homepage = new HomePage(newPage)

    categorypage = new CategoryPage(newPage)

   // handling dailog box 
    newPage.on('dialog', async (dailogListener) =>
    {
        await dailogListener.accept(`${categoryName}`)
    
    })

    categorypage.clickAddNewCategory()
    
    await page.waitForTimeout(3000)

    //verify the new category is displayed in the 'manage category' page or not
    let categoryContent = await newPage.locator(`//td[normalize-space()='${categoryName}']`).textContent()
    expect(categoryContent).toEqual(categoryName)

})

//2. verify that if duplicate category is NOT created with the same name