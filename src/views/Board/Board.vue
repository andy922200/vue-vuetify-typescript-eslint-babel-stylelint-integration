<template>
    <div class="board">
        <p>This is Board page</p>
        <router-link :to="{ name: 'BoardComponent' }">
            BoardComponent
        </router-link>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'Board'
}
</script>

<style lang="scss" src="./styles/Board.scss"></style>
