import {
    Selector
} from 'testcafe'

fixture('Index.vue').page('http://localhost:8080')

test('Index Page contains "This is Index Page"', async testController => {
    const paragraphSelector = Selector('.index > p')

    await testController.expect(paragraphSelector.innerText).eql('This is Index Page')
})
