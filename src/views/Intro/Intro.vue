<template>
    <div class="intro">
        <img
            alt="Vue logo"
            src="../../assets/logo.png"
        >
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
    name: 'Intro',
    components: {
        HelloWorld
    }
}
</script>

<style scoped lang="scss" src="./styles/Intro.scss"></style>
