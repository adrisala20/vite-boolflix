<template>
    <main>
        <div class="mycontainer">
            <CardList title="Movies" :list="store.movies"/>
            <CardList title="Serie Tv" :list="store.seriesTv"/>  
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
    height: calc(100vh - 90px);
    padding-top: 90px;
    .mycontainer{
        padding: 0 80px;
    }
}

</style>