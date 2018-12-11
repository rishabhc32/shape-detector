<template>
    <div class="row">
        <div class="col s12">
            <canvas id="fabric-canvas" width="300" height="300"></canvas>
            <range-slider 
            v-bind:sliderStyle="sliderStyle"
            v-on:sliderInput="setSliderValue" >
            </range-slider>
            <div class="predict-clear-buttons">
                <custom-button v-on:ButtonClick="predictImage" buttonText="Predict" class="predict-button"/>
                <custom-button v-on:ButtonClick="clearCanvas" buttonText="Clear"/>
            </div>
        </div>
    </div>
</template>

<script>
import RangeSlider from './RangeSlider'
import CustomButton from './CustomButton'
import * as tf from '@tensorflow/tfjs'

export default {
    name: 'Canvas',
    components: {
        RangeSlider,
        CustomButton
    },
    data: function() {
        return {
            fabricCanvas: null,
            canvasContext: null,
            sliderStyle: {
                width: '300px',
                margin: 'auto',
            }
        }
    },
    mounted: function() {
        this.canvasContext = document.getElementById('fabric-canvas').getContext('2d')

        this.fabricCanvas = new fabric.Canvas('fabric-canvas', {isDrawingMode: true})
        this.fabricCanvas.backgroundColor = '#ffffff'
    },
    methods: {
        setSliderValue: function(currentBrushWidth) {
            if(currentBrushWidth !== this.fabricCanvas.freeDrawingBrush.width)
                this.fabricCanvas.freeDrawingBrush.width = currentBrushWidth
        },
        clearCanvas: function() {
            this.fabricCanvas.clear()
            this.fabricCanvas.backgroundColor = '#ffffff'
        },
        predictImage: function() {
            let image = this.canvasContext.getImageData(0, 0, this.fabricCanvas.getWidth(), this.fabricCanvas.getHeight())
            let pred = this.$model.predict(this.preprocessImage(image)).dataSync()

            let maxIndex = this.maxIndex(pred)
            alert("Prediction: " + this.$classArray[maxIndex])
        },
        preprocessImage: function(imgData) {
            return tf.tidy(()=>{
                let tensor = tf.fromPixels(imgData, 1)

                const resized = tf.image.resizeBilinear(tensor, [28, 28]).toFloat()
                const offset = tf.scalar(255.0);
                const normalized = tf.scalar(1.0).sub(resized.div(offset));
                const batched = normalized.expandDims(0)

                return batched
            })
        },
        maxIndex: function(arr) {
            if (arr.length === 0) {
                return -1;
            }

            let max = arr[0], maxIndex = 0;

            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    maxIndex = i;
                    max = arr[i];
                }
            }

            return maxIndex;
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
.predict-clear-buttons {
    width: 100%;
    text-align: center;
}
.predict-button {
    margin-right: 10px;
}
</style>
