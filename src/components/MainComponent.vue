<template>
    <main>
        <div class="container">
            <CardList />
        </div>
    </main>
</template>

<script>
import CardList from './CardList.vue';
    export default {
        name:'MainComponent',
        components:{
            CardList
        }
    }
</script>

<style lang="scss" scoped>
main{
    background-color: rgb(171, 168, 168);
}

</style>