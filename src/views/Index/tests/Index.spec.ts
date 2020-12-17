import {
    shallowMount
} from '@vue/test-utils'
import Index from '../Index.vue'

describe('Index.vue', () => {
    test('Demo Message', () => {
        const wrapper = shallowMount(Index)
        expect(wrapper.text()).toMatch('This is Index Page')
    })
})
