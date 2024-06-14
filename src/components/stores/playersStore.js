import { defineStore } from "pinia";

export const usePlayersStore = defineStore("playersStore", {
    state: () => ({
        players: [],
        playerCount: Number,
        cardSize: Number,
        itemCreationCounter: Number,
        winner: String,
        mapSRC: String,
    }),
    actions: {
        createPlayer(playersCount) {
            for (let i = 0; i < playersCount; i++) {
                this.players.push({
                    name: "", 
                    turnNumber: 0,
                    cellNumber: 0,
                    extraPoints: 0,
                    id: i+1,
                    inventory: [],
                    active: false,
                })
            }
        },
        clearPlayers(){
            this.players = [];
        },
    },
    getters: {
        getPlayerById: (state) => {
            return (id) => state.players.find(player => player.id === id);
        },
        getAllPlayers: (state) => {
            return state.players;
        },
    },
})
