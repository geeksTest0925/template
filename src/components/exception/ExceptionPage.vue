<template>
	<div class="exception">
		<div class="content">
			<div class="img">
				<img :src="config[type].img" />
			</div>
			<div class="desc">{{ config[type].desc }}</div>
			<div class="action">
				<a-button type="primary" @click="returnHome">带我回首页</a-button>
			</div>
		</div>
	</div>
</template>

<script>
import Config from './typeConfig';

export default {
	name: 'ExceptionPage',
	props: ['type'],
	data() {
		return {
			config: Config
		};
	},
	methods: {
		returnHome() {
			this.$router.push('/');
		}
	}
};
</script>

<style lang="less" scoped>
.exception {
	min-height: 500px;
	height: 80%;
	align-items: center;
	text-align: center;
	margin-top: 150px;
	.img {
		display: inline-block;
		zoom: 1;
	}
	.content {
		display: inline-block;
		flex: auto;
		h1 {
			color: #434e59;
			font-size: 72px;
			font-weight: 600;
			line-height: 72px;
			margin-bottom: 24px;
		}
		.desc {
			color: rgba(0, 0, 0, 0.45);
			font-size: 20px;
			line-height: 28px;
			margin-bottom: 16px;
		}
	}
}
</style>
