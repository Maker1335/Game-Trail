<template>
    <div class="playerMap">
        <div class="map">
            <img :src="mapSRC" alt="Игровая карта">
        </div>
    </div>
</template>

<script>
import { usePlayersStore } from '../stores/playersStore';

export default {
    name: "playerMap",
    data() {
        let playerStore = usePlayersStore();
        let mapSRC = playerStore.mapSRC;

        return {
            imgNum: 64,
            mapSRC,
        }
    },
}
</script>

<style scoped lang="scss">
.playerMap {
    display: flex;
    justify-content: space-around;
}

.map {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    position: relative;
    img {
        width: 500px;
        height: 500px;
    }
}

p {
    position: absolute;
    color:red;
}

.image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-number {
    position: absolute;
    //top: 10px;
    //left: 10px;
    //background-color: rgba(0, 0, 0, 0.7);
    //color: white;
    //padding: 5px 10px;
    //border-radius: 5px;
    //font-size: 20px;
}
</style>