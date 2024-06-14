<template>
    <div class="navigation">
        <Information />
        <Items />
        <AllPlayers />
    </div>
</template>
<script>
import AllPlayers from './nav/NavAllPlayers.vue';
import Information from './nav/NavInformation.vue';
import Items from './nav/NavItems.vue';
export default {
    name: "Navigation",
    components: {
        AllPlayers,
        Information,
        Items
    },

}
</script>
<style scoped lang="scss">
.navigation {
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid white;
    color: white;
    padding: 10px 0;
    height: 40px;
}
</style>