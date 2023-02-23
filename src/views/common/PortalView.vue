<template>
    <portal-layout>
        <router-view v-slot="{ Component, route }">
            <keep-alive :include="['projectList']">
                <component :is="Component" :key="route.path" />
            </keep-alive>
        </router-view>
    </portal-layout>
</template>

<script setup>
import PortalLayout from './PortalLayout';
</script>

<style lang="less" scoped>
.banner {
    width: 100%;
    img {
        width: 100%;
    }
}
</style>
