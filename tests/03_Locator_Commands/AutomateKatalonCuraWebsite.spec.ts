import {test, expect} from '@playwright/test';

test('Automate Katalon Cura Website', async({page})=>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.getByRole('link',{name: "Make Appointment"}).click();
    const userId = await page.getByPlaceholder('Username').first().inputValue();
    console.log("userid is",userId);
    const password = await page.getByPlaceholder('Password').first().inputValue();
    console.log("password is ", password);

    await page.getByPlaceholder('Username').last().fill(userId);
    await page.getByPlaceholder('Password').last().fill(password);

    await page.getByRole('button',{name: 'Login'}).click();

    await expect(page.getByRole('heading', {name:'Make Appointment'})).toHaveText('Make Appointment');



})