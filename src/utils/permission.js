import { message } from 'ant-design-vue';
import localS from './localStorage';

export const ROLES = {
	admin: 'mall_admin',
	supAdmin: 'mall_sup_admin',
	//模型审核
	modelCheck: 'model_check_man',
	// 技术服务
	techServ: 'tech_serv_man',
	//视觉
	video: 'video_man',
	u3d: 'u3d_man',
	h5: 'h5_man'
};

const isAdmin = (str) => {
	// mock以防影响正常流程
	// return true
	return str === ROLES.admin || str === ROLES.supAdmin;
};
// 传入权限数组/权限字符串，返回是否有权限
export function isHasPermission(ruleOrRules, isShowMessage = true) {
	try {
		let curentRole = localS.get('USER_INFO').role_name;
		if (isAdmin(curentRole)) return true;
		let hasPermission = false;
		if (typeof ruleOrRules === 'string') {
			hasPermission = ruleOrRules === curentRole;
		} else {
			hasPermission = ruleOrRules.some((item) => item === curentRole);
		}
		if (!hasPermission && isShowMessage) {
			console.log(isShowMessage, hasPermission);
			message.error('您没有此操作权限');
		}
		return hasPermission;
	} catch (error) {
		console.warn('权限处理错误', error);
		return true;
	}
}
export const isNoPermission = (val, isShowMessage) => !isHasPermission(val, isShowMessage);
