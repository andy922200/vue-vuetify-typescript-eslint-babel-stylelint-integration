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

// vue-i18n
import {
    Locales
} from '@/i18n/config/locales'
import {
    defaultLocale
} from '@/i18n/config'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        today: dayjs(),
        leftNavigationStatus: false,
        selectedLanguage: defaultLocale,
        windowWidth: 0
    },
    getters: {
        today: state => state.today,
        leftNavigationStatus: state => state.leftNavigationStatus,
        selectedLanguage: state => state.selectedLanguage,
        windowWidth: state => state.windowWidth
    },
    mutations: {
        setToday (state, time: string) {
            state.today = dayjs(time)
        },
        setLeftNavigationStatus (state, status: boolean) {
            state.leftNavigationStatus = status
        },
        setLanguage (state, payload: Locales) {
            state.selectedLanguage = payload
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
        },
        selectNewDefaultLanguage ({ getters, commit }, lang: Locales) {
            const { selectedLanguage }: { selectedLanguage: Locales } = getters
            if (lang !== selectedLanguage) {
                commit('setLanguage', lang)
            }
        }
    },
    modules: {
        authenticationModule
    }
})
