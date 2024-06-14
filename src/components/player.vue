<template>
    <div class="player" :class="'player' + playerCount" v-show="player.active">
        <div class="leftSide">
            <input type="text" v-model="player.name" class="name" placeholder="Имя игрока...">
            <playerMap />
            <info :player="player" />
        </div>
        <div class="rightSide">
            <inventory :player="player" />
            <div class="buttons">
                <div class="selectDice">
                    <label for="dice">Выберите кубик: </label>
                    <select v-model="selectedDice" id="dice">
                        <option value="4">D4</option>
                        <option value="6">D6</option>
                        <option value="12">D12</option>
                        <option value="20">D20</option>
                    </select>
                </div>
                <div class="dice" :class="{ rolling: isRolling }">
                    <p>{{ rolledNumber }}</p>
                </div>
                <button class="rollTheDice" @click="rollTheDice()">Бросить кубик</button>
                <button @click="endTurn()" class="endTurn">Закончить ход</button>
            </div>
        </div>
    </div>
</template>

<script>
import Info from "./player/PlayerInfo.vue";
import Inventory from "./player/PlayerInventory.vue";
import PlayerMap from "./player/PlayerMap.vue";

import { usePlayersStore } from './stores/playersStore'

export default {
    name: "Player",
    components: {
        PlayerMap,
        Info,
        Inventory,
    },
    props: {
        playerCount: Number,
    },
    data() {
        const playerStore = usePlayersStore();
        let player = playerStore.getPlayerById(this.playerCount)
        if (player.id == 1) {
            player.active = true;
        }
        return {
            playerStore,
            player,
            selectedDice: 6,
            rolledNumber: 0,
            isRolling: false,
        }
    },
    methods: {
        rollTheDice() {
            this.isRolling = true;
            let rng = this.generateExtraPoints(this.selectedDice)
            setTimeout(() => {
                this.rolledNumber = rng
                this.isRolling = false;
            }, 1000); // анимация длится 1 секунду
            this.player.extraPoints += rng;
        },
        generateExtraPoints(selectedDice) {
            return Math.floor(Math.random() * selectedDice) + 1;
        },
        endTurn() {
            let player = this.playerStore.getPlayerById(this.playerCount)
            player.cellNumber += player.extraPoints;
            if (player.cellNumber < 0) {
                player.cellNumber = 0;
            }
            if (player.cellNumber > this.playerStore.cardSize) {
                player.cellNumber = this.playerStore.cardSize;
            }
            if (player.cellNumber == this.playerStore.cardSize) {
                this.playerStore.winner = player.name;
                this.$router.push('/final');
            }
            player.extraPoints = 0;
            player.turnNumber++;
            if (this.playerStore.players.length > player.id) {
                player.active = false;
                player = this.playerStore.getPlayerById(this.playerCount + 1).active = true;
            } else {
                player.active = false;
                player = this.playerStore.getPlayerById(1).active = true;
            }
        },
    },
    created() {
    },
};
</script>


<style lang="scss">
.player {
    width: 100%;
    //width: 1024px;
    margin: 0 auto;
    //height: 100%;
    height: calc(100% - 62px);
    background: rgb(0, 0, 0);
    background: #111111;
    color: white;
    display: flex;
    justify-content: space-between;
    position: absolute;
    //top: 60px;
    left: 0;
    right: 0;

    .leftSide,
    .rightSide {
        width: 100%;
    }

    .leftSide {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border-right: 1px solid white;

        .name {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 500px;
            margin: 0 auto;
            font-size: 20px;
        }
    }

    .rightSide {
        position: relative;
        border-left: 1px solid white;

        .buttons {
            position: absolute;
            display: flex;
            bottom: 5%;
            right: 0;
            gap: 15px;
            align-items: center;
            width: 70%;
            text-align: center;
            button {
                background: white;
                border: 0;
                padding: 5px;
                //position: absolute;
                font-size: 16px;

                &:hover {
                    cursor: pointer;
                    background: lightseagreen;
                }
            }

            label,
            select,
            option {
                font-size: 16px;
            }

            .rollTheDice {
                //right: 110px;
                //bottom: 0px;
            }

            .endTurn {
                //right: 0px;
                //bottom: 0px;
            }

            .selectDice {

                //position: absolute;
                //right: 230px;
                //bottom: 0px;
                //font-size: 20px;
                select {
                    //font-size: 20px;
                    //width: 100%;
                    //height: 40px;
                    //padding: 10px;
                    border: 1px solid white;
                    border-radius: 10px;
                    background: #111111;
                    color: white;
                }
            }
        }
    }
}

.dice {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 10px;
    font-size: 24px;
    transition: transform 1s;
}

.dice.rolling {
    animation: shake 1s;
}

@keyframes shake {
    0% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(15deg);
    }

    50% {
        transform: rotate(-15deg);
    }

    75% {
        transform: rotate(15deg);
    }

    100% {
        transform: rotate(0deg);
    }
}
</style>
