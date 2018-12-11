<template>
    <a class="waves-effect waves-light btn" v-on:click="handleClick">{{buttonText}}</a>
</template>

<script>
export default {
    name: 'ClearButton',
    props: ['buttonText'],
    methods: {
        handleClick: function() {
            this.$emit('ButtonClick')
        }
    }
}
</script>

<style scoped>
a {
    width: 100px;
    display: inline-block;
}
</style>


