import {test , expect} from '@playwright/test'

test('auto dropdown suggestion', async({page})=> {
    await page.goto('https://www.redbus.in')
    await page.locator('#src').fill('delhi')
    await page.waitForTimeout(5000)
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
    const options = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
    for( let option of options)
    {
        const value = await option.textContent()
        console.log(value)
    }

})












