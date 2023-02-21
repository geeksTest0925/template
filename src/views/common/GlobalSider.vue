<template>
    <div class="a-logo">
        <router-link :to="{ name: 'HOME_DETAIL' }">
            后台管理
        </router-link>
    </div>
    <div style="width: 200px" class="side-menu-container">
        <a-menu mode="inline" theme="dark" :openKeys="openKeys" :selectedKeys="selectedKeys" @openChange="openChange" @select="handleSelect">
            <template v-for="(menu, index) in userMenu" :key="index">
                <a-menu-item v-if="!menu?.children || menu?.children?.length <= 0" :key="menu?.id" @click="handleMenuItem(menu?.id)" style="text-align: left">
                    <Icon style="margin-left: 24px" :icon="menu.icon || 'MailOutlined'"></Icon>
                    <router-link style="margin-left: 10px" :to="{ name: menu?.alias }">
                        {{ menu.name }}
                    </router-link>
                </a-menu-item>
                <sub-menu v-else :menu-info="menu" :menu-key="index" />
            </template>
        </a-menu>
    </div>
</template>

<script>
import { defineComponent, reactive, toRefs, watch } from 'vue'
import SubMenu from '@/components/subMenu'
import { Icon } from '@/components/icon'
import store from '@/store'
import { mockMenuDatas } from '@/mock/side-menu'
import { getRoleMenuData, defaultMenu, defaultMenuTail } from "@/auth/index";
import { isUndefined } from '@/utils/validate'
import { useRoute } from 'vue-router'
import { IS_SERVE } from '@/consts/index'
export default defineComponent({
    components: {
        SubMenu,
        Icon,
    },
    setup(props) {
        const route = useRoute()
        watch(
            () => route.meta,
            (val) => {
                // console.log(val, 'routename')
            },
            {
                immediate: true,
            }
        )

        const state = reactive({
            openKeys: store?.state?.auth?.currentMenu?.openKeys || [1],
            selectedKeys: store?.state?.auth?.currentMenu?.selectedKeys || [1],
            userMenu: IS_SERVE ? (store?.state?.auth?.userMenu || [...defaultMenu, ...defaultMenuTail]) : mockMenuDatas,
        })

        watch(
            () => store?.state?.auth?.currentMenu,
            (newvalue, oldvalue) => {
                state.selectedKeys = newvalue?.selectedKeys
                state.openKeys = newvalue?.openKeys
            },
            {
                deep: true,
            }
        )

        watch(
            () => store?.state?.auth?.userMenu,
            (newvalue, oldvalue) => {
                state.userMenu = newvalue
            },
            {
                deep: true,
            }
        )

        // 获取当前用户角色配置的菜单
        const getMenuInfo = async () => {
            try {
                const useMenuInfo = await getRoleMenuData()
                state.userMenu = useMenuInfo
            } catch (error) {
                console.log('error', error)
            }
        }
        // getMenuInfo();

        const updateCurrentMenu = ({ openKeys = [], selectedKeys = [] }) => {
            store.dispatch('auth/setCurrentMenu', { openKeys, selectedKeys })
        }
        const openChange = (openKeys) => {
            // console.log("openKeys==", openKeys);
            const length = openKeys?.length
            const lastValue = openKeys[length - 1]
            state.selectedKeys = []
            state.openKeys = [lastValue]
            updateCurrentMenu({ openKeys: [lastValue] })
        }
        const handleSelect = ({ item, key, selectedKeys }) => {
            // console.log('item, key, selectedKeys',item, key, selectedKeys)
            state.selectedKeys = selectedKeys
            updateCurrentMenu({ openKeys: state.openKeys, selectedKeys })
        }
        const handleMenuItem = (key) => {
            state.openKeys = !isUndefined(key) ? [key] : []
            updateCurrentMenu({
                openKeys: !isUndefined(key) ? [key] : [],
                selectedKeys: state.selectedKeys,
            })
        }

        return { ...toRefs(state), openChange, handleSelect, handleMenuItem }
    },
})
</script>

<style lang="less" scoped>
.a-logo {
    height: 120px;
    // margin-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    .anticon {
        margin-right: 12px;
    }
}
:deep(.ant-menu-dark.ant-menu-inline .ant-menu-item) {
    font-size: 14px;
}
:deep(.ant-menu-dark .ant-menu-inline.ant-menu-sub) {
    background: #2a2d3e;
}
:deep(
        .ant-menu-dark .ant-menu-item:hover,
        .ant-menu-dark .ant-menu-item-active,
        .ant-menu-dark .ant-menu-submenu-active,
        .ant-menu-dark .ant-menu-submenu-open,
        .ant-menu-dark .ant-menu-submenu-selected,
        .ant-menu-dark .ant-menu-submenu-title:hover
    ) {
    background-color: #7fa5db;
    color: #fff;
}
</style>
