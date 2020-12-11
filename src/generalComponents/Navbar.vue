<template>
    <v-toolbar
        class="navbarArea"
        color="cyan"
        dark
        flat
    >
        <v-app-bar-nav-icon
            @click="triggerLeftNavigation(!leftNavigationStatus)"
        />

        <v-toolbar-title>Vue+TypeScript+Integration</v-toolbar-title>

        <v-spacer />

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
            <v-tabs
                v-model="tab"
                :hide-slider="true"
                align-with-title
            >
                <v-tab
                    v-for="item in items"
                    :key="item.name"
                    :to="item.path"
                >
                    {{ item.name }}
                </v-tab>
            </v-tabs>
        </template>
    </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
import {
    mapGetters, mapActions
} from 'vuex'

export default Vue.extend({
    name: 'Navbar',
    data: () => ({
        tab: 0,
        items: [
            {
                name: 'Intro',
                path: '/intro'
            },
            {
                name: 'About',
                path: '/about'
            },
            {
                name: 'Board',
                path: '/board'
            }
        ]
    }),

    computed: {
        ...mapGetters(['leftNavigationStatus'])
    },

    methods: {
        ...mapActions(['triggerLeftNavigation'])
    }
})
</script>

<style scoped lang="scss" src="./styles/Navbar.scss"></style>
