import axios from 'axios';
import qs from 'qs';
import { message, notification } from 'ant-design-vue';
import moment from 'moment';
import router from '../router';
import localS from './localStorage';
import { showReloadModal } from 'utils/tips';
moment.locale('zh-cn');

/**
 * 移除空字符串，null, undefined
 * @param {*} config
 */
const clearEmptyParam = (config) => {
	['data', 'params'].forEach((item) => {
		if (config[item]) {
			const keys = Object.keys(config[item]);
			if (keys.length) {
				keys.forEach((key) => {
					if (['', undefined, null].includes(config[item][key]) && isObject(config[item])) {
						delete config[item][key];
					}
				});
			}
		}
	});
};

// 统一配置
let HTTP_REQUEST = axios.create({
	responseType: 'json',
	timeout: 60000,
	validateStatus(status) {
		// 200 外的状态码都认定为失败
		return status === 200;
	}
});

// 拦截请求
HTTP_REQUEST.interceptors.request.use(
	(config) => {
		// 有 token就带上
        let token = localS.get("TOKEN");
		if (token && token !== '') {
			config.headers['Blade-Auth'] = 'bearer ' + token;
		}
		config.headers['Authorization'] = 'Basic bGp5dEh0Z2xXZWI6MEQxQTc0MDIwMkRBNzZEMA==';
		clearEmptyParam(config);
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// 拦截响应
HTTP_REQUEST.interceptors.response.use(
	(config) => {
		return config;
	},
	(error) => {
		if (error.response) {
			switch (error.response.status) {
				case 466:
					localS.clear();
					location.assign('/#/login');
					break;
				case 400:
					notification.warn({
						message: '系统提示',
						description: '访问出错了，请联系管理员处理。',
						duration: 4
					});
					break;
				case 401:
					showReloadModal();
				case 403:
					notification.warn({
						message: '系统提示',
						description: '当前访问的资源受限，请稍后重试。',
						duration: 4
					});
					break;
				case 404:
					notification.error({
						message: '系统提示',
						description: '抱歉，无法找到您想要的资源，请联系管理员。',
						duration: 4
					});
					break;
				case 405:
					notification.error({
						message: '系统提示',
						description: '访问出错了，请联系管理员处理。',
						duration: 4
					});
					break;
				case 406:
					notification.error({
						message: '系统提示',
						description: '访问出错了，请联系管理员解决。',
						duration: 4
					});
					break;
				case 408:
					notification.error({
						message: '系统提示',
						description: '您当前的网络不佳，请稍后重试。',
						duration: 4
					});
					break;
				case 409:
					notification.error({
						message: '系统提示',
						description: '访问出错，请联系管理员解决。',
						duration: 4
					});
					break;
				case 410:
					notification.error({
						message: '系统提示',
						description: '所请求的资源已不存在，请确认。',
						duration: 4
					});
					break;
				case 429:
					notification.error({
						message: '系统提示',
						description: '系统忙不过来了，请稍后重试。',
						duration: 4
					});
					break;
				case 430:
					message.error('该用户未注册');
					// hack方案 防止两次弹窗
					return;
				case 500:
					notification.error({
						message: '系统提示',
						description: '系统状态异常，请联系管理员解决。',
						duration: 4
					});
					break;
				case 501:
					notification.error({
						message: '系统提示',
						description: '网络异常，请稍后重试。',
						duration: 4
					});
					break;
				case 502:
					notification.error({
						message: '系统提示',
						description: '网络请求超时，请稍后重试。',
						duration: 4
					});
					break;
				case 503:
					notification.error({
						message: '系统提示',
						description: '系统维护，请稍后重试。',
						duration: 4
					});
					break;
				case 504:
					notification.error({
						message: '系统提示',
						description: '服务器异常，请联系管理员处理。',
						duration: 4
					});
					break;
				case 505:
					notification.error({
						message: '系统提示',
						description: '系统状态异常，请联系管理员解决。',
						duration: 4
					});
					break;
				default:
					notification.error({
						message: '系统提示',
						description: '哇～，这种异常被您遇到了，请联系管理员吧。',
						duration: 4
					});
					break;
			}
			return Promise.reject();
		} else if (error && error.message) {
			const msgs = {
				timeout: '网络超时',
				'Network Error': '网络错误'
			};
			return Promise.reject(msgs[error.message] || '请求异常');
		} else {
			return Promise.reject(error);
		}
	}
);

function responseData(res, resolve, reject) {
	if (res) {
		if (res.message === 'timeout') {
		} else {
			if (res.status && res.status === 200) {
				if (res.data.code === 200 || res.data.success) {
					resolve(res.data);
				} else {
					reject(res?.data?.msg || '请求异常');
				}
			} else {
				reject(res?.msg || '请求异常');
			}
		}
	}
}

const customAjax = {
	post(url, params, headers) {
		let ContentType = 'application/json;charset=UTF-8';
		if (headers && headers.ContentType) {
			ContentType = headers.ContentType;
		}
		return new Promise((resolve, reject) => {
			HTTP_REQUEST.post(url, params, {
				transformRequest: [
					(params) => {
						let _params = '';
						if ((headers && headers.paramstype && headers.paramstype === 'FormData') || params instanceof FormData) {
							_params = params;
						} else {
							_params = JSON.stringify(params);
						}
						return _params;
					}
				],
				headers: {
					'Content-Type': ContentType
				}
			}).then(
				(res) => {
					responseData(res, resolve, reject);
				},
				(res) => {
					reject(res);
				}
			);
		});
	},
	put(url, params = {}, headers) {
		let ContentType = 'application/json;charset=UTF-8';
		if (headers && headers.ContentType) {
			ContentType = headers.ContentType;
		}
		return new Promise((resolve, reject) => {
			HTTP_REQUEST.put(url, params, {
				transformRequest: [
					(params) => {
						let _params = '';
						if (headers && headers.paramstype && headers.paramstype === 'FormData') {
							_params = qs.stringify(params);
						} else {
							_params = JSON.stringify(params);
						}
						return _params;
					}
				],
				headers: {
					'Content-Type': ContentType
				}
			}).then(
				(res) => {
					responseData(res, resolve, reject);
				},
				(res) => {
					reject(res);
				}
			);
		});
	},
	get(url, params = {}, XMLHttpResponse) {
		//XMLHttpResponse==='XMLHttpResponse'返回XMLHttpRequest对象数据
		return new Promise((resolve, reject) => {
			let _params = '';
			if (url.indexOf('?') > -1) {
				_params += `${Math.random()}`;
			} else {
				_params = '?';
				_params += qs.stringify(params);
				_params += `&${Math.random()}`;
			}
			HTTP_REQUEST.get(`${url}${_params}`).then(
				(res) => {
					if (XMLHttpResponse === 'XMLHttpResponse') {
						resolve(res);
					} else {
						responseData(res, resolve, reject);
					}
				},
				(res) => {
					reject(res);
				}
			);
		});
	},
	delete(url, params) {
		return new Promise((resolve, reject) => {
			HTTP_REQUEST.delete(`${url}`, { data: params }).then(
				(res) => {
					if (res) responseData(res, resolve, reject);
				},
				(res) => {
					reject(res);
				}
			);
		});
	},
	export(url, params = {}) {
		return new Promise((resolve, reject) => {
			message.loading('导出数据中');
			const fileName = params.fileName || `${moment().format('YYYY-MM-DD')}_导出结果.xlsx`;
			HTTP_REQUEST.post(url, params, {
				transformRequest: [
					(params) => {
						return JSON.stringify(params);
					}
				],
				headers: { 'Content-Type': 'application/json;charset=UTF-8' },
				responseType: 'blob'
			})
				.then((r) => {
					const content = r.data;
					if (content.type.indexOf('application/json') > -1) {
						notification.warn({
							message: '系统提示',
							description: '导出失败，请联系管理员!',
							duration: 4
						});
						return;
					}
					const blob = new Blob([content]);
					if ('download' in document.createElement('a')) {
						const elink = document.createElement('a');
						elink.download = fileName;
						elink.style.display = 'none';
						elink.href = URL.createObjectURL(blob);
						document.body.appendChild(elink);
						elink.click();
						URL.revokeObjectURL(elink.href);
						document.body.removeChild(elink);
					} else {
						navigator.msSaveBlob(blob, fileName);
					}
					resolve(r);
				})
				.catch((r) => {
					reject(r);
					console.error(r);
					message.error('导出失败');
				});
		});
	},
	download(url, params, filename, method) {
		return new Promise((resolve, reject) => {
			let key = Date.now() + ' ';
			let hideLoading = message.loading({
				content: '文件传输中',
				key,
				duration: 0
			});
			// axios的坑：必须用axios({method:'get'})这种方法调用，用axios.get这种形式下载的文件会出错
			HTTP_REQUEST({
				method: method || 'post',
				url,
				params,
				transformRequest: [
					(params) => {
						return qs.stringify(params);
					}
				],
				timeout: TIME_OUT,
				headers: { 'Content-Type': 'application/json;charset=UTF-8' },
				responseType: 'blob',
				onDownloadProgress(evt) {
					const percent = `${((100 * evt.loaded) / evt.total).toFixed(2)}%`;
					message.loading({
						content: `文件传输中${percent}`,
						key,
						duration: 0
					});
				}
			})
				.then((r) => {
					hideLoading();
					const content = r.data;
					let resFileName = '';
					try {
						resFileName = r.headers['content-disposition'].split('attachment;fileName=')[1];
						resFileName = decodeURIComponent(resFileName);
					} catch (error) {
						console.warn('filename获取失败', error);
					}
					if (content.type && content.type.indexOf('application/json') > -1) {
						notification.warn({
							message: '系统提示',
							description: '下载失败，请联系管理员!',
							duration: 4
						});
						return;
					}
					const blob = new Blob([content], { type: r.headers['content-type'] });
					if ('download' in document.createElement('a')) {
						const elink = document.createElement('a');
						elink.download = filename || resFileName;
						elink.style.display = 'none';
						elink.href = URL.createObjectURL(blob);
						document.body.appendChild(elink);
						elink.click();
						URL.revokeObjectURL(elink.href);
						document.body.removeChild(elink);
					} else {
						navigator.msSaveBlob(blob, filename);
					}
					resolve(r);
				})
				.catch((r) => {
					hideLoading();
					reject(r);
					console.error(r);
					message.error('下载失败');
				});
		});
	},
	upload(url, params, options = {}) {
		return new Promise((resolve, reject) => {
			HTTP_REQUEST.post(url, params, {
				headers: { 'Content-Type': 'multipart/form-data' },
				...options
			}).then(
				(res) => {
					responseData(res, resolve, reject);
				},
				(res) => {
					reject(res);
				}
			);
		});
	},
	originalGet(url, params) {
		return new Promise((resolve, reject) => {
			let _params = qs.stringify(params);
			HTTP_REQUEST.get(`${url}${_params}`).then(
				(res) => {
					responseData(res, resolve, reject);
				},
				(res) => {
					reject(res);
				}
			);
		});
	}
};

export default customAjax;
