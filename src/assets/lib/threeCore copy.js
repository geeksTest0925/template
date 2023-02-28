import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

const modelReflectWeakMap = new Map();
class ModelSugarCoating {
	constructor({ url, meta, value, animations, srcSize, click }) {
		this.url = url;
		this._meta = meta;
		this._value = value;
		this._animations = animations;
		this._srcSize = srcSize;
		this._click = click;
		modelReflectWeakMap.set(this._value, this);
	}
	get click() {
		return this._click;
	}
	get value() {
		return this._value;
	}
	set animations(value) {
		this._animations = value;
	}
	get animations() {
		return this._animations;
	}
	static animationClone(animations) {
		const resArr = [];
		animations.forEach((ac) => {
			resArr.push(ac.clone());
		});
		return resArr;
	}
}

var __awaiter$1 =
	(undefined && undefined.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
const getPositionFromMat4 = (mat4) => {
	return new THREE.Vector3(mat4.elements[12], mat4.elements[13], mat4.elements[14]);
};
const degreeToRadian = (nDegree) => {
	return (nDegree * Math.PI) / 180;
};
const RadianToDegree = (nRadian) => {
	return (nRadian / Math.PI) * 180;
};
const getRotationFromMat4 = (mat4) => {
	return new THREE.Matrix4().set(
		mat4.elements[0],
		mat4.elements[4],
		mat4.elements[8],
		0,
		mat4.elements[1],
		mat4.elements[5],
		mat4.elements[9],
		0,
		mat4.elements[2],
		mat4.elements[6],
		mat4.elements[10],
		0,
		0,
		0,
		0,
		1
	);
};
const getLookVec = (mat4) => {
	return new THREE.Vector3(mat4.elements[8], mat4.elements[9], mat4.elements[10]);
};
const getQuaternionFromLookAt = (mat) => {
	let tempMatrix = new THREE.Matrix4().lookAt(
		new THREE.Vector3(),
		new THREE.Vector3(mat.elements[2], mat.elements[6], mat.elements[10]),
		new THREE.Vector3(mat.elements[1], mat.elements[5], mat.elements[9])
	);
	return new THREE.Quaternion().setFromRotationMatrix(tempMatrix);
};
const radianToDegree = (nRadian) => {
	return (nRadian / Math.PI) * 180;
};
const degreeBetween2Vector = (vec1, vec2) => {
	vec1 = vec1.normalize();
	vec2 = vec2.normalize();
	let cosA = vec1.clone().dot(vec2) / (vec1.length() * vec2.length());
	let nDegree = radianToDegree(Math.acos(cosA));
	if (vec1.clone().cross(vec2).y > 0);
	else {
		nDegree *= -1;
	}
	return nDegree;
};
const calculateVerticalFov = (nImageHeight, nFocal) => {
	return 2 * Math.atan((0.5 * nImageHeight) / nFocal);
};
const getInitPoint = (dictInfo) => {
	const vecInit = deviceengine.utm2Render([dictInfo['x'], dictInfo['y'], dictInfo['z']]);
	if (!vecInit) {
		return;
	}
	return vecInit;
};
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderConfig({ type: 'js' });
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
const loadGLTFObj = (url, decode) =>
	__awaiter$1(void 0, void 0, void 0, function* () {
		return new Promise((resolve, reject) =>
			__awaiter$1(void 0, void 0, void 0, function* () {
				const response = yield fetch(url);
				let loader = new GLTFLoader();
				let ab;
				if (decode) {
					const res = yield decodeResponse(response);
					ab = yield res.arrayBuffer();
				} else {
					ab = yield response.arrayBuffer();
				}
				loader.parse(ab, null, (gltf) => {
					resolve({ gltf, srcSize: response.headers.get('Content-Length') });
				});
			})
		);
	});
const loadFBXObj = (url, decode) =>
	__awaiter$1(void 0, void 0, void 0, function* () {
		return new Promise((resolve, reject) =>
			__awaiter$1(void 0, void 0, void 0, function* () {
				const response = yield fetch(url);
				let loader = new FBXLoader();
				let ab;
				if (decode) {
					const res = yield decodeResponse(response);
					ab = yield res.arrayBuffer();
				} else {
					ab = yield response.arrayBuffer();
				}
				const fbx = loader.parse(ab, null);
				resolve({ fbx, srcSize: response.headers.get('Content-Length') });
			})
		);
	});
function decodeResponse(response) {
	return __awaiter$1(this, void 0, void 0, function* () {
		if (response.status !== 200) {
			throw new Error('资源请求失败');
		}
		const reader = response.body.getReader();
		const stream = new ReadableStream({
			start(controller) {
				function push() {
					reader.read().then(({ done, value }) => {
						if (done) {
							controller.close();
							return;
						}
						for (let i = 0; i < value.length; i++) {
							value[i] ^= 110;
						}
						controller.enqueue(value);
						push();
					});
				}
				push();
			}
		});
		return new Response(stream);
	});
}
const textureLoader = (url) =>
	__awaiter$1(void 0, void 0, void 0, function* () {
		return new Promise((resolve, reject) => {
			let loader = new THREE.TextureLoader();
			const material = new THREE.MeshBasicMaterial({
				map: loader.load(url)
			});
			resolve(material);
		});
	});

var threeUtils = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	getPositionFromMat4: getPositionFromMat4,
	degreeToRadian: degreeToRadian,
	RadianToDegree: RadianToDegree,
	getRotationFromMat4: getRotationFromMat4,
	getLookVec: getLookVec,
	getQuaternionFromLookAt: getQuaternionFromLookAt,
	radianToDegree: radianToDegree,
	degreeBetween2Vector: degreeBetween2Vector,
	calculateVerticalFov: calculateVerticalFov,
	getInitPoint: getInitPoint,
	loadGLTFObj: loadGLTFObj,
	loadFBXObj: loadFBXObj,
	textureLoader: textureLoader
});

