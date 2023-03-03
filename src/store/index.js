import { createStore } from 'vuex';
import account from './modules/account';
import auth from './modules/auth';
import getters from './getters';
const store = createStore({
	modules: {
		account,
		auth
	},
	getters
});

export default store;
