const pre = '';
let localS = {
	save(key, value) {
		const v = value || '';
		localStorage.setItem(pre + key, JSON.stringify(v));
	},
	get(key, defaultValue = '') {
		return JSON.parse(localStorage.getItem(pre + key)) || defaultValue;
	},
	remove(key) {
		localStorage.removeItem(pre + key);
	},
	clear() {
		localStorage.clear();
	}
};

export default localS;
