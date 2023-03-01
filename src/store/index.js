import { createStore } from 'vuex';
import account from './modules/account';
import setting from './modules/setting';
import auth from './modules/auth';
import getters from './getters';
const store = createStore({
	modules: {
		account,
		setting,
		auth
	},
	getters
});

export default store;
