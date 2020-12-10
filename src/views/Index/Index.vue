<template>
    <div class="index">
        <p>This is Index Page</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
    lyricsAPIs
} from '../../utils/apis'

export default Vue.extend({
    name: 'Index',
    created () {
        this.test()
    },
    methods: {
        async test () {
            try {
                // This is for demo use.
                const res = await lyricsAPIs.getASongLyric({
                    artist: 'adele',
                    title: 'hello'
                })
                console.log('res', res)
            } catch (err) {
                console.log(err)
            }
        }
    }
})
</script>

<style scoped lang="scss" src="./styles/Index.scss"></style>
