
/*
A locator is a way of identifying an element on a web page so that it can be interacted with. 

There are several different types of locators that can be used, including:

- **ID:** This locator type uses the unique ID attribute of an element to locate it on the page.
- **Name:** This locator type uses the name attribute of an element to locate it on the page.
- **Class name:** This locator type uses the class attribute of an element to locate it on the page.
- **Tag name:** This locator type uses the HTML tag name of an element to locate it on the page.
- **Custom Attribute** - data-qa, data-testid, data-id, `data-testid="to-testID-origin"` 
- **CSS selector**: This locator type uses a CSS selector to locate an element on the page.
- **XPath:** This locator type uses an XPath expression to locate an element on the page.
- When writing test scripts with Selenium, you can use a combination of these locator types to accurately and reliably locate elements on the page. 




**Preference rule**

ID -> NAME -> CLASS -> TAG NAME -> CSS -> XPATH



**Playwright** 

getByX -> ID -> NAME -> CLASS -> TAG NAME -> CSS -> XPATH



--------------------------------------
**What is the reason why people create a Custom attribute for QA ?**

there are many times when developers do not write the id, name, and any unique thing in a locator. Then how will we be able to locate that element? **_QAs actually have to locate the element, interact with it so that they can write an automation_**. That's why it is important that people also add a custom attribute to help the qa perform the automation.



**Custom Attribute** - data-qa, data-testid, data-id, `data-testid="to-testID-origin"` 

------------------------------------------

## Locator Strategy
Three important things about locators:

**Lazy** -> When you create a locator, Playwright does NOT search for the element immediately. It only searches when you actually DO something with it -> click, fill, read text. This means you can create locators at the top of your test and use them later, even if the element doesn't exist yet.

**Strict** -> If a locator matches MORE than one element, Playwright throws an error. This prevents you from accidentally clicking the wrong button. If you need to work with multiple elements, use `nth()`, `first()`, or `last()`.

**Auto-Wait** -> When you call `locator.click()`, **Playwright automatically waits for the element to be visible, enabled, and stable before clicking**. No need for manual `sleep()` or `waitFor()` in most cases.



100% Advance Playwright Framework

- Playwright -> 80% ( getbYRole. getByid) 
- Default - 20 %- XPath/ Css Selector  page.locator()


*/


import { test, expect} from '@playwright/test'

test('tc#1 - Verify that the vwo page is laoded', async({page})=>{

    await page.goto("https://app.vwo.com",{
        waitUntil: 'domcontentloaded',
        timeout:3000,
        referer:"https://sdet.live"
    });

     // Defalt Locators
    //  id, name, className, Tag., Custom Locator (Via CSS selector)

    // Css Seclector ->  Browser - Css Engine, Help you to find the element
    // by using the default locators
    // id => #id
    // className => .
    // name => [name="value"]
    // Tag => [tag]

     // <input 
    // type="email" 
    // class="text-input W(100%)" 
    // name="username" 
    // vwo-html-translate-attr="placeholder" 
    // vwo-html-translate-placeholder="login:enterEmailID" 
    // id="login-username" 
    // data-qa="hocewoqisi" 
    // placeholder="Enter email ID" 
    // data-gtm-form-interact-field-id="0"
    // >

    let userNameField = page.locator("#login-username");
    let passwordField = page.locator("#login-password");
    let loginButton = page.locator("#js-login-btn");
    
    await userNameField.fill("admin@admin.com");
    await passwordField.fill("pass123");
    await loginButton.click();

    let error_message = page.locator('#js-notification-box-msg');

    await expect(error_message).toContainText("Your email, password, IP address or location did not match");

    await page.pause();



});