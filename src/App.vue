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
          this.getMovies();
          this.getSeries()
        }
      
      },
      getMovies(){
        axios.get(this.store.apiUrl+this.store.endPoint.movie, this.store.options).then((res)=>{
          this.store.movies = res.data.results;
          console.log(res.data.results)
        }).catch((error)=>{
          console.log(error);
        }).finally(()=>{
          console.log('finally')
        })
      },
      getSeries(){
        axios.get(this.store.apiUrl+this.store.endPoint.serieTv, this.store.options).then((res)=>{
          this.store.seriesTv = res.data.results;
          console.log(res.data.results)
        }).catch((error)=>{
          console.log(error);
        }).finally(()=>{
          console.log('finally')
        })
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