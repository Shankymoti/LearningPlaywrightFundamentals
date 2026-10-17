import {test, expect} from '@playwright/test'


test.describe("Expect Assertion1",()=>{
    test.beforeEach(async({page})=>{
        //await page.goto("")

    })
    test('expect Assert', async({page})=>{
        expect(1+2).toBe(3);
        let ac = false;
        expect(ac).toBeFalsy();
        expect(true).toBeTruthy();
        expect(null).toBeNull();
        expect(50).toBeGreaterThan(10);
        expect([1,2,3]).toEqual([1,2,3]);
        expect({role: 'admin'}).toEqual({role:'admin'});
        expect({age:29, role:'admin'}).toEqual({role:'admin', age:29});

    })
})