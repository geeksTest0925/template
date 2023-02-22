import store from "@/store";
import { getButtonCodeOfCurRole, getRoutesData, getRoleMenuInfo } from "@/api/auth";
import { AUTH_DIRECTIVE_TYPE_MAP } from "@/consts/index";
import { isUndefined } from "@/utils/validate";
import _ from "lodash";
import db from 'utils/sessionStorage';
import router from "@/router";
import { IS_SERVE } from "@/consts/index"

export const defaultMenu = [
    {
        name: "首页",
        alias: "HOME_DETAIL",
        id: 1
    },
];

/**
 * 和权限相关需要更新数据的操作
 */
export const authInit = async () => {
    await getRoleMenuNameData();
    await getRoleMenuData();
    await getRoleButtonData();
};

/**
 * 刷新时根据当前路由设置菜单高亮
 * @param {*} to
 */
export const updateMenuOpenKeys = async to => {
    const name = to?.meta?.activeName || to.name
    const allMenuID = IS_SERVE ? store?.state?.auth?.userAllMenuID || (await getRoleMenuData()) : store?.state?.auth?.mockMenuDatas;
    const userMenu = IS_SERVE ? store?.state?.auth?.userMenu || (await getRoleMenuData()) : getOneArr(store?.state?.auth?.mockMenuDatas);
    let selectedKeys = [];
    let openKeys = [];
    // 当前选择的菜单信息
    const currentMenu = _.find(allMenuID, item => item?.alias === name);
    if (currentMenu) {
        selectedKeys = !isUndefined(currentMenu?.id) ? [currentMenu?.id] : [];
        openKeys = treeFindAllParent(userMenu, data => data?.id == currentMenu?.id);
    }
    store.dispatch("auth/setCurrentMenu", { openKeys, selectedKeys });
};

/**
 * 校验当前路由的访问权限
 * @param {*} to
 */
export const checkRoutePermission = async to => {
    const userRoleRouteName = store?.state?.auth?.userRoleRouteName || (await getRoleMenuNameData());
    const { name } = to || {};
    const flag = _.includes(userRoleRouteName, name);
    return flag;
};

/**
 * 获取树形结构的所有父级
 * @param {*} tree
 * @param {*} func
 * @param {*} path
 */
const treeFindAllParent = (tree, func, path = []) => {
    try {
        if (!tree) return [];
        for (const data of tree) {
            // 这里按照你的需求来存放最后返回的内容吧
            path.push(data?.id);
            if (func(data)) return path;
            if (data.children) {
                const findChildren = treeFindAllParent(data.children, func, path);
                if (findChildren.length) return findChildren;
            }
            path.pop();
        }
        return [];
    } catch (error) {
        console.log(error);
    }
};

/**
 * 将树形结构转成平面结构
 * @param {*} arr
 */
export const getOneArr = arr => {
    let data = _.cloneDeep(arr);
    let newData = [];
    const callback = item => {
        const children = item.children || (item.children = []);
        _.map(children, v => {
            callback(v);
        });
        delete item.children;
        newData.push(item);
    };
    _.map(data, v => callback(v));
    return newData;
};

/**
 * 获取树形结构指定key的值
 * @param {*} arr
 * @param {*} key
 */
const getValueArr = (arr, key) => {
    try {
        const save = [];
        fn(arr);
        function fn (arr) {
            _.map(arr, item => {
                if (item.children?.length > 0) {
                    fn(item.children);
                }
                save.push(item[key]);
            });
        }
        return save;
    } catch (error) {
        console.log(error);
    }
};

/**
 * 返回的菜单匹配路由，找不到的404
 * @param {*} arr 
 * @returns 
 */
const matchRoute = (arr) => {
    try {
        const save = [];
        const routeNames = _.map(router.getRoutes(), item => item.name);
        return fn(arr);
        function fn (arr) {
            return _.map(arr, item => {
                if (item.children?.length > 0) {
                    fn(item.children);
                    if (!_.includes(routeNames, item?.alias)) {
                        item.alias = '404'
                    }
                    return item;
                } else {
                    if (!_.includes(routeNames, item?.alias)) {
                        item.alias = '404'
                    }
                    return item;
                }
            });
        }
    } catch (error) {
        console.log(error);
    }
}

/**
 * 获取当前用户角色配置的按钮code
 */
export const getRoleButtonData = async () => {
    try {
        const result = await getButtonCodeOfCurRole();
        const { code, data } = result || {};
        if (code !== 200) {
            return [];
        }
        const userButtons = Array.isArray(data) ? data : [];
        store.dispatch("auth/setButtonData", userButtons);
        return userButtons;
    } catch (error) {
        console.log("error", error);
    }
};

