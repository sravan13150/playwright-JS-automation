import {test , expect} from '@playwright/test'

test('DragAndDrop ', async({page})=> {
    
await page.goto("website url")
const source = await page.locator('source element')
const target = await page.locator('target element')
//approach1
await source.hover()
await page.mouse.down()
await target.hover()
await page.mouse.up()

//approach2
await page.dragAndDrop(source,target)





   




})























