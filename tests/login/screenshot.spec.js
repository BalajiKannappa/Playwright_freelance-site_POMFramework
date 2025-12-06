import{test,expect} from "../../fixtures/auth.fixture.js"

test("Screenshot test",async function({page})
{

    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.waitForTimeout(3000)

    await page.locator("@id='email'").click()

    

})