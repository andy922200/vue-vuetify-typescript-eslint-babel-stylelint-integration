<template>
    <div id="app">
        <v-app id="vuefify-app">
            <v-container fluid>
                <div class="app__wrapper">
                    <Navbar />
                    <Navigation />
                    <router-view />
                </div>
            </v-container>
        </v-app>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './generalComponents/Navbar.vue'
import Navigation from './generalComponents/Navigation.vue'
import {
    mapGetters, mapMutations
} from 'vuex'

export default Vue.extend({
    name: 'App',
    components: {
        Navbar,
        Navigation
    },
    created () {
        this.setWindowWidth(window.innerWidth)
        window.addEventListener('resize', this.activateWidthTrigger)
    },

    destroyed () {
        window.removeEventListener('resize', this.activateWidthTrigger)
    },

    computed: {
        ...mapGetters(['today', 'leftNavigationStatus', 'windowWidth', 'selectedLanguage'])
    },

    methods: {
        ...mapMutations(['setWindowWidth']),

        activateWidthTrigger () {
            this.setWindowWidth(window.innerWidth)
        }
    }
})
</script>

<style lang="scss" src="./styles/App.scss"></style>
