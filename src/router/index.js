import { createRouter, createWebHashHistory } from 'vue-router'
import PortalView from '@/views/common/PortalView'
import db from "utils/sessionStorage";
import { isNoPermission, ROLES } from "@/utils/permission";
import { checkRoutePermission, updateMenuOpenKeys } from "@/auth/index";
import { trackIns } from '../track'
import { mockMenuDatas } from '../mock/side-menu'
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
        redirect: '/home/index',
        children: [
            {
                path: "index",
                name: "HOME_DETAIL",
                component: require('@/views/home/index.vue').default
            }
        ]
    },
    {
        path: "/my",
        name: "MY_INFO",
        component: PortalView,
        meta: {
            level: 1
        },
        redirect: '/my/index',
        children: [
            {
                path: "index",
                name: "MY_INFO_DETAIL",
                meta: {
                    level: 2,
                },
                component: require('@/views/my/index.vue').default
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

let userRouter = db.get("MOCK_MENU_DATAS");
if (!userRouter || userRouter === '') {
    db.save("MOCK_MENU_DATAS", mockMenuDatas);
}

const whiteList = ["/login"];

const router = createRouter({
    history: createWebHashHistory(),
    routes: constRouter
})

// 导航守卫，渲染动态路由
router.beforeEach(async (to, from, next) => {
    if (whiteList.indexOf(to.path) !== -1) {
        next();
        return
    }
    let token = db.get("USER_TOKEN");
    let user = db.get("USER_INFO");
    let flag = false; // 是否从后端获取菜单数据
    if (token.length && user) {
        // 非菜单点击时路由变化的菜单高亮
        await updateMenuOpenKeys(to, flag);
        // 403校验
        if (to?.meta?.auth) {
            const isPermission = await checkRoutePermission(to);
            if (isPermission) {
                next();
                return;
            } else {
                next("/403");
                return;
            }
        }
        next();
        return
    } else {
        await updateMenuOpenKeys(to, flag);
        next();
    }
});
export default router