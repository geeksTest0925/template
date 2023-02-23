<template>
    <div class="page-container" :style="{ width: screenWidth + 'px' }">
        <!-- 面包屑 -->
        <slot name="crumbs"></slot>
        <div class="page-wrap">
            <div class="page-wrap-list" v-if="isDetail">
                <!-- 表格 + 搜索区 -->
                <div>
                    <slot name="content"></slot>
                </div>
                <!-- 页码 -->
                <div class="page-footer">
                    <slot name="pagination"></slot>
                </div>
            </div>
            <!-- 详情页 -->
            <div class="page-wrap-detail" v-else>
                <slot name="detail"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isDetail: {
        type: Boolean,
        default: true,
    },
});
// const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth - 210;
</script>

<style scoped lang="less">
.page-container {
    min-width: 1300px;
    padding: 0px 20px 10px 16px;
    .page-wrap {
        width: 100%;
        min-height: calc(100vh - 95px);
        color: #fff;
        background: rgba(42, 45, 62, 1);
        border-radius: 12px;
        margin-top: 20px;
        &-list {
            min-height: calc(100vh - 95px);
            padding: 0px 20px 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .page-footer {
                width: 100%;
                height: 100px;
                display: flex;
                justify-content: flex-end;
                padding-right: 20px;
                box-sizing: border-box;
            }
        }
        &-detail {
            padding: 20px 0 20px;
        }
    }
}
</style>
