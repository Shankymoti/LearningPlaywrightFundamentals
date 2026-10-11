import {test, expect, Locator} from '@playwright/test'

const URL = 'https://app.thetestingacademy.com/playwright/widgets/svg'; // replace with target page

test.describe('SVG handling',()=>{
    test.beforeEach(async({page})=>{
        await page.goto(URL);
    })

    test('locate SVG root and assert visible', async({page})=>{
        const blueCircle : Locator = page.locator("#circle-blue");
        await blueCircle.click();
        const outputText = page.locator("#shapes-output");
       await expect(outputText).toContainText("circle-blue");

        const output = await page.locator('#shapes-output').innerText();
        expect(output).toContain('Blue circle');



        await page.getByRole('button', {name : /Q3 bar — /}).click();
        await page.getByRole('radio',{name : "4 stars"}).click();

        let allBar : Locator[] = await page.locator("svg#chart-svg .bar").all();
        for(let bar of allBar){
            const q = await bar.getAttribute("data-quarter");
            console.log(q);
            const h = await bar.getAttribute("height");
            console.log(h);
        }
        await page.pause();
    })
})