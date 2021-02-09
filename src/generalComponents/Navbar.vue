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

        <div class="languageSelection">
            <v-select
                v-model="selectedLanguageModel"
                :items="LayoutLanguages"
                item-text="title"
                item-value="param"
                menu-props="auto"
                label="Select"
                prepend-icon="language"
                hide-details
                single-line
                dense
                solo
            ></v-select>
        </div>

        <v-spacer />

        <v-btn icon>
            <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>more_vert</v-icon>
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
import {
    LayoutLanguages
} from '@/i18n/config/locales'

export default Vue.extend({
    name: 'Navbar',
    data: () => ({
        LayoutLanguages,
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
        ...mapGetters(['leftNavigationStatus', 'selectedLanguage']),
        selectedLanguageModel: {
            get () {
                return this.$i18n.locale
            },
            set (value: string) {
                this.$i18n.locale = value
                this.selectNewDefaultLanguage(value)
            }
        }
    },

    methods: {
        ...mapActions(['selectNewDefaultLanguage', 'triggerLeftNavigation'])
    }
})
</script>

<style scoped lang="scss" src="./styles/Navbar.scss"></style>
