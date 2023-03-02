import { createRouter, createWebHashHistory } from 'vue-router';
import PortalView from '@/views/common/PortalView';
import db from 'utils/sessionStorage';
import { checkRoutePermission, updateMenuOpenKeys } from '@/auth/index';
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
		path: '/option1',
		name: 'OPTION1',
		component: PortalView,
		redirect: '/option1/index',
		children: [
			{
				path: 'index',
				meta: {
					auth: true
				},
				name: 'OPTION1_LIST',
				component: require('@/views/subnav/option1/index.vue').default
			}
		]
	},
	{
		path: '/option2',
		name: 'OPTION2',
		component: PortalView,
		redirect: '/option2/index',
		children: [
			{
				path: 'index',
				meta: {
					auth: true
				},
				name: 'OPTION2_LIST',
				component: require('@/views/subnav/option2/index.vue').default
			}
		]
	},
	{
		path: '/option3',
		name: 'OPTION3',
		component: PortalView,
		redirect: '/option3/index',
		children: [
			{
				path: 'index',
				meta: {
					auth: true
				},
				name: 'OPTION3_LIST',
				component: require('@/views/subnav/option3/index.vue').default
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
