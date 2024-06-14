<template>
    <div class="main-page">
        <Navigation />
        <div class="playerContainer">
            <Player v-for=" index in this.playerCount" :key="index" :playerCount="index" />
        </div>
    </div>
</template>

<script>
import Navigation from '../navigation.vue';
import Player from "../player.vue"
import { usePlayersStore } from '../stores/playersStore';

export default {
    name: 'MainPage',
    components: {
        Player,
        Navigation,
    },
    data() {
        let players = usePlayersStore().players;
        let playerCount = usePlayersStore().playerCount;
        return {
            players,
            playerCount,
        };
        
    },
    methods: {

    },
    created() {
        let playerStore = usePlayersStore();
        playerStore.clearPlayers();
        playerStore.createPlayer(usePlayersStore().playerCount);
    },
};
</script>

<style lang="scss" scoped>
#app {
    margin: 0 auto;
    max-width: 1280px;
    //max-height: 1080px;
    height: 100vh;
    background: #111111;

    display: flex;
    flex-direction: column;
}

.playerContainer {
    width: 100%;
    height: calc(100% - 62px);
    //position: relative;
}
</style>