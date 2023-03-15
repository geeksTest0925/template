import { createStore } from 'vuex';
import account from './modules/account';
import getters from './getters';
const store = createStore({
    modules: {
        account
    },
    getters
});

export default store;
