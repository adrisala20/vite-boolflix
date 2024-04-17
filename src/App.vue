<template>
  <HeaderComponent @searchResults="setParams"/>
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
      setParams(){
        if(this.store.searchFilter){
          this.store.options.params.query = this.store.searchResults;
        }else{
          delete this.store.options.params.searchResults
        }
        this.getMovies();
        this.getSeries()
      },
      getMovies(){
        axios.get(this.store.apiUrl+this.store.endPoint.movie, this.store.options).then((res)=>{
          this.store.movie = res.data.results;
          console.log(res.data.results)
        })
      },
      getSeries(){
        axios.get(this.store.apiUrl+this.store.endPoint.serieTv, this.store.options).then((res)=>{
          this.store.serieTv = res.data.results;
          console.log(res.data.results)
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