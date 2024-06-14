<template>
    <div class="inventory">
        <div class="items">
            <ul>
                <li v-for="(item, index) in player.inventory" :key="index">
                    <p class="item-name">{{ item[0] }}</p>
                    <p class="item-description">{{ item[1] }}</p>
                    <button @click="useItem(index)" class="use">Использовать</button>
                    <button @click="deleteItem(index)" class="del"><img src="../../assets/img/PlayerRedCross.svg" alt="удалить"></button>
                </li>
            </ul>
        </div>
        <button @click="createItem()" class="create">Получить предмет</button>
    </div>
</template>

<script>
import { usePlayersStore } from '../stores/playersStore';
import items from "../item"

export default {
    name: "Inventory",
    props: {
        player: Object,
    },
    data() {
        let playerStore = usePlayersStore();
        let itemCreationCounter = playerStore.itemCreationCounter;
        return {
            inventory: [],
            itemCreationCounter,
        };
    },
    methods: {
        createItem() {
            for (let index = 0; index < this.itemCreationCounter; index++) {
                this.player.inventory.push(items[Math.floor(Math.random() * items.length)]);
            }
        },
        useItem(index) {
            const item = this.player.inventory[index];
            if (item[2] && typeof item[2] === 'function') {
                item[2](this);  // Передаем текущий компонент в функцию предмета
                this.player.inventory.splice(index, 1);  // Удаление предмета после использования
            } else {
                console.log('Метод использования не найден для этого предмета');
            }
        },
        deleteItem(index) {
            this.player.inventory.splice(index, 1);
        },
        plusExtraPoints(points){
            this.player.extraPoints += points;  
        },
        minusExtraPoints(points){
            this.player.extraPoints -= points;  
        },
        minusExtraPointsForAllPlayers(){
            const playerStore = usePlayersStore();
            playerStore.players.forEach(player => {
                player.extraPoints -= 1;
            });
        },
        plusExtraPointsForAllPlayers(){
            const playerStore = usePlayersStore();
            playerStore.players.forEach(player => {
                player.extraPoints += 1;
            });
        },
        deleteInventory(){
            this.player.inventory = [];
            this.player.extraPoints = 0;
        },
        inversionExtraPoints(){
            if (this.player.extraPoints == 0) {
                this.player.extraPoints += 1;
            }
            else  {
                this.player.extraPoints = -this.player.extraPoints;
            }
        },
        zeroExtraPoints(){
            this.player.extraPoints = 0;
        },
        Spectaclephobia(){
            if (this.player.extraPoints > 0 ) {
                this.player.extraPoints = 0;
            } else {
                this.player.extraPoints += 2;
            }
        },
        PovertyOrWealth(){
            if (this.player.extraPoints > 0 ) {
                this.player.extraPoints -= 5;
            } else {
                this.player.extraPoints += 5;
            }
        }
    },
}
</script>

<style scoped lang="scss">
.inventory {
    height: 80vh;
    .items{
        height: 100%;
        overflow-y: scroll;
        scrollbar-color:  red black;
        scrollbar-width:thin;
        ul{
            li{
                list-style: none;
                margin-bottom: 20px;
                position: relative;
                padding-bottom: 20px;
                border-bottom: 1px solid white;
                .del{
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    background: none;
                    border: none;
                }
                .use{
                    position: absolute;
                    bottom:0px;
                    right: 0px;
                }
            }
        }
    }
    .create{
        position: absolute;
        bottom: 5%;
        background: white;
        border: 0;
        padding: 5px;
        font-size:16px;
        &:hover{
            cursor:pointer;
            background: lightseagreen;
        }
    }
    
}
</style>