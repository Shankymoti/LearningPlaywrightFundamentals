import {chromium} from 'playwright';
import dotenv from 'dotenv';

dotenv.config()

const userEmail :string | undefined = process.env.ZSN_USER;
const userPassword = process.env.ZSN_PASS;
async function saveSession() {
    let browser = await chromium.launch({headless : false});
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://dewdrops.zycus.com/zsp/guest")
    await page.locator('.au--login--emailAddress').fill(userEmail || '');
    await page.fill('.au--login--password',userPassword || "");
    await page.locator('.au--login--loginButton').click();
   // await page.waitForURL('#\/(dashboard)/',{timeout:15000});
  await page.waitForTimeout(15000);


    await context.storageState({path: './user-session.json'});

    console.log("Session saved to user-session.json ✅");

    await browser.close();

}

saveSession()