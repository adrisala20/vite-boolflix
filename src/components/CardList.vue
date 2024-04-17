<template>
    sono la card list
    <!-- movies -->
    <div class="row" v-for="movie in store.movies">
        <div class="col-12 col-xs-6-col-md-4 col-lg-2" >
            <CardComponent/>
        </div>        
    </div>
    <!-- serie tv -->
    <div class="row">
        <div class="col-12 col-xs-6-col-md-4 col-lg-2">
            <CardComponent />
        </div>        
    </div>
</template>

<script>
    import {store} from '../store.js';
    import CardComponent from './CardComponent.vue'
    export default {
        name:'CardList',
        components:{
            CardComponent
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>