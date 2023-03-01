import { createRouter, createWebHashHistory } from 'vue-router';
import PortalView from '@/views/common/PortalView';
import db from 'utils/sessionStorage';
import { checkRoutePermission, updateMenuOpenKeys } from '@/auth/index';
import { mockMenuDatas } from '../mock/side-menu';
import store from '@/store';
import { isNoPermission } from '@/utils/permission';
const constRouter = [
	{
		path: '/',
		name: 'DEFAULT',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'HOME',
		component: PortalView,
		redirect: '/home/index',
		children: [
			{
				path: 'index',
				name: 'HOME_DETAIL',
				component: require('@/views/home/index.vue').default
			}
		]
	},
	{
		path: '/composer',
		name: 'COMPOSER',
		component: PortalView,
		redirect: '/composer/index',
		children: [
			{
				path: 'index',
				meta: {
					auth: true
				},
				name: 'COMPOSER_LIST',
				component: require('@/views/usermanaged/composer/index.vue').default
			},
			{
				path: 'detail',
				name: 'COMPOSER_DETAIL',
				meta: {
					activeName: 'COMPOSER_LIST'
				},
				component: require('@/views/usermanaged/composer/detail.vue').default
			}
		]
	},
	{
		path: '/create',
		name: 'CHECK_PENDING',
		component: PortalView,
		redirect: '/create/index',
		children: [
			{
				path: 'index',
				meta: {
					auth: true
				},
				name: 'CHECK_PENDING_LIST',
				component: require('@/views/usermanaged/create/index.vue').default
			},
			{
				path: 'detail',
				meta: {
					auth: true,
					activeName: 'CHECK_PENDING_LIST'
				},
				name: 'CHECK_PENDING_DETAIL',
				component: require('@/views/usermanaged/create/detail.vue').default
			}
		]
	},
	{
		path: '/operating',
		name: 'OPERATING',
		component: PortalView,
		redirect: '/operating/index',
		children: [
			{
				path: 'index',
				meta: {
					auth: true
				},
				name: 'OPERATING_LIST',
				component: require('@/views/usermanaged/operating/index.vue').default
			}
		]
	},
	{
		path: '/login',
		name: 'LOGIN',
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
];

let userRouter = db.get('MOCK_MENU_DATAS');
if (!userRouter || userRouter === '') {
	store.dispatch('auth/setMockMenuDatas', mockMenuDatas);
}

const whiteList = ['/login'];

const router = createRouter({
	history: createWebHashHistory(),
	routes: constRouter
});

// 导航守卫，渲染动态路由
router.beforeEach(async (to, from, next) => {
	if (whiteList.indexOf(to.path) !== -1) {
		next();
		return;
	}
	let token = db.get('USER_TOKEN');
	let user = db.get('USER_INFO');
	if (token.length && user) {
		// 非菜单点击时路由变化的菜单高亮
		await updateMenuOpenKeys(to);
		// 403校验
		if (to?.meta?.auth) {
			const isPermission = await checkRoutePermission(to);
			if (isPermission) {
				next();
				return;
			} else {
				next('/403');
				return;
			}
		}
		next();
		return;
    } else {
        // mock以防影响正常流程
		await updateMenuOpenKeys(to);
		db.save('CURRENT_ROUTER', to.path);
		next();
	}
});
export default router;
