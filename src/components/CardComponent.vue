<template>

    <div class="card">
        <div class="card-flip">
            <div class="card-front">
                <!-- <img :src="image" class="card-img" alt="..."> -->
            </div>
    
            <div class=" card-back card-body">
             <h5 class="card-title">{{ title }}</h5>
             <h5 class="card-text">{{ name }}</h5>
             <p class="card-text">{{vote}}</p>
             <p class="card-text">{{language}}</p>
            </div>
             
         </div>
    </div>
</template>
<script>
    export default {
        name:'CardComponent',
        props:['imageUrl', 'language','title','name','vote']
    }
</script>

<style lang="scss" scoped>

</style>