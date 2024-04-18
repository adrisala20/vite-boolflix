<template>

    <div class="card">
        <div class="flip_card">
            <div class="card-front">
                <img src="" class="card-img" alt="#">
            </div>
    
            <div class=" card-back card-body">
             <h4 class="card-title"></h4>
             <h6 class="card-title"></h6>
             <div class="card-text">
                <div class="flag">
                    <img src="" alt="#">
                </div> 
                <div class="star">
                </div>
            </div>

            </div>
             
         </div>
    </div>
</template>
<script>
    import {store} from '../store.js';
    export default {
        name:'CardComponent',
        props:{
            
        },
        data(){
            return{
                store,
             
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>