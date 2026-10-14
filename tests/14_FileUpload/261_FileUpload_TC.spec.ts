import {test, expect} from '@playwright/test'
import path from 'path';
const URL = 'https://app.thetestingacademy.com/playwright/widgets/upload-download'; // replace with target page

test.describe("FileUpload handling",()=>{
    test.beforeEach(async({page})=>{
        await page.goto(URL);

    })

    test("locate FileUpload and uploa", async({page})=>{

        const filePath = path.join(__dirname,"testdata.txt");
           console.log(filePath);
      // __dirname - Current working directory full path 
        await page.locator("#single-upload").setInputFiles([filePath]);
        await page.pause()

    })
})