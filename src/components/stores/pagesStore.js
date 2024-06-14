import { defineStore } from "pinia";

export const usePageStore = defineStore("pageStore", {
    state: () => ({
        startPage: true,
        mainPage: false,
        finalPage: false,
    }),
    actions: {
        // Function to switch to mainPage and reset other pages
        setMainPage() {
            this.startPage = false;
            this.mainPage = true;
            this.finalPage = false;
        }
    },
    getters: {
        // You can add getters here if needed
    }
});
