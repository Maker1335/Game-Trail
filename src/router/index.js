import { createRouter,createWebHistory, createWebHashHistory } from 'vue-router';
import Start from '../components/pages/PagesStart.vue';
import Main from '../components/pages/PagesMain.vue';
import Final from '../components/pages/PagesFinal.vue';

const routes = [
    {
        path: '/',
        name: 'Start',
        component: Start
    },
    {
        path: '/main',
        name: 'Main',
        component: Main
    },
    {
        path: '/final',
        name: 'Final',
        component: Final
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes
});

export default router;
