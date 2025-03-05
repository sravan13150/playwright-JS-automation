import {test , expect} from '@playwright/test'

let page
test.beforeEach(async ({browser})=>{
    page = await browser.newPage()
    //repeated code

})


test.afterEach(async()=>{
    // already browser defined in beforeEach so no need to define here

})

test('hooks', async({page})=> {

    
    

})

























