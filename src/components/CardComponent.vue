<template>
    <div class="flip-card">
        <div class="flip-card-inner ">
            <div class=" card flip-card-front">
                <img :src="getImage" class="card-img-top" :alt="item.original_title || item.original_name">
            </div>
            <div class="card-body flip-card-back">
               <h4 class="card-title pb-2 ">{{ item.title || item.name }}</h4>
               <h6 class="card-title">{{item.original_title || item.original_name}}</h6>
               <p class="card-text">{{ item.overview }}</p>
               <div class="flag">
                   <img :src="myFlags" :alt="item.original_language  + ' flag'">
               </div>
                <div class="star">
                   <i :class="{'fa-solid': n <= starVote, 'fa-regular': n > starVote }" class=" fa-star" v-for="n in 5"></i>
                </div>
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
        },
        data(){
            return{
                store,
                flags:['en','fr','it','es','cn','ko','unknown'],
                images: 'logo',
            }
        },
        computed:{
            starVote(){
                return Math.floor(this.item.vote_average / 2)
            },
            myFlags(){
                if(this.flags.includes(this.item.original_language)){
                    return `/img/${this.item.original_language}.jpg`;
                } else{
                    return '/img/unknown.jpg'
                }
            },
            getImage(){
                if(this.item.poster_path){
                    return store.imageUrl + this.item.poster_path;
                } else{
                    return '/img/logo.jpg';
                }
            }

        }
    }
</script>


<style lang="scss" scoped>
.flag{
    img{
        height: 30px;
    }
}
.star{
    color: gold;
}

.flip-card {
  background-color: transparent;
  aspect-ratio: 1/1.5;
  perspective: 1000px;
  .flip-card-inner{
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: trasform 0.6s;
    transform-style: preserve-3d;
    };
    &:hover .flip-card-inner{
        transform: rotateY(180deg);
    }
    .flip-card-front{
        img{
            width: 100%;
            height: 100%;
        }
    }
    .flip-card-front,
    .flip-card-back{
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }
    .flip-card-back{
        padding: 20px;
        background-color: black;
        color: white;
        transform: rotateY(180deg);
        overflow-y: auto;
        overflow-x: hidden;
        scroll-behavior: smooth;
        scrollbar-color: rgb(68, 68, 68);
}
}


</style>