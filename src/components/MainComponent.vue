<template>
    <main>
        <JumboComponent/>
        <div v-if="this.store.options.params.query">
            <div class="alert alert-danger " v-if="!store.error.message">{{ store.error.message }}</div>
            <div class="mycontainer">
                <div v-if="!store.loading">
                    <CardList title="Movies" :list="store.movies"/>
                    <CardList title="Serie Tv" :list="store.seriesTv"/>
                </div> 
                <ApiLoader v-else/> 
            </div>
        </div>
        <div v-else>
            <!-- <h2 class="ps-5">cerca un film</h2> -->
            <!-- <video src="../assets/video/Netflix.mp4" type="video/mp4" autoplay loop muted></video> -->
        
        </div>
    </main>
</template>

<script>
//mi serve lo store per passare i dati  alla cadList!!
import {store} from '../store.js';
import CardList from './CardList.vue';
import ApiLoader from './ApiLoader.vue';
import JumboComponent from './JumboComponent.vue';
    export default {
        name:'MainComponent',
        components:{
            CardList,
            ApiLoader,
            JumboComponent,
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