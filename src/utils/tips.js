import router from '../router';
import moment from 'moment';
import { Modal } from 'ant-design-vue';
import db from 'utils/sessionStorage';
import localS from './localStorage';

//更新用户操作时间
function toMoment(date) {
	let expireTime = [...date];
	expireTime.splice(8, 0, 'T');
	return moment(expireTime.join(''));
}
function showExpireModal(diffTime) {
	return new Promise((resolve, reject) => {
		Modal.confirm({
			title: '登录即将过期',
			content: `距离登录过期还有${diffTime}秒，当前操作用时较长，建议重新登录后进行，是否继续进行操作？`,
			okText: '继续',
			cancelText: '重新登录',
			onOk() {
				resolve();
			},
			onCancel() {
				db.clear();
				localS.clear();
				location.reload();
				reject;
			}
		});
	});
}
let isShow = false;
function showReloadModal() {
	if (isShow) return;
	isShow = true;
	Modal.error({
		title: '登录已过期',
		content: '很抱歉，登录已过期，请重新登录',
		okText: '重新登录',
		onOk: () => {
			return new Promise((resolve, reject) => {
				db.clear();
				localS.clear();
				router.push({ path: '/login' });
				resolve();
				setTimeout(() => {
					location.reload();
				}, 0);
			}).catch((e) => {
				// 增加报错提示
				console.warn(e);
			});
		}
	});
}

export { showReloadModal };
