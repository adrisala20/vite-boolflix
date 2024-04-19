<template>
  <HeaderComponent @searchResults="getMedia"/>
  <MainComponent />   
</template>

<script>
  import {store} from './store.js';
  import axios from 'axios';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';
  export default {
    name:'App',
    components:{
      HeaderComponent,
      MainComponent
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getMedia(){
        if(this.store.options.params.query){ //faccio il controllo per evitare di fare ricerca di input vuoti
          this.store.error.message= '';
          this.store.loading=true;
          Promise.all([this.getMovies(),this.getSeries()]).then((res)=>{
          this.store.movies = res[0].data.results;
          this.store.seriesTv = res[1].data.results;
          console.log(res.data.results)
        }).catch((error)=>{
          this.store.error.message = error.message
        }).finally(()=>{
          this.store.loading= false;
        })
        }
      
      },
      getMovies(){
       return axios.get(this.store.apiUrl+this.store.endPoint.movie, this.store.options);
      },
      getSeries(){
        return axios.get(this.store.apiUrl+this.store.endPoint.serieTv, this.store.options);
      }
    },
    created(){
      //this.getMovies();
      //this.getSeries();
    }
    
  }
</script>

<style lang="scss" scoped>

</style>