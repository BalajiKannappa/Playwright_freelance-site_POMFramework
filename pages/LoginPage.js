import { BasePage } from './BasePage.js';


class LoginPage extends BasePage
{

    #useridField
    #passwordField
    #signInButton
    #HomepageHeader

    constructor(page)
        {   
            super();
            this.page = page
            this.#useridField = page.locator("#email1")
            this.#passwordField = page.locator("#password1")
            this.#signInButton = page.locator("//button[normalize-space()='Sign in']")
            this.#HomepageHeader = page.locator("//h1[normalize-space()='Learn Automation Courses']")

        }

    // async logintoApplication(username, password){

    //     await this.#useridField.fill(username)
    //     await this.#passwordField.fill(password)
    //     await this.#siginButton.click()
    // }

    async goToUrl()
    {
        await this.page.goto("https://freelance-learn-automation.vercel.app/login")
    }

    async fillEmail(username)
    {
        await this.#useridField.fill(username)
    }

    async fillPassword(password)
    {
        await this.#passwordField.fill(password)
    }

    async signIn()
    {
        await this.#signInButton.click()
    }

 
    //  async isHomePageVisible()
    // {
    //     return this.#HomepageHeader
        
    // }
}

export {LoginPage}