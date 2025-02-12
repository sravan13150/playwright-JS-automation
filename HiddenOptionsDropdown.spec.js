import {test , expect} from '@playwright/test'

test('dialog handler ', async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async dialog=>{

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('box')
        await dialog.accept()
        

    })
    await page.click("button[id='alertBtn']")
    await page.waitForTimeout(5000)




})

test('dialog handler', async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async dialog=>{

        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('box')
        await dialog.dismiss()
        

    })

    await page.click("button[id='confirmBtn']")
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed')
    await page.waitForTimeout(5000)

})





















