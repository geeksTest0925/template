<template>
    <!-- 操作记录时间筛选 -->
    <a-range-picker :locale="locale" class="com-range-picker" v-bind="$attrs" showToday />
</template>
<script setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import zhCN from 'ant-design-vue/es/date-picker/locale/zh_CN'
dayjs.locale('zh-cn')
const locale = ref(zhCN)
</script>
<style lang="less" scoped>
.com-range-picker {
    margin-left: 24px;
    background: rgba(33, 35, 50, 1);
    :deep(.ant-picker-suffix) {
        color: #fff;
    }
    :deep(.ant-picker-range-separator) {
        span {
            color: #fff;
        }
    }
    v-deep .ant-picker-input-active > input {
        color: #fff;
    }
    :deep(.ant-picker-input > input) {
        color: #fff;
    }
    :deep(.ant-picker-clear) {
        background: rgba(33, 35, 50, 1);
        span {
            color: rgba(255, 255, 255, 0.8);
        }
    }
}
</style>
