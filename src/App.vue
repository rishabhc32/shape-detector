<template>
    <div id="app">
        <Title v-bind:title="title" />
        <Description/>
        <Canvas/>
    </div>
</template>

<script>

import Title from './components/Title.vue'
import Description from './components/Description.vue'
import Canvas from './components/Canvas.vue'

export default {
    name: 'app',
    components: {
        Title,
        Description,
        Canvas
    },
    data: () => {
        return {
            title: "Shape Detector"
        }
    }
}
</script>

<style scoped>
</style>

