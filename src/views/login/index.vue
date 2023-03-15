<template>
	<AuthCodeLogin :submitLogin="handleSubmit" :logoUrl="logoUrl" otherLoginWay="verifyCode"></AuthCodeLogin>
</template>

<script setup>
import AuthCodeLogin from '@/components/authCodeLogin';
import { authInit } from '@/auth';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { IS_SERVE } from '@/consts/index';
import { mobileCodeLogin } from '@/api/public';
import localS from '@/utils/localStorage';
// LOGO背景
const logoUrl = require('../../assets/image/login/img_logo.png');
const router = useRouter();
const handleSubmit = async (formState) => {
	// 设置权限自定义指令
    console.log(formState, '登录表单信息...');
    try {
        // if (IS_SERVE) await authInit();
        const result = await mobileCodeLogin(formState);
        localS.save('TOKEN', result.data.access_token);
        localS.save('USER_INFO', result.data);
        router.push({ name: "HOME_DETAIL" });
    } catch (error) {
        
    }
    
};
</script>
