<template>
    <div class="jumbo">
        <video src="../assets/video/jumbo.mp4" 
        type="video/mp4" autoplay loop muted></video>
    </div>
</template>

<script>
    export default {
        name:'JumboComponent',
    }
</script>

<style lang="scss" scoped>
.jumbo{
    display: flex;
    justify-content: center;
    aspect-ratio: 16 / 9;

}

</style>