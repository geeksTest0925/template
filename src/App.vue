<template>
	<a-config-provider :locale="Chinese">
		<router-view />
	</a-config-provider>
</template>

<script setup>
import { ConfigProvider } from 'ant-design-vue';
import chinese from 'ant-design-vue/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import { onMounted } from 'vue';

const Chinese = chinese;
onMounted(() => {
	if ('-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style) {
		window.addEventListener(
			'hashchange',
			() => {
				const currentPath = window.location.hash.slice(1);
				if (this.$route.path !== currentPath) {
					this.$router.push(currentPath);
				}
			},
			false
		);
	}

	const keyCodeMap = {
		// 91: true, // command
		61: true,
		107: true, // 数字键盘 +
		109: true, // 数字键盘 -
		173: true, // 火狐 - 号
		187: true, // +
		189: true // -
	};
	// 覆盖ctrl||command + ‘+’/‘-’
	document.onkeydown = function (event) {
		const e = event || window.event;
		const ctrlKey = e.ctrlKey || e.metaKey;
		if (ctrlKey && keyCodeMap[e.keyCode]) {
			e.preventDefault();
		} else if (e.detail) {
			// Firefox
			event.returnValue = false;
		}
	};
	// 覆盖鼠标滑动
	document.body.addEventListener(
		'wheel',
		(e) => {
			if (e.ctrlKey) {
				if (e.deltaY < 0) {
					e.preventDefault();
					return false;
				}
				if (e.deltaY > 0) {
					e.preventDefault();
					return false;
				}
			}
		},
		{ passive: false }
	);
});
</script>

<style lang="less"></style>