/**
 * 获取当前角色所有路由（包括按钮）name在路由守卫校验403
 */
const getRoleMenuNameData = async () => {
    try {
        const useMenuInfo = await getRoleMenuInfo();
        const { code, data } = useMenuInfo || {};
        let userMenu = [];
        if (code === 200) {
            userMenu = Array.isArray(data) && data.length > 0 ? data : null;
        }
        console.log(userMenu, 'userMenu');
        // userMenu = userMenu || (process.env.NODE_ENV === "development" ? mockMenuDatas : defaultMenu);
        const userRoleRouteName = getValueArr(userMenu, "alias");
        store.dispatch("auth/setRoleRouteName", userRoleRouteName);
        return userRoleRouteName;
    } catch (error) {
        console.log(error);
    }
};

/**
 * 获取当前用户角色配置的菜单
 */
export const getRoleMenuData = async () => {
    try {
        const useMenuInfo = (await getRoutesData({})) || {};
        const { code, data } = useMenuInfo || {};
        let userMenu = [];
        if (code === 200) {
            userMenu = Array.isArray(data) && data.length > 0 ? data : null;
        }
        // userMenu = userMenu || (process.env.NODE_ENV === "development" ? mockMenuDatas : defaultMenu);
        userMenu = matchRoute([...defaultMenu, ...userMenu]);
        const allMenuID = getOneArr(userMenu);
        store.dispatch("auth/setMenuData", userMenu);
        store.dispatch("auth/setAllMenuID", allMenuID);
        return userMenu;
    } catch (error) {
        console.log("error", error);
    }
};

/**
 * 处理指令的value
 * @param {*} params
 */
const handleBindingValue = params => {
    if (Object.prototype.toString.call(params) === "[object Array]") {
        return params;
    }
    if (Object.prototype.toString.call(params) !== "[object String]") {
        return [];
    }
    const trimStart = code => _.trimStart(code, ",");
    const trimEnd = code => _.trimEnd(code, ",");
    const split = code => _.split(code, ",");
    const getAuthCodeArr = _.flowRight(_.uniq, split, trimStart, trimEnd);
    const authArr = getAuthCodeArr(params);
    return authArr;
};

/**
 * 处理指令DOM元素
 * @param {*} param0
 */
const handleDom = ({ event, display = false }) => {
    if (display) {
        if (!event?.parentNode) {
            event.style.display = display;
        } else {
            event?.parentNode?.removeChild(event);
        }
    }
};

/**
 * 自定义指令class
 */
export class AuthDirective {
    constructor(app) {
        this.init();
        const andCreated = this.andCreated.bind(this);
        const anyCreated = this.anyCreated.bind(this);
        app.directive("auth-and", {
            created (el, binding, vnode) {
                andCreated(el, binding, vnode);
            },
        });
        app.directive("auth-any", {
            created (el, binding, vnode) {
                anyCreated(el, binding, vnode);
            },
        });
    }

    async init () {
        let token = db.get("USER_TOKEN");
        let user = db.get("USER_INFO");
        if (token.length && user && IS_SERVE) {
            await getRoleButtonData();
        }
    }

    async directiveInit (code, type = AUTH_DIRECTIVE_TYPE_MAP["OR"]) {
        try {
            if (!code) {
                return;
            }
            let display = "block";
            const userButtons = store.state.auth.userButtons || (await getRoleButtonData());
            console.log(userButtons, 'userButtons...');
            const authArr = handleBindingValue(code);
            const result = _.intersection(authArr, userButtons);
            // console.log("result", result, userButtons);
            // 或:传入权限只要有一个在权限列表就展示
            if (type === AUTH_DIRECTIVE_TYPE_MAP["OR"] && result?.length === 0 && code) {
                display = "none";
            }
            // 且:传入的所有权限都在权限列表才展示
            if (type === AUTH_DIRECTIVE_TYPE_MAP["AND"] && result?.length !== authArr?.length) {
                display = "none";
            }
            return display === "none";
        } catch (error) {
            console.log(error);
        }
    }

    async andCreated (event, binding, vnode) {
        // console.log(event, binding, vnode);
        try {
            if (!binding) {
                return;
            }
            let display = (await this.directiveInit(binding?.value, AUTH_DIRECTIVE_TYPE_MAP["AND"])) || false;
            handleDom({ event, display });
        } catch (error) {
            console.log(error);
        }
    }

    async anyCreated (event, binding, vnode) {
        // console.log(event, binding, vnode);
        try {
            if (!binding) {
                return;
            }
            let display = (await this.directiveInit(binding?.value, AUTH_DIRECTIVE_TYPE_MAP["OR"])) || false;
            handleDom({ event, display });
        } catch (error) {
            console.log(error);
        }
    }
}
