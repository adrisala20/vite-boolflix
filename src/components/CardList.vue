<template>

    <div class="container py-4 ">
        <h2> {{ title }}</h2>
            <div class="row gy-2">
                <div class="col-12 col-xs-6-col-md-4 col-lg-2"
                v-for="(card,index) in list" :key="card.id">
                    <CardComponent :item="card"/>
                    <!-- {{ card.title || card.name }} -->
                </div>        
            </div>
    </div>
</template>

<script>
    import CardComponent from './CardComponent.vue'
    export default {
        name:'CardList',
        components:{
            CardComponent
        },
        props:{
            title: String,
            list: Array,
        },
        data(){
            return{
               
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>