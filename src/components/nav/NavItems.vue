<template>
    <div class="items">
        <button v-on:click="visible = !visible"> 
            <p>Предметы</p>
            <img src="../../assets/img/NavItems.svg" alt="Значёк предметов">
        </button>
        <div class="items-list" v-show="visible"> 
            <div class="items-list-header">
                <h2>Список предметов</h2>
            </div>
            <div class="items-list-main">
                <input type="text" v-model="searchQuery" placeholder="Поиск по названию" class="search-items">
                <ul>
                    <li v-for="(innerArray, index) in filteredItems" :key="index">
                        <p class="item-name">{{ innerArray[0] }}</p>
                        <p class="item-description">{{ innerArray[1] }}</p>
                    </li>
                </ul>
            </div>
            <div class="items-list-footer">
                <button @click="visible = !visible" class="close">Закрыть</button>
            </div>
        </div>
    </div>
</template>

<script>
import item from '../item'

export default {
    name: 'Items',
    data() {
        return {
            visible: false,
            items: item,
            searchQuery: ''
        }
    },
    computed: {
        filteredItems() {
            return this.items.filter(innerArray => 
                innerArray[0].toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    }
}
</script>

<style scoped lang="scss">
.items {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    z-index: 1;

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

            .search-items {
                width: 400px;
                height: 30px;
                border: none;
                border-bottom: 1px solid white;
                background: none;
                outline: none;
                font-size: 20px;
                color: white;
                margin-top: 10px;
            }

            ul {
                list-style-type: none;
                padding: 0;
                margin: 0;

                li {
                    margin: 20px 0;
                }
            }
        }

        &-footer {
            position: sticky;
            bottom: -10px;
            display: flex;
            justify-content: flex-end;
            height: 40px;
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

    button {
        background: none;
        border: none;
        cursor: pointer;
        outline: none;
        color: white;
        font-family: sans-serif;
        display: flex;
        align-items: center;
        gap: 20px;

        p {
            font-size: 20px;
        }
    }

    img {
        width: 30px;
        height: 30px;
    }
}
</style>



