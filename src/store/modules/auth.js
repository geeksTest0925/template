import db from "utils/sessionStorage";

export default {
    namespaced: true,
    state: {
        userButtons: db.get("USER_BUTTONS"),
        userMenu: db.get("USER_MENUS"),
        userRoleRouteName: db.get("USER_ROLE_ROUTE_NAME"),
        userAllMenuID: db.get("USER_ALL_MENU_ID"),
        currentMenu: db.get("CURRENT_MENU"),
        mockMenuDatas: db.get("MOCK_MENU_DATAS")
    },
    actions: {
        setMenuData ({ commit }, data) {
            commit("SET_USER_MENUS", data);
        },
        setButtonData ({ commit }, data) {
            commit("SET_USER_BUTTONS", data);
        },
        setRoleRouteName ({ commit }, data) {
            commit("SET_USER_ROLE_ROUTE_NAME", data);
        },
        setAllMenuID ({ commit }, data) {
            commit("SET_USER_ALL_MENU_ID", data);
        },
        setCurrentMenu ({ commit }, data) {
            commit("SET_CURRENT_MENU", data);
        },
        setMockMenuDatas ({ commit }, data) {
            commit("SET_MOCK_MENU_DATAS", data)
        }
    },
    mutations: {
        SET_USER_MENUS: (state, val) => {
            state.userMenu = val;
            db.save("USER_MENUS", val);
        },
        SET_USER_BUTTONS: (state, val) => {
            state.userButtons = val;
            db.save("USER_BUTTONS", val);
        },
        SET_USER_ROLE_ROUTE_NAME: (state, val) => {
            state.userRoleRouteName = val;
            db.save("USER_ROLE_ROUTE_NAME", val);
        },
        SET_USER_ALL_MENU_ID: (state, val) => {
            state.userAllMenuID = val;
            db.save("USER_ALL_MENU_ID", val);
        },
        SET_CURRENT_MENU: (state, val) => {
            state.currentMenu = val;
            db.save("CURRENT_MENU", val);
        },
        SET_MOCK_MENU_DATAS: (state, val) => {
            state.mockMenuDatas = val;
            db.save("MOCK_MENU_DATAS", val);
        }
    },
};
