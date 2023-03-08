<template>
	<a-layout>
		<a-layout-sider width="210" class="a-sider">
			<global-sider></global-sider>
			<div class="sign-out-box">
				<global-sign-out />
			</div>
		</a-layout-sider>
		<a-layout class="container">
			<a-layout-content>
				<slot></slot>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>

<script>
import GlobalSider from '../common/GlobalSider';
import GlobalFooter from '../common/GlobalFooter';
import GlobalSignOut from './GlobalSignOut';

let menuData = [];

export default {
	name: 'PortalLayout',
	components: { GlobalSider, GlobalFooter, GlobalSignOut },
	data() {
		return {
			menuData: menuData
		};
	}
};
</script>

<style lang="less" scoped>
.a-sider {
	height: 100vh;
	overflow-y: scroll;
}
.sign-out-box {
	word-break: break-all;
	position: fixed;
	bottom: 20px;
	left: 20px;
}
.container {
	position: relative;
	height: 100vh;
	overflow-y: scroll;
	background-color: #212332;
	width: auto !important;
	.title {
		font-size: 24px;
		font-weight: 600;
		margin: 50px 0;
	}
}
.footer {
	.copyright {
		color: #fff;
		font-size: 14px;
		i {
			font-size: 0.8rem !important;
		}
		:deep(span),
		:deep(span a) {
			color: #fff;
		}
	}
}
.forbid-wrap {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 9999;
}
::-webkit-scrollbar {
	width: 12px;
	height: 12px;
}
::-webkit-scrollbar-button {
	width: 0px;
	height: 0px;
	display: none;
}
::-webkit-scrollbar-corner {
	background-color: transparent;
}
::-webkit-scrollbar-thumb {
	border: 4px solid rgba(0, 0, 0, 0);
	height: 6px;
	border-radius: 25px;
	background-clip: padding-box;
	background-color: rgba(0, 0, 0, 0.3);
}
</style>
