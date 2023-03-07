import localS from '@/utils/localStorage';
import db from '@/utils/sessionStorage';

export default {
	namespaced: true,
	state: {
		userButtons: localS.get('USER_BUTTONS'),
		userRoleRouteName: localS.get('USER_ROLE_ROUTE_NAME'),
		currentMenu: db.get('CURRENT_MENU')
	},
	actions: {
		setButtonData({ commit }, data) {
			commit('SET_USER_BUTTONS', data);
		},
		setRoleRouteName({ commit }, data) {
			commit('SET_USER_ROLE_ROUTE_NAME', data);
		},
		setCurrentMenu({ commit }, data) {
			commit('SET_CURRENT_MENU', data);
		}
	},
	mutations: {
		SET_USER_BUTTONS: (state, val) => {
			state.userButtons = val;
			localS.save('USER_BUTTONS', val);
		},
		SET_USER_ROLE_ROUTE_NAME: (state, val) => {
			state.userRoleRouteName = val;
			localS.save('USER_ROLE_ROUTE_NAME', val);
		},
		SET_CURRENT_MENU: (state, val) => {
			state.currentMenu = val;
			db.save('CURRENT_MENU', val);
		}
	}
};
