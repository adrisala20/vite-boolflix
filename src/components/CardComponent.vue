<template>
    <div class="card">
        <img :src="store.imageUrl + item.poster_path" class="card-img-top" :alt="item.original_title || item.original_name">
        <div class="card-body">
            <h4 class="card-title">{{ item.title || item.name }}</h4>
            <h6 class="card-title">{{item.original_title || item.original_name}}</h6>
            <div>
                {{ item.original_language }}
                <img :src="`/img/+ ${item.original_language}.jpg`" :alt="item.original_language + 'flag'">
            </div>
             <div class="star">
                <i :class="{'fa-solid': n <= starVote, 'fa-regular': n > starVote }" class=" fa-star" v-for="n in 5"></i>
                </div>
         </div>
    </div>
</template>
<script>
    import {store} from '../store.js';
    export default {
        name:'CardComponent',
        props:{
            item: Object,
            flag:['en','fr','it','unknown']
        },
        data(){
            return{
                store,             
            }
        },
        computed:{
            starVote(){
                return Math.floor(this.item.vote_average / 2)
            },
           
        }
    }
</script>


<style lang="scss" scoped>
.card-body{
    img{
        height: 30px;
    }
}
.star{
    color: gold;
}
</style>