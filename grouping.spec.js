import {test , expect} from '@playwright/test'

test.describe('group1',()=>{
    test('Test1', async({page})=>{
        console.log('test1')
    
    })
    
    
    test('Test2', async({page})=>{
        console.log('test2')
    
    })

})
test.describe('group2',()=>{
    test('Test3', async({page})=>{
        console.log('test3')
    
    })
    
    
    test('Test4', async({page})=>{
        console.log('test4')
    
    })

})





















