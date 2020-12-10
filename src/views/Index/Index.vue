<template>
    <div class="index">
        <p>This is Index Page</p>
    </div>
</template>

<script>
export default {
    name: 'Index',
    created () {
        this.test()
    },
    methods: {
        async test () {
            try {
                console.log('start test for async in IE11 / Google Chrome')
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped lang="scss" src="./styles/Index.scss"></style>
