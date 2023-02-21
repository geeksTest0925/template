<template>
    <AutchCodeLogin :submitLogin="handleSubmit" :disabled="true"></AutchCodeLogin>
</template>

<script setup>
import AutchCodeLogin from "@/components/authCodeLogin";
import { authInit } from "@/auth";
import { message } from "ant-design-vue";
import store from "@/store";
import { useRouter } from "vue-router";

const router = useRouter();
const handleSubmit = (formState) => {
    store.dispatch("account/loginByNameAndPwd", formState).then(async () => {
        // 设置权限自定义指令
        await authInit();
        store.commit("account/SET_LOGIN_LOADING", false)
        router.push({ name: "HOME_DETAIL" });
    })
    .catch((err) => {
        store.commit("account/SET_LOGIN_LOADING", false)
        message.error(err);
    });
}
</script>