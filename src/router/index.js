import { createRouter, createWebHashHistory } from 'vue-router'
import PortalView from '@/views/common/PortalView'
import db from "utils/sessionStorage";
import { isNoPermission, ROLES } from "@/utils/permission";
import { checkRoutePermission, updateMenuOpenKeys } from "@/auth/index";
import { trackIns } from '../track'

const constRouter = [
    {
        path: "/",
        name: "DEFAULT",
        redirect: '/home',
    },
    {
        path: "/home",
        name: "HOME",
        component: PortalView,
        meta: {
            level: 1
        },
        redirect: '/home/index',
        children: [
            {
                path: "index",
                name: "HOME_DETAIL",
                meta: {
                    level: 2,
                    // auth: true
                },
                component: require('@/views/home/index.vue').default
            }
        ]
    },
    {
        path: "/login",
        name: "LOGIN",
        meta: {
            isShow: false
        },
        component: require('@/views/login/index.vue').default
    },
    {
        path: '/403',
        name: '403',
        component: require('@/views/error/403.vue').default
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: require('@/views/error/404.vue').default
    }
]

let userRouter = db.get("USER_ROUTER");
if (!userRouter || userRouter === '') {
    db.save("USER_ROUTER", constRouter);
}

const whiteList = ["/login"];

const router = createRouter({
    history: createWebHashHistory(),
    routes: constRouter
})

// 导航守卫，渲染动态路由
router.beforeEach(async (to, from, next) => {
    console.log(to.path)
    if (whiteList.indexOf(to.path) !== -1) {
        next();
        return
    }
    let token = db.get("USER_TOKEN");
    let user = db.get("USER_INFO");
    // if (token.length && user) {
    //     // 非菜单点击时路由变化的菜单高亮
    //     await updateMenuOpenKeys(to);
    //     // 403校验
    //     if (to?.meta?.auth) {
    //         // const isPermission = await checkRoutePermission(to);
    //         if (isPermission) {
    //             next();
    //             return;
    //         } else {
    //             next("/403");
    //             return;
    //         }
    //     }
    //     next();
    //     return
    // } else {
    //     db.save("CURRENT_ROUTER", to.path);
    //     // next("/login");
    //     next();
    // }
    next();
});
let oldTime = Date.now()
let oldPath = ''
router.afterEach((to, from, next) => {
    let time = Math.floor((Date.now() - oldTime) / 1000);
    if (oldPath && oldTime) {
        trackIns.routerTrack(from.path, time)
    }
    oldTime = Date.now();
    oldPath = from.path;
    next();
})

export default router