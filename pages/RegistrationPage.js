
class RegistrationPage
{

    #signuplink
    #nameField
    #emailField
    #passwordField
    #interestsField
    #genderFemale
    #state
    #hoobies
    #signUpButton
        

    //contructor & locators
    constructor(page)
    {
        this.page = page
        this.#signuplink = page.locator("//a[normalize-space()='New user? Signup']")
        this.#nameField = page.locator("//input[@id='name']")
        this.#emailField = page.locator("//input[@id='email']")
        this.#passwordField = page.locator("//input[@id='password']")
        this.#interestsField = page.locator(" //label[normalize-space()='Python']")
        this.#genderFemale = page.locator("//input[@id='gender2']")
        this.#state = page.locator("//select[@id='state']")
        this.#hoobies = page.locator("//select[@id='hobbies']")
        this.#signUpButton = page.locator("//button[normalize-space()='Sign up']")

    }

    //methods


    async signUpUser()
    {
        await this.#signuplink.click()
    }
    
    async fillUserDetails(name,email,password,state, hobby)
    {
        await this.#nameField.fill(name)
        await this.#emailField.fill(email)
        await this.#passwordField.fill(password)
        await this.#interestsField.click()
        await this.#genderFemale.click()
        await this.#state.selectOption(state)
        await this.#hoobies.selectOption(hobby)

    }

    generateRandomEmail() 
    {
    let randomNumber = Math.random().toString(36).substring(2, 10)
    return `user_${randomNumber}@test.com`
    }

    
    async clickSignUpButton()
    {
        await this.#signUpButton.click()
    }



}

export {RegistrationPage}