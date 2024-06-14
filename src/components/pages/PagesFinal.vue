<template>
    <div class="final">
        <h2 class="winner">Победил {{ winnerName }} </h2>
        <h3 class="congratulations">Поздравляем тебя с победой, ты смог обойти всех и первым дойти до финиша</h3>
        <router-link to="/"> <button class="exit">Покинуть страницу победы</button> </router-link>
        <p class="email">Email для обратной связязи: <a href="mailto:kmakar54@gmail.com"> kmakar54@gmail.com</a></p>
    </div>
</template>

<script>
import { usePlayersStore } from '../stores/playersStore';
export default {
    name: 'Final',
    data(){
        let playerStore = usePlayersStore();
        return {
            winnerName: playerStore.winner
        }
    }
}

</script>

<style lang="scss" scoped>
.final{
    color: white;
    text-align: center;
    height: 100vh;
    .winner{
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .congratulations{
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .exit{
        background-color: #111111;
        color: white;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
        border:0px;
        border-bottom:2px solid white;
        &:hover{
            background-color: white;
            color: black;
            cursor: pointer;
        }
    }
    .email{
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
        a{
            //color: white;
            text-decoration: none;
            &:hover{
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
}
    
</style>