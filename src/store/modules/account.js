import db from 'utils/sessionStorage';
export default {
    namespaced: true,
    state: {
        token: db.get('USER_TOKEN'),
        userInfo: db.get('USER_INFO'),
    },
    actions: {
        setToken({ commit }, data) {
            commit("SET_TOKEN", data)
        },
        setUserInfo({ commit }, data) {
            commit("SET_USER_INFO", data)
        },
    },
    mutations: {
        SET_TOKEN: (state, val) => {
            state.token = val;
            db.save("TOKEN", val)
        },
        SET_USER_INFO: (state, val) => {
            state.userInfo = val;
            db.save("USER_INFO", val)
        },
    }
}