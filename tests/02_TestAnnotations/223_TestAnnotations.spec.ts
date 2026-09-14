import {test, expect} from '@playwright/test'

test.skip('checkout with PayPal', async({page})=>{
      // never executes
})

test.only('login as SHASHANK', async({page})=>{
   // only this test runs, everything else in the file is ignored
    // expect(90).toBe(100);   // actually returns 90
    // expect('shashank').toEqual("SHASHANK")
})

test.fail('art total is wrong, BUG-451', async({page})=>{
    expect(90).toBe(100);   // actually returns 90
    expect('shashank').toEqual("SHASHANK")
    // fails the test, but the test runner will not mark it as a failure because we are expecting it to fail and it will be always
})  

test.fixme('upload 2GB file', async({page})=>{
      // skipped, but flagged as "needs fixing"
})

test('full regression report', async () => {
  test.slow();
  console.log(test.info().timeout);   // 90000 instead of 30000
});

test('mobile layout', async ({ page, browserName }) => {
  test.fixme(browserName === 'webkit', 'Safari renders menu wrong');
  await page.goto("https://sdet.live");
});
