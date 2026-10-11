import {test, expect} from '@playwright/test';

const simpleMap = "https://simplemaps.com/svg/country/in"
test.describe('SVG handling',()=>{
 test.beforeEach(async({page})=>{
    await page.goto(simpleMap);

 })

 test("locate SVG root and assert visible", async({page})=>{
  const states = await  page.locator("//div[@id='admin1_map_inner']//*[name()='svg']//*[name()='path' and contains(@class,'sm_state')]").all();

  for(let state of states){
    const classState = await state.getAttribute('class');
    console.log(classState);
    if(classState?.includes('INTR')){
        await state.click()
    }
  }

  await page.pause();
 })
})