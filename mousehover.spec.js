import {test , expect} from '@playwright/test'

test('datepicker ', async({page})=> {
    await page.goto("https://demo.opencart.com/")
    const desktops = await page.locator('//a[normalize-space()="Desktops"]')
    const macbook = await page.locator('//a[normalize-space()="Mac (1)"]')
    await desktops.hover()
    await macbook.hover()
    await page.waitForTimeout(5000)




   




})























