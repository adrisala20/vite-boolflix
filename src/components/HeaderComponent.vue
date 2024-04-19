<template>
    <header>
        <div class="mycontainer d-flex justify-content-between py-4">
            <div class="left">
                <h1>Boolflix</h1>
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
        padding: 0 50px;
        min-width: 400px;
    }
}
.left{
    width: 5rem;
    h1{
        color: red;
        font-weight: bolder;
    }
};
.right{
    width: 10rem;
    button{
        color:white;
        background-color: red;
    }
}

</style>