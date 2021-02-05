import Vue from 'vue'
import Vuex from 'vuex'

// partial import from dayjs
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

// import customized Modules
import authenticationModule from './modules/authentication'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        today: dayjs(),
        leftNavigationStatus: false,
        windowWidth: 0
    },
    getters: {
        today: state => state.today,
        leftNavigationStatus: state => state.leftNavigationStatus,
        windowWidth: state => state.windowWidth
    },
    mutations: {
        setToday (state, time: string) {
            state.today = dayjs(time)
        },
        setLeftNavigationStatus (state, status: boolean) {
            state.leftNavigationStatus = status
        },
        setWindowWidth (state, value: number) {
            state.windowWidth = value
        }
    },
    actions: {
        triggerLeftNavigation ({ commit }, status: boolean) {
            status
                ? commit('setLeftNavigationStatus', true)
                : commit('setLeftNavigationStatus', false)
        }
    },
    modules: {
        authenticationModule
    }
})
