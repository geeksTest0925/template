<template>
    <AuthCodeLogin :submitLogin="handleSubmit" :submitRegister="handleRegister" :logoUrl="logoUrl" :isRegister="false"></AuthCodeLogin>
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
    store
        .dispatch('account/loginByNameAndPwd', formState)
        .then(async () => {
            // 设置权限自定义指令
            if (IS_SERVE) await authInit();
            store.commit('account/SET_LOGIN_LOADING', false);
            router.push({ name: 'HOME_DETAIL' });
        })
        .catch((err) => {
            store.commit('account/SET_LOGIN_LOADING', false);
            message.error(err);
        });
};
const handleRegister = (formState) => {
    console.log(formState,'formState.....');
}
</script>