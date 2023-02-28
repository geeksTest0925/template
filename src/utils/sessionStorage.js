const pre = '';
let db = {
	save(key, value) {
		const v = value || '';
		sessionStorage.setItem(pre + key, JSON.stringify(v));
	},
	get(key, defaultValue = '') {
		return JSON.parse(sessionStorage.getItem(pre + key)) || defaultValue;
	},
	remove(key) {
		sessionStorage.removeItem(pre + key);
	},
	clear() {
		sessionStorage.clear();
	}
};

export default db;
