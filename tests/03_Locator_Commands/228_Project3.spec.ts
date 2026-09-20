/*

## What is XPATH?
- XPath is a query language for **selecting nodes** from an **XML/HTML document.**
- XPath was defined by the **World Wide Web Consortium.**
-  XPath is supported by all **modern browsers.**


Core Logic - /tagName[@attribute='value']

//  - In this document (HTML) 

**TAG** - h1, p, input, a, form, img, video, audio,button, table, ul, li, tr, div, select, span, -> Html Tags

**Attribute** - id, class, name, alt, href, src, data-qa, ….srcset ..





 There are two types of XPath which are very popular. 

- Absolute XPath
- **Relative XPath**


**Absolute XPath -** xPath is an expression which basically contains details from **the root element** 

 **the problem with the absolute** XPath is if any element changes, the XPath basically breaks. So generally people don't use it 

 **PS. : We generally do not use absolute.** 

/html/body/header/div/a





##### Relative Xpath
You can simply start by referencing the element you want and go from there

Core Logic - //tagName[@attribute='value']**

//a[@id="btn-make-appointment"]
//*[@id="btn-make-appointment"] - slow


app.wingify.com/#/login

1. //input[@id="login-username"] - 1
2. //*[@placeholder="Enter email ID"] - Slow( * is find all) 
3. //input[@data-qa="hocewoqisi"] - 1
4.//input[@name="username"] - not uniuqe 4/4 -> get(0), first()
5.//input[@placeholder="Enter email ID"] - 4/4 -> get(0)
6.//input[@type="email"] - not uniuqe 4/4
7.//input[@class="text-input W(100%)"] - Low

**XPATH to CSS selector**

    //input[@data-qa="hocewoqisi"] ->  remove the // and @ -> input[data-qa="hocewoqisi"]


    # **XPATH Functions**
-  _XPath F(n) -> they are majorly used for the dynamic elements_  
- Function says that there are certain functions you can also use, which I am going to give you 
    - **Contains(). //tag_name[**contains**(@attribute,'value_of_attribute')]
    - **Starts-with()  //tag_name[**starts-with**(@attribute,'Part_of_Attribute_value')]
    - **Text(). //tag_name[text()='Text of the element']


import { test, expect} from '@playwright/test';
test("Verfiy the error message in the wingify free trial", async({ page})=>{

    await page.goto("https://wingify.com/free-trial/");
    let inputBox = page.locator("//input[@id='free-trial-step1-email']");
    await inputBox.fill("abccd");
    await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox").click();
    await page.locator("[data-qa='free-trial-step1-gdpr-consent-checkboxgdpr-consent-checkbox']").click();
    let error_message = page.locator("//div[contains(@class,'invalid-reason')]").first();
    await page.locator("//button[@data-qa='page-su-submit']").first().click();

    let error_message_text = await error_message.textContent();
    expect(error_message_text).toContain("The email address you entered is incorrect.");
    await page.pause();


});



**String functions**

**concat**(string, ...): XPath concat function concatenated number of arguments and return to a concatenated string.

**starts-with**(string, string): XPath start-with function return True/False. Return True if second argument string is start with first argument.

**contains**(string, string) - XPath contains function return True/False. Return True if second argument string is a contain of first argument.

string-length(string): XPath string-length function return the length of string.

**substring-after**(string, string): XPath substring-after function return the substring of the first argument string base on first occurrence of the second argument string after all character.

**substring-before**(string, string): XPath substring-before function return the substring of the first argument string base on first occurrence of the second argument string before all character.

**normalize-space**(string): XPath normalize-space function sequence of whitespace combine into single normalize space and removing leading and trailing whitespace.

```

```
//a[contains(@id,"btn-make")] - Partial Match
//a[text()="Make Appointment"]
//a[contains(text(),"Make Appointment")]
//a[text()="Make Appointment" or @id="btn-make-appointment"] - 100 Either True
//a[starts-with(@id,"btn")]
//a[ends-with(@id,"btn")]



[atalon-demo-cura.herokuapp.com/](https://katalon-demo-cura.herokuapp.com/) 

CheatSheet - [devhints.io/xpath](https://devhints.io/xpath) 

# XPATH Axes
 if we can find one element with another element by using the relation 



*/ 



import { test, expect} from '@playwright/test';

test("Verfiy the error message in the wingify free trial", async({ page})=>{


    await page.goto("https://wingify.com/free-trial/");
    let inputBox = page.locator("//input[@id='free-trial-step1-email']");
    await inputBox.fill("abccd");

    await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox").click();
    await page.locator("[data-qa='free-trial-step1-gdpr-consent-checkboxgdpr-consent-checkbox']").click();

    let error_message = page.locator("//div[contains(@class,'invalid-reason')]").first();
    await page.locator("//button[@data-qa='page-su-submit']").first().click();



    let error_message_text = await error_message.textContent();

    expect(error_message_text).toContain("The email address you entered is incorrect.");

    await page.pause();




});