var __awaiter =
	(undefined && undefined.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
const gltfCacheMap = new Map();
const fbxCacheMap = new Map();
const taskMap = new Map();
const taskQue = new Array();
const resources = new Set();
const ModelLoader = ({ url, meta, forceLoad, click, decode }) => {
	if (url.toLowerCase().indexOf('.gl') > -1) {
		return GLTFModelLoader({ url, meta, forceLoad, click, decode });
	} else if (url.toLowerCase().indexOf('.fbx') > -1) {
		return FBXModelLoader({ url, meta, forceLoad, click, decode });
	}
	throw new Error('model type does not support');
};
const cloneGltf = (gltf) => {
	const clone = {
		animations: gltf.animations,
		scene: gltf.scene.clone(true)
	};
	const skinnedMeshes = {};
	gltf.scene.traverse((node) => {
		if (node.isSkinnedMesh) {
			skinnedMeshes[node.name] = node;
		}
	});
	const cloneBones = {};
	const cloneSkinnedMeshes = {};
	clone.scene.traverse((node) => {
		if (node.isBone) {
			cloneBones[node.name] = node;
		}
		if (node.isSkinnedMesh) {
			cloneSkinnedMeshes[node.name] = node;
		}
	});
	for (let name in skinnedMeshes) {
		const skinnedMesh = skinnedMeshes[name];
		const skeleton = skinnedMesh.skeleton;
		const cloneSkinnedMesh = cloneSkinnedMeshes[name];
		const orderedCloneBones = [];
		for (let i = 0; i < skeleton.bones.length; ++i) {
			const cloneBone = cloneBones[skeleton.bones[i].name];
			orderedCloneBones.push(cloneBone);
		}
		cloneSkinnedMesh.bind(new THREE.Skeleton(orderedCloneBones, skeleton.boneInverses), cloneSkinnedMesh.matrixWorld);
	}
	return clone;
};
const GLTFModelLoader = ({ url, meta = {}, forceLoad = false, click, decode = false }) =>
	__awaiter(void 0, void 0, void 0, function* () {
		if (forceLoad || !gltfCacheMap.get(url)) {
			if (taskMap.get(url)) {
				return new Promise((resolve) => {
					const que = taskMap.get(url);
					que.push({
						task: resolve,
						params: { meta, click }
					});
				});
			} else {
				taskMap.set(url, []);
				return new Promise((resolve) =>
					__awaiter(void 0, void 0, void 0, function* () {
						const { gltf, srcSize } = yield loadGLTFObj(url, decode);
						gltf.scene.userData.srcSize = srcSize;
						track(gltf.scene);
						if (!forceLoad) {
							gltfCacheMap.set(url, gltf);
						}
						console.log('清除任务队列');
						taskMap.get(url).forEach((taskConfig) => {
							const { task, params } = taskConfig;
							console.log('资源使用缓存');
							const gltf = cloneGltf(gltfCacheMap.get(url));
							const msc = new ModelSugarCoating({
								url,
								meta: params.meta,
								value: gltf.scene,
								animations: gltf.animations,
								srcSize: gltf.scene.userData.srcSize,
								click: params.click
							});
							task(msc);
						});
						const msc = new ModelSugarCoating({
							url,
							meta,
							value: gltf.scene,
							animations: gltf.animations,
							srcSize: gltf.scene.userData.srcSize,
							click
						});
						resolve(msc);
					})
				);
			}
		} else {
			console.log('资源使用缓存');
			const gltf = cloneGltf(gltfCacheMap.get(url));
			return new ModelSugarCoating({
				url,
				meta,
				value: gltf.scene,
				animations: gltf.animations,
				srcSize: gltf.scene.userData.srcSize,
				click
			});
		}
	});
const FBXModelLoader = ({ url, meta, forceLoad, click, decode = false }) =>
	__awaiter(void 0, void 0, void 0, function* () {
		if (forceLoad || !fbxCacheMap.get(url)) {
			const { fbx, srcSize } = yield loadFBXObj(url, decode);
			fbx.userData.srcSize = srcSize;
			if (!forceLoad) {
				fbxCacheMap.set(url, fbx);
			}
			return new ModelSugarCoating({
				url,
				meta,
				value: fbx,
				animations: fbx.animations,
				srcSize: fbx.userData.srcSize,
				click
			});
		} else {
			console.log('资源使用缓存');
			const fbx = fbxCacheMap.get(url).clone();
			return new ModelSugarCoating({
				url,
				meta,
				value: fbx,
				animations: fbx.animations,
				srcSize: fbx.userData.srcSize,
				click
			});
		}
	});
const track = (resource) => {
	if (!resource) {
		return;
	}
	if (Array.isArray(resource)) {
		resource.forEach((resource) => track(resource));
		return;
	}
	if (resource.dispose) {
		resources.add(resource);
		return;
	}
	if (resource instanceof THREE.Object3D) {
		resources.add(resource);
		track(resource.children);
		if (resource instanceof THREE.Mesh) {
			track(resource.geometry);
			track(resource.material);
		}
		return;
	}
	if (resource instanceof THREE.Material) {
		for (const key of Object.keys(resource)) {
			if (resource[key] instanceof THREE.Texture) {
				track(resource[key]);
			}
		}
		if (resource instanceof THREE.ShaderMaterial) {
			for (const key of Object.keys(resource.uniforms)) {
				const value = resource[key];
				if (value) {
					const uniformValue = value.value;
					if (uniformValue instanceof THREE.Texture || Array.isArray(uniformValue)) {
						track(uniformValue);
					}
				}
			}
		}
	}
	return;
};
const disposeAllResources = () => {
	for (const resource of resources) {
		if (resource instanceof THREE.Object3D) {
			if (resource.parent) {
				resource.parent.remove(resource);
			}
		}
		if (resource.dispose && typeof resource.dispose === 'function') {
			resource.dispose();
		}
	}
	console.log('清理内存空间');
	resources.clear();
	console.log('清理资源缓存');
	gltfCacheMap.clear();
	fbxCacheMap.clear();
	taskMap.clear();
	taskQue.length = 0;
};

const AnimationMixersTask = [];
const AnimationCreator = (msc, clipName, loop) => {
	if (msc.animations && msc.animations.length > 0) {
		const mixer = new THREE.AnimationMixer(msc.value);
		for (let i = 0; i < msc.animations.length; i++) {
			const clip = msc.animations[i];
			if (clip.name === clipName) {
				const action = mixer.clipAction(clip);
				action.loop = loop;
				action.play();
			}
		}
		console.log('添加播放动画');
		AnimationMixersTask.push(mixer);
		const finishCb = () => {
			console.log('动画播放完毕');
			AnimationMixersTask.splice(AnimationMixersTask.indexOf(mixer), 1);
			mixer.removeEventListener('finished', finishCb);
		};
		mixer.addEventListener('finished', finishCb);
	} else {
		console.log('模型无动画');
	}
};
const updateAnimation = (clock) => {
	const dt = clock.getDelta();
	if (AnimationMixersTask && AnimationMixersTask.length > 0) {
		AnimationMixersTask.forEach(function (mixer) {
			mixer.update(dt);
		});
	}
};

class EffectComposerHelper {
	constructor(renderer, scene, camera) {
		const canvas = renderer.domElement;
		this.effectComposer = new EffectComposer(renderer);
		const renderPass = new RenderPass(scene, camera);
		this.outlinePass = new OutlinePass(new THREE.Vector2(canvas.width, canvas.height), scene, camera);
		this.effectFXAA = new ShaderPass(FXAAShader);
		this.effectFXAA.uniforms['resolution'].value.set(1 / canvas.width, 1 / canvas.width);
		this.outlinePass.visibleEdgeColor.set(0xffffff);
		this.outlinePass.hiddenEdgeColor.set(0xaaaaaa);
		this.outlinePass.edgeStrength = 10;
		this.outlinePass.edgeGlow = 1;
		this.outlinePass.edgeThickness = 1;
		this.outlinePass.pulsePeriod = 1.8;
		this.outlinePass.usePatternTexture = false;
		this.outlinePass.downSampleRatio = 2;
		this.outlinePass.clear = true;
		this.effectComposer.addPass(renderPass);
		this.effectComposer.addPass(this.outlinePass);
		this.effectComposer.addPass(this.effectFXAA);
	}
	setHighLightModel(model) {
		if (this.outlinePass.selectedObjects.indexOf(model) === -1) {
			this.outlinePass.selectedObjects.push(model);
		}
	}
	removeHighLight(model) {
		const delIndex = this.outlinePass.selectedObjects.indexOf(model);
		if (delIndex > -1) {
			this.outlinePass.selectedObjects.splice(delIndex, 1);
		}
	}
	removeAllHighLight() {
		this.outlinePass.selectedObjects = [];
	}
}

class PickPosition {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}
class RaycasterHelper {
	constructor(canvas) {
		this._canvas = canvas;
		this._raycaster = new THREE.Raycaster();
		RaycasterHelper._inst = this;
	}
	static get inst() {
		if (!RaycasterHelper._inst) {
			console.log('无 ray inst 请调用构造器');
		}
		return RaycasterHelper._inst;
	}
	click(event, scene, camera, mark) {
		return RaycasterHelper.inst.pick(event, scene, camera, true);
	}
	clickWithMark(event, scene, camera, mark) {
		return RaycasterHelper.inst.pick(event, scene, camera, true, mark);
	}
	pickPoint(event, scene, camera) {
		const pickPosition = RaycasterHelper.getCanvasRelativePosition(event, RaycasterHelper.inst._canvas);
		let normalizedPosition;
		normalizedPosition = {
			x: (pickPosition.x / RaycasterHelper.inst._canvas.scrollWidth) * 2 - 1,
			y: (pickPosition.y / RaycasterHelper.inst._canvas.scrollHeight) * -2 + 1
		};
		const ray = RaycasterHelper.inst._raycaster;
		ray.setFromCamera(normalizedPosition, camera);
		const intersectedObjects = ray.intersectObjects(scene.children);
		if (intersectedObjects.length) {
			return intersectedObjects[0].point;
		}
	}
	pickPointWithIgnore(event, scene, camera, ignoreObject) {
		const pickPosition = RaycasterHelper.getCanvasRelativePosition(event, RaycasterHelper.inst._canvas);
		let normalizedPosition;
		normalizedPosition = {
			x: (pickPosition.x / RaycasterHelper.inst._canvas.scrollWidth) * 2 - 1,
			y: (pickPosition.y / RaycasterHelper.inst._canvas.scrollHeight) * -2 + 1
		};
		const ray = RaycasterHelper.inst._raycaster;
		ray.setFromCamera(normalizedPosition, camera);
		const intersectedObjects = ray.intersectObjects(scene.children);
		if (intersectedObjects.length) {
			let point;
			for (let i = 0; i < intersectedObjects.length; i++) {
				if (RaycasterHelper.getThreeObject3D(intersectedObjects[i].object) !== ignoreObject) {
					point = intersectedObjects[i].point;
					break;
				}
			}
			return point;
		}
	}
	pick(event, scene, camera, autoClick = false, mark = '') {
		const pickPosition = RaycasterHelper.getCanvasRelativePosition(event, RaycasterHelper.inst._canvas);
		let normalizedPosition;
		normalizedPosition = {
			x: (pickPosition.x / RaycasterHelper.inst._canvas.scrollWidth) * 2 - 1,
			y: (pickPosition.y / RaycasterHelper.inst._canvas.scrollHeight) * -2 + 1
		};
		const ray = RaycasterHelper.inst._raycaster;
		ray.setFromCamera(normalizedPosition, camera);
		const intersectedObjects = ray.intersectObjects(scene.children);
		if (intersectedObjects.length) {
			for (let i = 0; i < intersectedObjects.length; i++) {
				if (mark) {
					const userData = RaycasterHelper.getThreeObject3D(intersectedObjects[i].object).userData;
					if (userData.mark === mark && !userData.pickIgnore) {
						return RaycasterHelper.getObject(intersectedObjects[i].object, autoClick);
					}
				} else {
					if (!RaycasterHelper.getThreeObject3D(intersectedObjects[i].object).userData.pickIgnore) {
						return RaycasterHelper.getObject(intersectedObjects[i].object, autoClick);
					}
				}
			}
		}
	}
	static getThreeObject3D(obj) {
		if (obj.parent && obj.parent.type === 'Scene') {
			return obj;
		} else {
			return RaycasterHelper.getThreeObject3D(obj.parent);
		}
	}
	static getObject(obj, autoClick) {
		if (obj._click && typeof obj._click === 'function') {
			if (obj.parent && obj.parent.type === 'Scene') {
				obj._click(obj, modelReflectWeakMap.get(obj));
			} else {
				obj._click(obj, RaycasterHelper.getObject(obj.parent, autoClick));
			}
		}
		if (obj.parent && obj.parent.type === 'Scene') {
			const msc = modelReflectWeakMap.get(obj);
			if (autoClick && msc && msc.click && typeof msc.click === 'function') {
				msc.click(obj, msc);
			}
			return msc;
		} else {
			return RaycasterHelper.getObject(obj.parent, autoClick);
		}
	}
	static getCanvasRelativePosition(event, canvas) {
		const rect = canvas.getBoundingClientRect();
		return new PickPosition(
			((event.clientX - rect.left) * canvas.scrollWidth) / rect.width,
			((event.clientY - rect.top) * canvas.scrollHeight) / rect.height
		);
	}
}

class Exporter {
	constructor() {
		this.exporter = new GLTFExporter();
	}
	export(input, filename) {
		return new Promise((resolve) => {
			this.exporter.parse(
				input,
				function (result) {
					let file;
					if (result instanceof ArrayBuffer) {
						file = Exporter.saveArrayBuffer(result, filename);
					} else {
						const output = JSON.stringify(result, null, 2);
						file = Exporter.saveString(output, filename);
					}
					resolve(file);
				},
				{
					truncateDrawRange: true
				}
			);
		});
	}
	static saveArrayBuffer(buffer, filename) {
		return {
			file: new Blob([buffer], { type: 'application/octet-stream' }),
			filename
		};
	}
	static saveString(text, filename) {
		return {
			file: new Blob([text], { type: 'text/plain' }),
			filename
		};
	}
}

var index = {
	THREE,
	ModelLoader,
	track,
	disposeAllResources,
	RaycasterHelper,
	Exporter,
	EffectComposerHelper,
	updateAnimation,
	AnimationCreator,
	threeUtils
};

export { index as default };
