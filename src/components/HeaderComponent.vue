<template>
    <header>
        <div class="mycontainer  d-flex justify-content-between align-items-center ">
            <div class="left">
                <img src="/img/netflix-logo.png" alt="logo netflix">
            </div>
            <div class="input-group mb-3 right">
                <input type="text" class="form-control" placeholder="Cerca" 
                @keyup.enter="searchMedia" 
                v-model.trim="store.options.params.query">
                <button class="btn btn-outline-danger" type="button" id="buttonSearch"
                @click="searchMedia">
                <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
    import {store} from '../store.js';
    export default {
        name:'HeaderComponent',
        data(){
            return{
                store
            }
        },
        methods:{
            searchMedia(){
                this.$emit('searchResults')
            }
        }
    }
</script>

<style lang="scss" scoped>
header{
    background-color: black;
    width: 100%;
    height: 90px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 4000;
    .mycontainer{
        padding: 0 40px;
        min-width: 400px;
    };
    .left{
    width: 5rem;
    height: 90px;
    position: relative;
    img{
        margin: 0;
        height: 80px;
        width:150px ;    
    }
    };
    .right{
    width: 10rem;
    input,
    button{
        display: flex;
        align-items: center;
        height: 2rem;
    }
    button{
        color:white;
        background-color: red;
    }
}
}


</style>