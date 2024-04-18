<template>
    <div class="card">
        <img :src="store.imageUrl + item.poster_path" class="card-img-top" alt="">
        <div class="card-body">
            <h4 class="card-title">{{ item.title || item.name }}</h4>
            <h6 class="card-title">{{item.original_title || item.original_name}}</h6>
            <div>
                {{ item.original_language }}
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
            item: Object
        },
        data(){
            return{
                store,
             
            }
        },
        computed:{
            starVote(){
                return Math.floor(this.item.vote_average / 2)
            }
        }
    }
</script>


<style lang="scss" scoped>
.star{
    color: gold;
}
</style>