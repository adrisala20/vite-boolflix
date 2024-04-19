<template>
    <main>
        <div class="alert alert-danger " v-if="store.error.message">{{ store.error.message }}</div>
        <div class="mycontainer">
            <div v-if="!store.loading">
                <CardList title="Movies" :list="store.movies"/>
                <CardList title="Serie Tv" :list="store.seriesTv"/>
            </div> 
            <ApiLoader v-else/> 
        </div>
    </main>
</template>

<script>
//mi serve lo store per passare i dati  alla cadList!!
import {store} from '../store.js';
import CardList from './CardList.vue';
import ApiLoader from './ApiLoader.vue'
    export default {
        name:'MainComponent',
        components:{
            CardList,
            ApiLoader
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
    height: calc(100vh - 90px);
    padding-top: 90px;
    .mycontainer{
        padding: 0 70px;
    }
}

</style>