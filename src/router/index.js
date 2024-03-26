import {createRouter} from "vue-router";
import {createWebHashHistory} from "vue-router";


const routes = [
    {path: '/', redirect:'/main' },
    {path:'/main',component:()=> import("../components/Main.vue")},
]

const router = createRouter({
    history: createWebHashHistory(),
    base:'juyingxiaoxiang',
    routes
})

export default router
