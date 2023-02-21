import { message } from 'ant-design-vue';
import db from 'utils/sessionStorage';
import { logout, fetchCurrentUserInfo, fetchLogin } from '@/api/public.js';
import md5 from 'js-md5'
import { validatenull } from '@/utils/validate'

export default {
    namespaced: true,
    state: {
        token: db.get('USER_TOKEN'),
        refreshToken: db.get('REFRESH_TOKEN'),
        tenantId: db.get('TENANTID'),
        userInfo: db.get('USER_INFO'),
        loginLoading: false,
        account: db.get('ACCOUNT'),
    },
    actions: {
        loginByNameAndPwd ({ commit }, { mobile, verifyCode }) {
            return new Promise((resolve, reject) => {
                console.log(mobile, verifyCode);
                fetchLogin({ mobile, verifyCode }).then(res => {
                    resolve();
                    const reg = /(\d{3})\d{4}(\d{4})/
                    const desTel = res.data.account.replace(reg, '$1****$2')
                    commit('SET_TOKEN', res.data.access_token);
                    commit('SET_REFRESH_TOKEN', res.data.refresh_token);
                    commit('SET_TENANT_ID', res.data.tenant_id);
                    commit('SET_ACCOUNT', desTel)
                    commit('SET_USER_INFO', res.data);
                }).catch(error => {
                    commit('SET_LOGIN_LOADING', false)
                    reject(error);
                })
            })
        },
        async getUserInfo ({ commit }) {
            console.log('dispatch, getUserInfo')
            let res = await fetchCurrentUserInfo()
            if (res && res.success) {
                // 用户信息缺少nick_name
                res.data.nick_name = res.data.name
                res.data.role_name = res.data.releAliase
                commit('SET_USER_INFO', { ...res.data })
            }
        },
        // 登出
        LogOut ({ commit }) {
            return new Promise((resolve, reject) => {
                logout().then(() => {
                    commit('SET_TOKEN', '');
                    commit('SET_REFRESH_TOKEN', '');
                    commit('SET_TENANT_ID', '');
                    db.remove('USER_INFO');
                    commit('SET_ACCOUNT', '')
                    // commit('SET_MENU', []);
                    // commit('SET_ROLES', []);
                    // commit('SET_TAG_LIST', []);
                    // commit('DEL_ALL_TAG');
                    // commit('CLEAR_LOCK');
                    resolve();
                }).catch(error => {
                    reject(error)
                })
            })
        },
    },
    mutations: {
        SET_TOKEN: (state, val) => {
            state.token = val;
            db.save('USER_TOKEN', val);
        },
        SET_REFRESH_TOKEN: (state, val) => {
            state.refreshToken = val;
            db.save('REFRESH_TOKEN', val);
        },
        SET_TENANT_ID: (state, val) => {
            state.tenantId = val;
            db.save('TENANTID', val);
        },
        SET_ACCOUNT: (state, val) => {
            state.account = val;
            db.save('ACCOUNT', val);
          },
        SET_USER_INFO: (state, val) => {
            if (validatenull(val.avatar)) {
                val.avatar = "/img/avatar.png";
            }
            state.userInfo = val;
            db.save('USER_INFO', val);
        },
        // 修改 用户名
        SET_USER_NAME: (state, val) => {
            const nick_name = val.name
            const data = {
                ...state.userInfo,
                nick_name,
            }
            state.userInfo = data;
            db.save('USER_INFO', data);
        },
        SET_LOGIN_LOADING: (state, val) => {
            state.loginLoading = val
        }
    }
}
