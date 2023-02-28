import mitt from 'mitt';

let mitter = mitt();

class Comm {
	constructor() {}

	static sendRotationToForm(rotation = '') {
		mitter.emit('sendRotationToForm', rotation);
	}
	static receiveRotationFromView(callback = () => {}) {
		mitter.on('sendRotationToForm', callback);
	}

	static sendRotationToView(rotation = '') {
		mitter.emit('sendRotationToView', rotation);
	}
	static receiveRotationFromForm(callback = () => {}) {
		mitter.on('sendRotationToView', callback);
	}
}

export default Comm;
