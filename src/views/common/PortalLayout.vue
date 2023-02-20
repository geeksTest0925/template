<template>
    <a-layout>
        <a-layout-sider width="210" class="a-sider">
            <global-sider></global-sider>
            <div class="sign-out-box">
                <global-sign-out />
            </div>
        </a-layout-sider>
        <a-layout class="container">
            <a-layout-content>
                <slot></slot>
            </a-layout-content>
            <!-- <global-footer :copyright="copyright" /> -->
        </a-layout>
    </a-layout>
    <div class="forbid-wrap" v-if="isUploading" @click="handleClick"></div>
</template>

<script>
import GlobalSider from '../common/GlobalSider'
import GlobalFooter from '../common/GlobalFooter'
import GlobalSignOut from './GlobalSignOut'
import { mapMutations, mapState } from 'vuex'
import db from '@/utils/sessionStorage'
import { UPLOAD_STATUS } from '../../consts/index'
import { message } from 'ant-design-vue'

let menuData = []

export default {
    name: 'PortalLayout',
    components: { GlobalSider, GlobalFooter, GlobalSignOut },
    data() {
        return {
            menuData: menuData,
        }
    },
    created() {
        const data = {}
        data.config = {
            color: '#ff6600',
            fixHeader: '1',
            fixSiderbar: '1',
            layout: 'head', //"side",
            multiPage: '0',
            theme: 'light',
        }
        this.saveLoginData(data)
    },
    computed: {
        ...mapState({
            systemName: (state) => state.setting.systemName,
            copyright: (state) => state.setting.copyright,
            uploadStatus: (state) => state.business.uploadStatus,
        }),
        isUploading() {
            return this.uploadStatus === UPLOAD_STATUS.uploading
        },
    },
    methods: {
        handleClick() {
            message.warning('文件上传中')
        },
        ...mapMutations({
            setTheme: 'setting/setTheme',
            setLayout: 'setting/setLayout',
            setMultipage: 'setting/setMultipage',
            fixSiderbar: 'setting/fixSiderbar',
            fixHeader: 'setting/fixHeader',
            setColor: 'setting/setColor',
            setUploadStatus: 'business/SET_UPLOADING',
        }),
        saveLoginData(data) {
            this.setTheme(data.config.theme)
            this.setLayout(data.config.layout)
            this.setMultipage(data.config.multiPage === '1')
            this.fixSiderbar(data.config.fixSiderbar === '1')
            this.fixHeader(data.config.fixHeader === '1')
            this.setColor(data.config.color)
        },
    },
}
</script>

<style lang="less" scoped>
.a-sider {
    height: 100vh;
    overflow-y: scroll;
}
.sign-out-box {
    word-break: break-all;
    position: fixed;
    bottom: 20px;
    left: 20px;
}
.container {
    position: relative;
    height: 100vh;
    overflow-y: scroll;
    // display: flex;
    // align-items: center;
    // flex-direction: column;
    // min-height: calc(100vh - 160px);
    // width: 100%;
    // margin: 0 auto;
    // padding-top: 64px;
    // padding-bottom: 80px;
    background-color: #212332;
    width: auto !important;
    .title {
        font-size: 24px;
        font-weight: 600;
        margin: 50px 0;
    }
}
.footer {
    .copyright {
        color: #fff;
        font-size: 14px;
        i {
            font-size: 0.8rem !important;
        }
        :deep(span),
        :deep(span a) {
            color: #fff;
        }
    }
}
.forbid-wrap {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
}
::-webkit-scrollbar {
    width: 12px;
    height: 12px;
}
::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
    display: none;
}
::-webkit-scrollbar-corner {
    background-color: transparent;
}
::-webkit-scrollbar-thumb {
    border: 4px solid rgba(0, 0, 0, 0);
    height: 6px;
    border-radius: 25px;
    background-clip: padding-box;
    background-color: rgba(0, 0, 0, 0.3);
}
</style>
