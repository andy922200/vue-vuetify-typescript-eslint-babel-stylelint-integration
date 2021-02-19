import {
    GetterTree, ActionTree, MutationTree
} from 'vuex'

import {
    RootState
} from '../declarations/index'

import {
    AuthenticationModule
} from '../declarations/authentication'

const state: AuthenticationModule.State = {
    user: undefined
}

const getters: GetterTree<AuthenticationModule.State, RootState> = {
    user: (state: AuthenticationModule.State) => state.user
}

const mutations: MutationTree<AuthenticationModule.State> = {
    setUser (state: AuthenticationModule.State, payload: AuthenticationModule.User) {
        state.user = payload
    }
}

const actions: ActionTree<AuthenticationModule.State, RootState> = {

}

const authenticationModule = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default authenticationModule
