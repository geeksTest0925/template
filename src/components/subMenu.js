import { Menu } from "ant-design-vue";
import { Icon } from "./icon";
const SubMenu = {
    template: `
        <a-sub-menu :key="menuInfo?.id" v-bind="$props" >
            <template #icon >
                <Icon :icon="menuInfo.icon||'MailOutlined'"></Icon>
            </template>
            <template #title>{{ menuInfo?.name }}</template>
            <template v-for="(item,index) in menuInfo?.children">
                <a-menu-item v-if="!item?.children" :key="item?.id">
                    <router-link :to="{ name: item?.alias }">
                    {{ item.name }}
                    </router-link>
                </a-menu-item>
                <sub-menu v-if='item?.children'  :menu-info="item"  :menu-key="menuKey+'-'+index" />
            </template>
        </a-sub-menu>
    `,
    name: "SubMenu",
    isSubMenu: true,
    components: { Icon },
    props: {
        ...Menu.SubMenu.props,
        menuInfo: {
            type: Object,
            default: () => ({}),
        },
        menuKey: {
            type: [Number, String],
            default: '',
        },
    }
};

export default SubMenu;
