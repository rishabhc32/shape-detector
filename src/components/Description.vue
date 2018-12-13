<template>
    <div class="row">
        <div class="col s12">
        <p>
            Shape Detector is a simple tool that uses CNN to recognize drawings. The CNN was trained to recognize 100 classes using the quick draw dataset. The accuracy is around 93%, it can be imporved but Google Colab has its limits.
        </p>
        <p>
            Draw the image and see the predictions. The 'alert' shows the prediction.
        </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Description',
}
</script>

<style scoped>
p {
   padding-left: 20px;
   padding-right: 20px;
   font-size: 1.20rem; 
}
</style>
