import db from 'utils/sessionStorage';
import { logout, fetchCurrentUserInfo, fetchLogin } from '@/api/public.js';
import { validatenull } from '@/utils/validate';

export default {
	namespaced: true,
	state: {
		token: db.get('USER_TOKEN'),
		userInfo: db.get('USER_INFO'),
		loginLoading: false,
		registerLoding: false,
		account: db.get('ACCOUNT')
	},
	actions: {
		loginByNameAndPwd({ commit }, { mobile, verifyCode }) {
			return new Promise((resolve, reject) => {
				fetchLogin({ mobile, verifyCode })
					.then((res) => {
						resolve();
						const reg = /(\d{3})\d{4}(\d{4})/;
						const desTel = res.data.account.replace(reg, '$1****$2');
						commit('SET_TOKEN', res.data.access_token);
						commit('SET_ACCOUNT', desTel);
						commit('SET_USER_INFO', res.data);
					})
					.catch((error) => {
						commit('SET_LOGIN_LOADING', false);
						reject(error);
					});
			});
		},
		async getUserInfo({ commit }) {
			let res = await fetchCurrentUserInfo();
			if (res && res.success) {
				// 用户信息缺少nick_name
				res.data.nick_name = res.data.name;
				res.data.role_name = res.data.releAliase;
				commit('SET_USER_INFO', { ...res.data });
			}
		},
		// 登出
		LogOut({ commit }) {
			return new Promise((resolve, reject) => {
				logout()
					.then(() => {
						commit('SET_TOKEN', '');
						db.remove('USER_INFO');
						commit('SET_ACCOUNT', '');
						resolve();
					})
					.catch((error) => {
						reject(error);
					});
			});
		}
	},
	mutations: {
		SET_TOKEN: (state, val) => {
			state.token = val;
			db.save('USER_TOKEN', val);
		},
		SET_ACCOUNT: (state, val) => {
			state.account = val;
			db.save('ACCOUNT', val);
		},
		SET_USER_INFO: (state, val) => {
			if (validatenull(val.avatar)) {
				val.avatar = '/img/avatar.png';
			}
			state.userInfo = val;
			db.save('USER_INFO', val);
		},
		SET_LOGIN_LOADING: (state, val) => {
			state.loginLoading = val;
		},
		SET_REGISTER_LOADING: (state, val) => {
			state.registerLoding = val;
		}
	}
};
