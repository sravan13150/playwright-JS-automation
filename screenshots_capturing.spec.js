import {test , expect} from '@playwright/test'

test('page screenshot',async ({page})=>{
    await page.goto()
    await page.screenshot({path:'relative path'+Date.now()+'screenshot.png'})//saves under this folder and only landing view is captured


})

test('fullpage screenshot',async ({page})=>{
    await page.goto()
    await page.screenshot({path:'relative path'+Date.now()+'screenshot.png',fullPage:true})//saves under this folder and only full view including headers and footers is captured
    

})


test('fullpage screenshot',async ({page})=>{
    await page.goto()
    await page.locator('element location').screenshot({path:'relative path'+Date.now()+'screenshot.png'})//only particular element
    

})
//to capture screenshot for every test make screenshot on in playwright.config.js 

















