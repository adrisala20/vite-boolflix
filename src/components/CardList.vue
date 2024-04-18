<template>

    <div class="container py-4 ">
        <h2></h2>
            <div class="row gy-2">
                <div class="col-12 col-xs-6-col-md-4 col-lg-2">
                    <CardComponent />
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
           
        },
        data(){
            return{
               
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>