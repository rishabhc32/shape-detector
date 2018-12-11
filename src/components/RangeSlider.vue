<template>
    <form v-on:input="trial">
    <p class="range-field" v-bind:style="sliderStyle">
        <input type="range" id="RangeSlider" value="0" min="0" max="100"  />
    </p>
    </form>
</template>

<script>
    export default {
        name: 'RangeSlider',
        props: ['sliderStyle'],
        data: function() {
            return {
                inputSlider: null
            }
        },
        mounted: function() {
            this.$nextTick(function () {
                let array_of_dom_elements = document.querySelectorAll("input[type=range]")
                M.Range.init(array_of_dom_elements);
            })
            
            this.inputSlider = this.$el[0] //set this.inputSlider to form's 'input' tag
        },
        methods: {
            trial: function() {
                this.$emit('sliderInput', this.inputSlider.value)
            }
        }
    }
</script>

<style scoped>
.range-label{
    background-color: black;
}
</style>

