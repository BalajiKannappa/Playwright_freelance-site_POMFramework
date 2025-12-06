import {BasePage} from "../pages/BasePage.js"

class CategoryPage extends BasePage
{
    #addNewCategoryButton

    constructor(page)
    {
        super(page)
        this.#addNewCategoryButton = page.locator("//button[normalize-space()='Add New Category']")





    }


    //methods
    async clickAddNewCategory()
    {
        await this.#addNewCategoryButton.click()
    }

    async verifyNewCategory()
    {

    }

    async deleteCategory()
    {

    }


}

export {CategoryPage}