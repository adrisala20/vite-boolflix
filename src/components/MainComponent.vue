<template>
    <main>
        <div class="container">
            <CardList title="movie" />
            <CardList title="serietv"/>  
        </div>
    </main>
</template>

<script>
//mi serve lo store per passare i dati  alla cadList!!
import {store} from '../store.js';
import CardList from './CardList.vue';
    export default {
        name:'MainComponent',
        components:{
            CardList
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
main{
    padding-top: 90px 0;
}

</style>