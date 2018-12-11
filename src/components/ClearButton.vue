<template>
    <a class="waves-effect waves-light btn" v-on:click="handleClick">Clear</a>
</template>

<script>
export default {
    name: 'ClearButton',
    methods: {
        handleClick: function() {
            this.$emit('ClearButtonClick')
        }
    }
}
</script>

<style scoped>
a {
    display: block;
    margin: auto;
    width: 100px;
}
</style>


