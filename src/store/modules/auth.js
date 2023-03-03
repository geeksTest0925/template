import localS from '@/utils/localStorage';

export default {
	namespaced: true,
	state: {
		userButtons: localS.get('USER_BUTTONS'),
		userMenu: localS.get('USER_MENUS'),
		userRoleRouteName: localS.get('USER_ROLE_ROUTE_NAME'),
		userAllMenuID: localS.get('USER_ALL_MENU_ID'),
		currentMenu: localS.get('CURRENT_MENU'),
		mockMenuDatas: localS.get('MOCK_MENU_DATAS')
	},
	actions: {
		setMenuData({ commit }, data) {
			commit('SET_USER_MENUS', data);
		},
		setButtonData({ commit }, data) {
			commit('SET_USER_BUTTONS', data);
		},
		setRoleRouteName({ commit }, data) {
			commit('SET_USER_ROLE_ROUTE_NAME', data);
		},
		setAllMenuID({ commit }, data) {
			commit('SET_USER_ALL_MENU_ID', data);
		},
		setCurrentMenu({ commit }, data) {
			commit('SET_CURRENT_MENU', data);
		},
		setMockMenuDatas({ commit }, data) {
			commit('SET_MOCK_MENU_DATAS', data);
		}
	},
	mutations: {
		SET_USER_MENUS: (state, val) => {
			state.userMenu = val;
			localS.save('USER_MENUS', val);
		},
		SET_USER_BUTTONS: (state, val) => {
			state.userButtons = val;
			localS.save('USER_BUTTONS', val);
		},
		SET_USER_ROLE_ROUTE_NAME: (state, val) => {
			state.userRoleRouteName = val;
			localS.save('USER_ROLE_ROUTE_NAME', val);
		},
		SET_USER_ALL_MENU_ID: (state, val) => {
			state.userAllMenuID = val;
			localS.save('USER_ALL_MENU_ID', val);
		},
		SET_CURRENT_MENU: (state, val) => {
			state.currentMenu = val;
			localS.save('CURRENT_MENU', val);
		},
		SET_MOCK_MENU_DATAS: (state, val) => {
			state.mockMenuDatas = val;
			localS.save('MOCK_MENU_DATAS', val);
		}
	}
};
