<template>
    <div class="m-nodata" :class="{ light: props.isLight }">
        <img v-if="isLight" src="static/img/no-data-light.svg" alt />
        <img v-else src="static/img/no-data.svg" alt />
        <div class="m-nodata-text">暂无数据</div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    isLight: {
        type: Boolean
    }
})
</script>

<style lang="less" scoped>
.m-nodata {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &-text {
        margin-top: 24px;
        color: rgba(255, 255, 255, 0.8);
    }
    &.light {
        .m-nodata-text {
            color: rgba(0, 0, 0, 0.65);
        }
    }
}
</style>
