import {
    shallowMount
} from '@vue/test-utils'
import {
    axios, mockAxios
} from '../../../utils/declarations/apis.mock'
import Index from '../Index.vue'

describe('Index.vue', () => {
    const wrapper = shallowMount(Index)
    const requestData = {
        artist: 'adele',
        title: 'hello'
    }
    mockAxios.onGet(`${requestData.artist}/${requestData.title}`).reply(200, {
        lyric: 'aaa'
    })

    it('Demo Message', () => {
        expect(wrapper.text()).toMatch('This is Index Page')
    })

    it('fetch lyric data api', async () => {
        const res = await axios.get(`${requestData.artist}/${requestData.title}`)
        expect(res).toBeDefined()
        wrapper.setData({
            lyric: res.data.lyric
        })
        expect(wrapper.vm.$data.lyric).not.toHaveLength(0)
    })
})
