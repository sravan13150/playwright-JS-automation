import {test , expect} from '@playwright/test'

test('datepicker ', async({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.fill('#datepicker','06/09/2024')
    // await page.waitForTimeout(3000)
    const year ='2025'
    const month = 'July'
    const Date = '10'

    while(true){
        await page.click('#datepicker')
        const currentYear = await page.locator('.ui-datepicker-year').textContent()
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
        if (currentYear == year && currentMonth == month){
            break
        }
        await page.locator('[title = "Next"]').click()

    }
    const dates = await page.$$("//a[@class='ui-state-default']")
    for (const date of dates ){
        if(await date.textContent()==Date){
            await date.click()
            break
        }

    }

    await page.waitForTimeout(5000)




   




})























