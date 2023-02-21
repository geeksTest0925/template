<template>
    <div class="go-list-page-message" v-if="props.visible">
        <div class="top">
            <div class="icon">
                <img src="../assets/image/icon_checkmark_circle.png" />
            </div>
            <div class="title">{{ props.title }}</div>
        </div>
        <div class="content" v-if="props.content">
            {{ props.content }}
        </div>
        <div class="tip">{{ time }}{{ props.tip }}</div>
    </div>
</template>
<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue'
const props = defineProps({
    tip: {
        type: String,
        default: () => '',
    },
    content: {
        type: String,
        default: () => '',
    },
    title: {
        type: String,
        default: () => '',
    },
    duration: {
        type: Number,
        default: () => 2,
    },
    visible: {
        type: Boolean,
        default: () => false,
    },
})
const emit = defineEmits(['update:visible'])
let ClearTime = null
let time = ref(props.duration)
watch(
    () => props.visible,
    (val) => {
        if (val) {
            ClearTime = setInterval(() => {
                if (time.value > 1) {
                    time.value--
                } else {
                    emit('update:visible', false)
                    time.value = props.duration
                    clearInterval(ClearTime)
                    return
                }
            }, 1000)
        }
    }
)
</script>
<style lang="less" scoped>
.go-list-page-message {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    z-index: 999999;
    box-shadow: 0px 0px 6px 0px rgba(42, 130, 228, 0.2);
    border-radius: 6px;
    padding: 15px 20px;
    box-sizing: border-box;
    .top {
        display: flex;
        align-items: center;
        .icon {
            width: 22px;
            height: 22px;
            img {
                width: 100%;
                display: block;
            }
        }
        .title {
            margin-left: 8px;
            color: rgba(0, 0, 0, 1);
            font-size: 16px;
        }
    }
    .content {
        color: rgba(89, 89, 89, 1);
        font-size: 14px;
        margin-left: 32px;
        margin-top: 5px;
    }
    .tip {
        color: rgba(255, 125, 0, 1);
        font-size: 12px;
        margin-top: 7px;
        margin-left: 30px;
    }
}
</style>
