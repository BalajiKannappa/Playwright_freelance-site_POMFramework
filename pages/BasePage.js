class BasePage{

    constructor(page)
    {
        this.page=page
    }

// TASK : Add more metho which will switch to new tab and then we can consume in all
//our tests



//page or browser methods that will be used across other pages

/**
     * Wait for element to be visible (using Locator)
     * @param {string} selector - CSS selector or XPath
     * @param {number} timeout - Timeout in milliseconds (default: 10000)
     * @returns {Locator} - Playwright Locator object
     */
    waitForElementVisible(selector, timeout = 10000) {
        // ✅ Return a Locator (modern way)
        return this.page.locator(selector).waitFor({ 
            state: 'visible', 
            timeout 
        })
    }

}
export {BasePage}