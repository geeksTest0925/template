// 统一接口定义
import request from 'utils/http';

const base_api = process.env.VUE_APP_BaseServiceUrl;
// const base_api = 'https://webartestapi.hereto.cn:18443/api';

// 手机号验证码登录
export const mobileCodeLogin = (data) => {
	return request.post(base_api + '/cms/cms-auth/oauth/mobile-code', data);
};

// 账号密码登录登录
export const passwordLogin = (data) => {
	return request.post(base_api + '/cms/cms-auth/oauth/password', data);
};
// 登出
export const logout = () => {
	return request.post(base_api + '/cms/cms-auth/oauth/logout');
};

// 验证码
export const fetchCode = (data) => {
	return request.post(base_api + '/cms/cms-auth/oauth/message-code', data);
};

// 获取当前用户信息
export const fetchCurrentUserInfo = (data) => {
	return request.post(base_api + '/cms/user/info', data);
};
