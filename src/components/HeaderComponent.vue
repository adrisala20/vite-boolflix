<template>
    <header>
        <div class="container d-flex justify-content-between py-4">
            <div class="left">
                <h1>Boolflix</h1>
            </div>
            <div class="input-group mb-3 right">
                <input type="text" class="form-control" placeholder="Cerca" 
                @keyup.enter="searchMedia" 
                v-model.trim="store.options.params.query">
                <button class="btn btn-outline-danger" type="button" id="buttonSearch"
                @click="searchMedia">
                Cerca</button>
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
}
.left{
    width: 40%;
    h1{
        color: red;
        font-weight: bolder;
    }
};
.right{
    width: 300px;
    button{
        color:white;
        background-color: red;
    }
}

</style>