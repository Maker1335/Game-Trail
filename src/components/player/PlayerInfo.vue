<template>
    <div class="info">
        <p class="info-turn-number">Номер хода: {{ player.turnNumber }}</p>
        <p class="info-cell-number">Номер клетки: <input type="number" v-model="player.cellNumber" class="info-cell-number"></p>
        <p class="info-extra-points">Бонусные очки: <input type="number" v-model="player.extraPoints" class="info-extra-points"></p>
    </div>
</template>

<script>
export default {
    name: "Info",
    props: {
        player: Object,
    },
    methods: {
    },
}
</script>

<style scoped lang="scss">
.info {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    //width: 500px;
    //margin: 0 auto;
    &-turn-number,
    &-cell-number,
    &-extra-points {
        font-size: 18px;
    }
    input{
        width: 60px;
        text-align: center;
    }
}
</style>