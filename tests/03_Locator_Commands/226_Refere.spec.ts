/*
## page.goto()
- you need to OPEN a page. `page.goto(url)` is how every Playwright test begins.
- await - return the promise.
- **waitUntil**
    - The `waitUntil`  option tells Playwright at which stage it should consider the page "loaded" and move to the next line of your test.
        - **There are 4 options, from fastest to slowest:**
            - `commit`  — the server has responded. HTML may not even be parsed yet. Use this for testing redirects or checking HTTP status codes.
            - `domcontentloaded`  — the HTML is fully parsed and the DOM tree is built. CSS, images, and fonts may still be loading. Use when you need elements in the DOM but don't care about visuals.
            - `load`  — everything is loaded including images, CSS, fonts, and scripts. This is the DEFAULT. Use for most tests.
            - `networkidle`  — no network requests for 500ms. The page is completely quiet. Use for SPAs (React, Angular, Vue) that fetch data via API calls AFTER the initial HTML loads.



---

**commit** = "the server said yes, move on". Fastest. Use when you only need the URL or status, not the content.

**domcontentloaded** = "HTML is ready". Use for fast tests where you interact with text and buttons, not images.

**load** = "everything on the page finished". The default, safe.

**networkidle** = "the page stopped talking to the network". Slowest and flaky.

---

### Referer Concept
The HTTP `Referer` header tells the server which page the user came FROM. When you click a link on Google that takes you to a website, the browser sends `Referer: https://google.com` in the request. The server knows the user came from Google.



*/
import {test, expect} from'@playwright/test'

test('set referer for entire context"',async({browser})=>{

    let context = await browser.newContext({
        extraHTTPHeaders : {
            "Referer": "https://thetestingacademy.com"
        }
    })

    let page = await context.newPage();
    await page.goto("https://app.vwo.com/#login");
    console.log("Page 1 — partner referer included");
    await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
    console.log("Page 2 — partner referer included");
})