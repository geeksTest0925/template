import request from "utils/http";

const base_api = process.env.VUE_APP_BaseServiceUrl;
// const base_api = "https://webartestapi.hereto.cn:18443/api";

export const getRoleMenuInfo = params => {
    return request.get(base_api + "/cms/menu/getMenuOfCurRole", { ...params });
};

export const getRoutesData = params => {
    return request.get(base_api + "/cms/menu/routes", { ...params });
};

export const getButtonCodeOfCurRole = params => {
    return request.get(base_api + "/cms/menu/getButtonCodeOfCurRole", { ...params });
};