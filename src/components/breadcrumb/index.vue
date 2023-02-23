<template>
    <!-- 面包屑组件 -->
    <div class="breadcrumb-container">
        <a-breadcrumb>
            <a-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index" @click="change(item.path)">{{ item.name }}</a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
    breadcrumbData: {
        type: Array,
        default: () => [],
    },
});
const breadcrumb = props.breadcrumbData;
console.log(breadcrumb, 'breadcrumb');
const change = (path) => {
    if (router.currentRoute.value.fullPath === path) return;
    router.push(path);
};
</script>

<style scoped lang="less">
.breadcrumb-container {
    margin-top: 30px;
    :deep(.ant-breadcrumb) > span {
        color: rgba(255, 255, 255, 0.5);
        cursor: pointer;
    }
    span:last-child {
        font-size: 16px;
        color: rgba(255, 255, 255, 2);
    }
    :deep(.ant-breadcrumb-separator) {
        margin-right: 14px;
        margin-left: 6px;
    }
}
</style>
