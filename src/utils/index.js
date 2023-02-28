import axios from 'axios';
import { ref, onBeforeUnmount } from 'vue';
/**
 * 对象转化为formdata
 * @param {Object} object
 */
export function getFormData(object) {
	const formData = new FormData();
	Object.keys(object).forEach((key) => {
		const value = object[key];
		if (Array.isArray(value)) {
			value.forEach((subValue, i) => formData.append(key + `[${i}]`, subValue));
		} else {
			formData.append(key, object[key]);
		}
	});
	return formData;
}

export const formatSize = (size) => {
	if (size < 0 || (!size && size !== 0)) {
		return '';
	}
	if (size < 1024) {
		return size + ' B';
	} else if (size < 1024 * 1024) {
		return Number((size / 1024).toFixed(2)) + ' KB';
	} else if (size < 1024 * 1024 * 1024) {
		return Number((size / 1024 / 1024).toFixed(2)) + ' MB';
	} else {
		return Number((size / 1024 / 1024 / 1024).toFixed(2)) + ' GB';
	}
};

/**
 *
 * @param {File} file
 * @param {Function} callback
 */
export const getBase64 = (file, callback) => {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));
	reader.readAsDataURL(file);
};
/**
 *
 * @param {String} val
 */
export const fmtEmptyString = (str) => {
	return (str || '').replace(new RegExp(/( )/g), '&nbsp;');
};

export const useCancel = () => {
	let CancelToken = axios.CancelToken;
	let source = CancelToken.source();
	onBeforeUnmount(() => {
		source.cancel();
	});
	return source.token;
};
export const isCancel = (err) => {
	return axios.isCancel(err);
};
