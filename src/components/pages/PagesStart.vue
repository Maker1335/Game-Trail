<template>
    <div class="start">
        <h1 class="title">Game Trail</h1>
        <h2 class="map-selection">Выбор карты</h2>
        <div class="map-selection-list">
            <label v-for="(map, index) in maps" :key="index">
                <img :src="map.src" :alt="map.alt">
                <p> {{ map.alt }} </p>
                <input type="radio" name="map" class="radio-button" :value="map.src" v-model="mapSRC"> <!--После поттверждения cardSize обновляется до map.size, но, если обновить cardSize, то map.size, не применится -->
            </label>
        </div>

        <h3 class="player-count">Введите количество игроков</h3>
        <input type="number" placeholder="Количество игроков" v-model="playerCount" min="2" class="player-count-input">
        <h3 class="card-size">Напишите число клеток в карте (если вы хотите ускорить, или увеличить длину игры)</h3>
        <input type="number" placeholder="Количество клеток на карте" v-model="cardSize" min="1"
            class="card-size-input">
        <br>
        <h3 class="item-creation-counter">Напишите число предметов, которые будут генерироваться за 1 раз</h3>
        <input type="number" placeholder="Количество клеток на карте" v-model="itemCreationCounter" min="1"
            class="item-creation-counter-input">
        <br>
        <router-link to="/main"> <button @click="startGame()">Начать</button> </router-link>
        <h4>Короткая инструкция, как играть:</h4>
        <div class="how-to-play">
            <p>Первый ход: все игроки просто кидают кубик D6 (в "Выберите кубик" должен стоят D6 и надо нажать на кнопку "Бросить кубик") и нажмите на кнопку "Закончить ход" (все кнопки находятся в правом нижнем углу).</p>
            <p>На этом первый ход не заканчивается. Все игроки проходят игры, выполняют задания (если они есть), или дропают (отказываются от прохождения).</p>
            <p>После прохождения игры, или дропа, нажмите кнопку "Получить предмет" (вы получите столько предметов, сколько вписали в окно. "Напишите число предметов, которые будут генерироваться за 1 раз (Рекомендуемое число - 3)") </p>
            <p>Сами предметы вы можете использовать Только в СВОЙ ход.</p>
            <p>Теперь вы можете бросать кубики. Если вы прошли игру, то передвигаетесь вперёд, если дропнули, то передвигаетесь назад (в поле "бонусные очки", надо поставить знак минуса), и заканчивать ход.</p>
            <p>Далее цикл "Сходил -> Прошёл игру/дропнул -> Получил предметы и использовал их" повторяется до победы одного из игроков.</p>
        </div>
    </div>
</template>

<script>
import { usePlayersStore } from '../stores/playersStore';

export default {
    name: 'Start',
    setup() {
        let playerStore = usePlayersStore();
        let playerCount = playerStore.playerCount;
        let cardSize = playerStore.cardSize;
        let itemCreationCounter = playerStore.itemCreationCounter;
        let mapSRC = playerStore.mapSRC;
        return {
            maps: [
                { src: '/src/assets/img/map.svg', alt: 'Карта игры на 63 клетки (Старт - нулевая клетка)', size: "63" },
                { src: '/src/assets/img/gameMap.svg', alt: 'Карта игры на 67 клеток (Старт - нулевая клетка)', size: "67" },
            ],
            playerCount: 2,
            cardSize: 63,
            itemCreationCounter: 3,
            mapSRC: "/src/assets/img/map.svg",
        }
    },
    methods: {
        startGame() {
            let playerStore = usePlayersStore();
            playerStore.playerCount = this.playerCount;
            this.playerCount = this.playerCount;
            playerStore.cardSize = this.cardSize;
            this.cardSize = this.cardSize;
            playerStore.itemCreationCounter = this.itemCreationCounter;
            this.itemCreationCounter = this.itemCreationCounter;
            playerStore.mapSRC = this.mapSRC;
        }
    },
    
}
</script>

<style lang="scss" scoped>
.start {
    height: 100%;
    max-width: 1280px;
    text-align: center;
    color: white;

    .title {}

    .map-selection {

        &-list {
            display: flex;
            flex-wrap: wrap;
            margin: 10px;
            justify-content: space-evenly;

            label {
                display: flex;
                flex-direction: column;
                align-items: center;

                img {
                    width: 200px;
                    height: 200px;
                }
            }
        }
    }

    .player-count {}

    .card-size {}

    .player-count-input {
        width: 300px;
        font-size: 24px;
    }

    .card-size-input {
        width: 300px;
        font-size: 24px;
    }

    .item-creation-counter-input{
        width: 300px;
        font-size: 24px;
    }

    button {
        width: 300px;
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 10px;
        background-color: #111111;
        color: rgb(255, 255, 255);
        border: 1px solid white;
        border-radius: 10px;
        cursor: pointer;
    }
    .how-to-play{
        display: flex;
        flex-direction: column;
        text-align: start;
        gap:10px;
        .header{
            text-align: center;
        }
        .warning{
            color: red;
        }
    }
}
</style>
