import {
    Selector
} from 'testcafe'

fixture('Board.vue').page('http://localhost:8080/board')

test('Board Page contains Person Gender', async testController => {
    const clickLink = Selector('.board > a')
    const target = Selector('.board div p:nth-child(2)')
    await testController.click(clickLink)
    await testController.expect(target.innerText).match(/male|female/)
})
