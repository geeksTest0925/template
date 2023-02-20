import { createApp } from 'vue'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import App from './App'
import router from './router'
import store from './store'
import { mEmpty } from './plugins/Empty/index'
import Antd from 'ant-design-vue'
// import 'utils/lazy_antd.js'
import 'ant-design-vue/dist/antd.less'
import '../public/static/less/Color.less'
import '../public/static/less/Common.less'
import heretoUI from '../hereto-ui/index.js';
import '../hereto-ui/index.css';
import { AuthDirective } from "./auth";
import { trackIns } from "@/track";

const app = createApp(App)
const userId = store.state.account.userInfo.user_id
// console.log(store.state.account.userInfo.user_id, 'store.state.account.userInfo.user_id');
if (userId) {
    // 监控平台埋点pv上报
    trackIns.pageViewTrack(userId)
}
// 刷新时设置权限自定义指令
new AuthDirective(app);

app.use(router)
    .use(store)
    .use(Antd)
    .use(heretoUI)
    .use(mEmpty)
    .mount('#app')
export default app;