import store from '../store';
import router from '../router';
import moment from 'moment';
import { Modal } from 'ant-design-vue';
import db from 'utils/sessionStorage';

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
				db.save('CURRENT_ROUTER', router.history.current.fullPath);
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
				// change log 新增判断 router.history可能为空
				// if(router.history && router.history.current.fullPath.indexOf('/login') === -1){
				//   db.save('CURRENT_ROUTER', router.history.current.fullPath)
				// }
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
function showExpireTime() {
	let expireTime = toMoment(store.state.account.expireTime);
	const now = moment();
	const dif = expireTime.diff(now, 's');
	if (dif <= 180 && dif > 0) {
		return showExpireModal(dif);
	} else if (now - expireTime >= 0) {
		return showReloadModal();
	} else {
		return new Promise((resolve, reject) => {
			resolve();
		});
	}
}

export { showExpireTime, showReloadModal };
