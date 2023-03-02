import request from 'utils/http';

const base_api = process.env.VUE_APP_BaseServiceUrl;

// 获取当前用户角色配置的菜单
export const getRoleMenuInfo = (params) => {
	return request.get(base_api + '/cms/menu/getMenuOfCurRole', { ...params });
};

// 前端菜单数据
export const getRoutesData = (params) => {
	return request.get(base_api + '/cms/menu/routes', { ...params });
};

// 获取当前用户角色配置的按钮code
export const getButtonCodeOfCurRole = (params) => {
	return request.get(base_api + '/cms/menu/getButtonCodeOfCurRole', {
		...params
	});
};
