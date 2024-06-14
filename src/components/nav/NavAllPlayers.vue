<template>
    <div class="all-players">
        <button v-on:click="visible = !visible"> <!-- Вывести в отлдельный компонент -->
            <p>Все игроки </p>
            <img src="../../assets/img/NavAllPlayers.svg" alt="Значёк всех игроков">
        </button>
        <div class="all-players-list" v-show="visible">
            <div class="all-players-list-header">
                <h2>Все игроки</h2>
            </div>
            <div class="all-players-list-main">
                <table>
                    <tr>
                        <th>Имя игрока</th>
                        <th>Номер хода</th>
                        <th>Номер клетки</th>
                        <th>Баланс очков</th>
                    </tr>
                    <tr v-for="player in players" :key="player">
                        <td>{{ player.name }}</td>
                        <td>{{ player.turnNumber }}</td>
                        <td><input type="number" v-model="player.cellNumber" min="0"></td>
                        <td><input type="number" v-model="player.extraPoints"></td>
                    </tr>
                </table>
            </div>
            <div class="all-players-list-footer">
                <button @click="visible = !visible" class="close">Закрыть</button>
            </div>
        </div>
    </div>
</template>
<script>
import { usePlayersStore } from '../stores/playersStore'

export default {
    name: 'AllPlayers',
    data() {
        return {
            visible: false,
        }
    },
    setup() {
        let playerStore = usePlayersStore();
        return {
            players: playerStore.players,
        };
    },
}
</script>
<style scoped lang="scss">
.all-players {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    z-index: 1;

    img {
        width: 30px;
        height: 30px;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        outline: none;
        color: white;
        font-family: sans-serif;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;

        p {
            font-size: 20px;
        }
    }

    &-list {
        background: #2C2C2C;
        position: absolute;
        top: 10%;
        width: 1000px;
        overflow-y: scroll;
        scrollbar-color: red black;
        scrollbar-width: thin;
        height: 600px;
        border-radius: 20px;
        color: #E0E0E0;
        padding: 10px 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &-header {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 10px;
        }

        &-main {
            display: flex;
            align-items: center;
            flex-direction: column;

            table {
                margin-top: 20px;
                border-collapse: collapse;
                width: 100%;
            }

            td,
            th {
                text-align: center;
                align-content: center;
                align-items: center;
                border: 1px solid #dddddd;
                //text-align: left;
                padding: 10px;
                font-size: 20px;
                input{
                    font-size: 20px;
                    width: 100px;
                    text-align: center;
                }
            }
        }

        &-footer {
            position: absolute;
            bottom: 20px;
            right: 20px;
            display: flex;
            justify-content: flex-end;
            background: #2C2C2C;

            .close {
                font-size: 18px;
                color: red;
                cursor: pointer;

                &:hover {
                    border-bottom: 1px solid red;
                }
            }
        }
    }
}
</style>