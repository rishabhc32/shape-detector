<template>
    <div class="row">
        <div class="col s12">
            <canvas id="fabric-canvas" width="300" height="300"></canvas>
            <range-slider 
            v-bind:sliderStyle="sliderStyle"
            v-on:sliderInput="setSliderValue" >
            </range-slider>
            <clear-button v-on:ClearButtonClick="clearCanvas" />
        </div>
    </div>
</template>

<script>
import RangeSlider from './RangeSlider'
import ClearButton from './ClearButton'

export default {
    name: 'Canvas',
    components: {
        RangeSlider,
        ClearButton
    },
    data: function() {
        return {
            fabricCanvas: null,
            sliderStyle: {
                width: '300px',
                margin: 'auto',
            }
        }
    },
    mounted: function() {
        this.fabricCanvas = new fabric.Canvas('fabric-canvas', {isDrawingMode: true})
        this.fabricCanvas.freeDrawingBrush.color = 'blue'
    },
    methods: {
        setSliderValue: function(currentBrushWidth) {
            if(currentBrushWidth !== this.fabricCanvas.freeDrawingBrush.width)
                this.fabricCanvas.freeDrawingBrush.width = currentBrushWidth
        },
        clearCanvas: function() {
            this.fabricCanvas.clear()
        }
    }
}
</script>

<style>
.canvas-container { 
    margin:0 auto ;
}
canvas {
    border: 2px solid #26a69a;
}
</style>
