<template>
    <div class="card" style="width: 100%;">
        <img class="card-img-right" :src="" alt="Card image atl">
        <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button href="#" class="btn btn-primary">Detail</button>
        </div>
    </div>

</template>

<script>
 export default {
     props:{
         id:Number,
         element:Object
     }

 }

</script>

<style scoped>

</style>
