import { BasePage } from "./BasePage"

class CoursePage extends BasePage{

//declaring the private variables
#addNewCourseButton
#thumbnailInput
#courseNameInput
#descriptionInput
#instructorInput
#priceInput
#startDateInput
#endDateInput
#selectCategory
#categoryOptions
#saveButton

//constructor with locators
constructor(page)
    {
        super(page)
        this.page=page;
        this.#addNewCourseButton=page.locator("//button[normalize-space()='Add New Course']");
        this.#thumbnailInput=page.locator("//input[@id='thumbnail']");
        this.#courseNameInput=page.locator("//input[@id='name']");
        this.#descriptionInput=page.locator("//textarea[@id='description']");
        this.#instructorInput=page.locator("//input[@id='instructorNameId']");
        this.#priceInput=page.locator("//input[@id='price']");
        this.#startDateInput=page.locator("//input[@name='startDate']");
        this.#endDateInput=page.locator("//input[@name='endDate']");
        this.#selectCategory=page.locator("//div[normalize-space()='Select Category']");
        this.#saveButton=page.locator("//button[normalize-space()='Save']");
    }

//methods

//function to click 'Add New course' button
    async addNewCourse()
    {
        await this.#addNewCourseButton.click()
    }

    //function to upload a file 
    async chooseThumbnailImage(filePath)
    {
        await this.#thumbnailInput.setInputFiles(filePath)
    }

    //function to input course name
    async enterCourseName(courseName)
    {
        await this.#courseNameInput.fill(courseName)
    }

    //function to input couse description
    async enterCourseDescription(courseDescription)
    {
        await this.#descriptionInput.fill(courseDescription)
    }

    //function to input instructor name
    async enterInstructorName(instructorName)
    {
        await this.#instructorInput.fill(instructorName)
    }

    //function to input price
    async enterPrice(price)
    {
        await this.#priceInput.fill(price)
    }

        /*
    //function to start date
    async enterStartDate(startDate)
    {
        await this.#startDateInput.fill(startDate)
    }

    
    //function to start date
    async enterEndDate(endDate)
    {
        await this.#endDateInput.fill(endDate)
    }
        */

    //function to select category
    async selectCategory(category)
    {
        await this.#selectCategory.click()

        await this.page.waitForTimeout(2000)
        this.#categoryOptions = this.page.locator(`//button[normalize-space()='${category}']`)
        await this.#categoryOptions.click()
    
    }

    //function to click save button
    async clickSaveButton()
    {
        await this.#saveButton.click()
    }

     /*
    * expect function(in test) failed using the above method, if not used along with hard wait.
    * The reason is  - This function immedialtely returns the locator, without wiating for the element 
    * to become visible in the page.
    */
    async verifyCourseIsVisible(courseName)
    {
        return this.page.locator(`//td[normalize-space()='${courseName}']`)
        
    }

   
      /**
     * Wait for course to appear in the table after save
     * @param {string} courseName - Name of the course to wait for
     * @param {number} timeout - Timeout in milliseconds (default: 10000)
     */
    async waitForCourseToAppear(courseName, timeout = 10000) {
        // ✅ Create and wait for Locator
        const courseCell = this.page.locator(`//td[normalize-space()='${courseName}']`)
        await courseCell.waitFor({ state: 'visible', timeout })
    }


    //method to delete the course
   async deleteCourse(courseName) {
        // ✅ Create Locator and click (auto-waits)
        const deleteButton = this.page.locator(
            `//td[text()='${courseName}']/following-sibling::td//button[normalize-space()='Delete']`
        )
        await deleteButton.click()
    }

}

export {CoursePage}