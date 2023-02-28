import { createStore } from 'vuex';
import account from './modules/account';
import setting from './modules/setting';
import business from './modules/business';
import auth from './modules/auth';
import getters from './getters';
const store = createStore({
	modules: {
		account,
		setting,
		business,
		auth
	},
	getters
});

export default store;
