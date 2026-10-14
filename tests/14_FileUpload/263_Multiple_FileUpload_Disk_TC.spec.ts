import {test, expect} from '@playwright/test'
import path from 'path'
const URL = 'https://www.patternfly.org/components/file-upload/multiple-file-upload/';
test.describe('FileUpload handling', ()=>{
    test.beforeEach(async({page})=>{
        await page.goto(URL);
    })

    test('upload multiple files from disk', async({page})=>{
        const file1 = path.join(__dirname, "file1.jpg");
        const file2 = path.join(__dirname, "file2.jpg");

        await page.locator(".pf-v6-c-multiple-file-upload input").setInputFiles(
            [file1,file2]
        )

        await page.pause();
    })
})