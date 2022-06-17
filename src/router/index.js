import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/home",
        name: "Home",
        component: () => import('../views/Home.vue'),
    },
    {
        path: "/projects",
        name: "Projects",
        component: () => import('../views/Projects.vue'),
    },
    {
        path: "/about",
        name: 'About',
        component: () => import('../views/About.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;