
class DashboardPage{

#menu
#signOut
#welcomeMessage

constructor(page){

    this.page = page
    this.#menu = page.locator("//img[@alt='menu']")
    this.#signOut = page.locator("//button[normalize-space()='Sign out']")
    this.#welcomeMessage = page.locator(".welcomeMessage")

}

async validateWelecomeMessage(){

    const message = await this.#welcomeMessage.textContent()
    return message

}

async signout()
{
    await this.#menu.click()
    await this.#signOut.click()
        
}




}

export {DashboardPage}