class HomePage
{

    //fields
    #manageMenu
    #manageCoursesLink
    #manageCategoriesLink
    #menuButton
    #signout
    #welcomeMessage

    //initializing the locators
    constructor(page)
    {
        this.page = page
        this.#manageMenu = page.locator("//span[normalize-space()='Manage']")
        this.#manageCoursesLink = page.locator("//a[normalize-space()='Manage Courses']")
        this.#manageCategoriesLink =page.locator("//a[normalize-space()='Manage Categories']")
        this.#menuButton = page.locator("//img[@alt='menu']")
        this.#signout = page.locator("//button[normalize-space()='Sign out']")
        this.#welcomeMessage = page.locator(".welcomeMessage")

    }

    //page methods

    async clickMenuButton(){
        //click the top menu button
        await this.#menuButton.click()

    }

    async clickManageMenuButton(){

        await this.#manageMenu.click()
    }
    async clickManageCategories(){
        //navigate to categories page
        await this.#manageCategoriesLink.click()
    }

    async clickManageCourses(){
        //navigate to courses page
        await this.#manageCoursesLink.click()

    }

    async signOut(){
        //sign out the logged-in user

    }
    async validateWelecomeMessage(){

    const message = await this.#welcomeMessage.textContent()
    return message

}

}

export {HomePage}