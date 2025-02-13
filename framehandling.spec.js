import {test , expect} from '@playwright/test'

test('frame handling ', async({page})=> {
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const allframes = await page.frames()
    console.log(allframes.length)
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.fill("[name='mytext1']",'Hello')
   




})























