import {test , expect} from '@playwright/test'

test('double click ', async({page})=> {
    await page.goto("https://demo.opencart.com/")
    const button = await page.locator('')
    await button.dblclick()




   




})























