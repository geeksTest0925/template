<template>
    <a-dropdown class="sign-out-select" overlayClassName="sign-out-dropdown" placement="topRight">
        <a class="ant-dropdown-link" @click.prevent>
            {{ userInfo.nick_name }}
            <DownOutlined />
        </a>
        <template #overlay>
            <a-menu @click="clickMenuItem">
                <a-menu-item key="logout">退出</a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>

<script setup>
import { DownOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { computed } from 'vue'
import store from '@/store'
import { useRouter } from 'vue-router'
const router = useRouter()
const userInfo = computed(() => {
    return store.getters.userInfo
})
const clickMenuItem = ({ key }) => {
    if (key === 'logout') {
        onOk()
    }
}
const onOk = () => {
    store
        .dispatch('account/LogOut')
        .then(() => {
            router.replace({ path: '/login' })
        })
        .catch(err => {
            message.error(err.msg)
        })
}
</script>

<style lang="less" scoped>
.sign-out-select {
    width: 170px;
    height: 48px;
    display: block;
    font-size: 14px;
    background: rgba(50, 55, 74, 1);
    border-radius: 60px;
    text-align: center;
    line-height: 48px;
    .anticon-down {
        margin-left: 6px;
    }
}

.ant-dropdown-open {
    border: 1px solid #1890ff;
}
</style>
