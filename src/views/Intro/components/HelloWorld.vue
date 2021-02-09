<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p v-html="headline"></p>
        <h3>{{ $t("intro.titles.links") }}</h3>
        <ul>
            <li v-for="(link, index) in essentialLinks" :key="index">
                <a :href="link.url" target="_blank" rel="noopener">{{ link.caption }}</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
    TranslateResult
} from 'vue-i18n'
import {
    mapGetters
} from 'vuex'
import {
    Link
} from '../declarations/HelloWorld'

export default Vue.extend({
    name: 'HelloWorld',
    data () {
        return {
            headline: this.$t('intro.headline') as TranslateResult,
            essentialLinks: (this.$t('intro.essentialLinks') as unknown) as Link[]
        }
    },
    props: {
        msg: String
    },
    computed: {
        ...mapGetters(['selectedLanguage'])
    },
    watch: {
        selectedLanguage: function () {
            this.headline = this.$t('intro.headline')
            this.essentialLinks = (this.$t('intro.essentialLinks') as unknown) as Link[]
        }
    }
})
</script>

<style scoped lang="scss" src="../styles/HelloWorld.scss"></style>
