import {test , expect} from '@playwright/test'

test('uploading single file', async({page})=> {

    await page.goto('https://www.foundit.in/') 

    await page.waitForSelector('element')
    await page.locator(element).click()
    await page.locator('element').setInputFiles('create a folder uploadFiles and keep the relative path here')
    

})

test('multiple file', async({page})=> {

    await page.goto('https://www.foundit.in/') 

    await page.waitForSelector('element')
    await page.locator(element).click()
    await page.locator('element').setInputFiles(['firstfilepath', 'secondfilepath'])
    

})























