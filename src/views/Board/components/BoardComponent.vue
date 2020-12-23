<template>
    <div>
        <p>This is Board Component page</p>
        <p>{{userName}}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import {
    People
} from '../declarations/Board'

export default Vue.extend({
    name: 'BoardComponent',
    data () {
        return {
            user: [] as People []
        }
    },
    computed: {
        userName () {
            return this.$data.user[0] ? this.$data.user[0].gender : undefined
        }
    },
    async created () {
        const { data: { results } } = await axios.get('https://randomuser.me/api/')
        this.user.push(results[0])
    }
})
</script>

<style scope lang="scss" src="../styles/BoardComponent.scss"></style>
