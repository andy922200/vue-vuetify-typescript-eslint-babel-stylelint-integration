<template>
    <div class="navigation">
        <div class="clearfix" />
        <v-navigation-drawer
            v-model="leftNavigationModel"
            left
            absolute
            temporary
            @input="detectNavigationState"
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item :to="{name:'Intro'}">
                        <v-list-item-title>Intro</v-list-item-title>
                    </v-list-item>

                    <v-list-item :to="{name:'About'}">
                        <v-list-item-title>About</v-list-item-title>
                    </v-list-item>

                    <v-list-item :to="{name:'Board'}">
                        <v-list-item-title>Board</v-list-item-title>
                    </v-list-item>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
    mapGetters, mapActions
} from 'vuex'

export default Vue.extend({
    name: 'Navigation',
    computed: {
        ...mapGetters({
            leftNavigationModel: 'leftNavigationStatus'
        }),
        leftNavigationModel: {
            get () {
                return this.$store.getters.leftNavigationStatus
            },
            set () {
                this.leftNavigationModel
                    ? this.triggerLeftNavigation(true)
                    : this.triggerLeftNavigation(false)
            }
        }
    },

    methods: {
        ...mapActions(['triggerLeftNavigation']),

        detectNavigationState (status: boolean) {
            if (!status) {
                this.triggerLeftNavigation(false)
            }
        }
    }
})
</script>

<style scoped lang="scss" src="./styles/Navigation.scss"></style>
