import request from '@/utils/http';
const base_api = process.env.VUE_APP_BaseServiceUrl;
// 获取&发送验证码
export const mobileCode = (data) => {
	return request.post(base_api + '/cms/cms-auth/oauth/message-code', data);
};

// 认证手机号、验证码
export const authMobileCode = (data) => {
	return request.post(base_api + '/cms/cms-auth/oauth/mobile-code', data);
};
