import Vue from 'vue'
import VueRouter, {
    RouteConfig
} from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/Index/Index.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About/About.vue')
    },
    {
        path: '/intro',
        name: 'Intro',
        component: () => import('../views/Intro/Intro.vue')
    },
    {
        path: '/board',
        name: 'Board',
        component: () => import('../views/Board/Board.vue'),
        children: [
            {
                path: 'boardComponent',
                name: 'BoardComponent',
                component: () => import('../views/Board/components/BoardComponent.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'active',
    routes
})

export default router
