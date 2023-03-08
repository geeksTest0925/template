<template>
	<AuthCodeLogin :submitLogin="handleSubmit" :logoUrl="logoUrl" otherLoginWay="verifyCode"></AuthCodeLogin>
</template>

<script setup>
import AuthCodeLogin from '@/components/authCodeLogin';
import { authInit } from '@/auth';
import { message } from 'ant-design-vue';
import store from '@/store';
import { useRouter } from 'vue-router';
import { IS_SERVE } from '@/consts/index';

// LOGO背景
const logoUrl = require('../../assets/image/login/img_logo.png');
const router = useRouter();
const handleSubmit = (formState) => {
	// 设置权限自定义指令
	// if (IS_SERVE) await authInit();
	console.log(formState, '登录表单信息...');
};
</script>
