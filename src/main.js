import { createApp } from 'vue';
import 'core-js/stable';
import App from './App';
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import heretoUI from '../hereto-ui/index.js';
import '../hereto-ui/index.css';
import { AuthDirective } from './auth';

const app = createApp(App);
// 刷新时设置权限自定义指令
new AuthDirective(app);

app.use(router).use(Antd).use(heretoUI).mount('#app');
export default app;
