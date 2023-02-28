import { createApp } from 'vue';

import {
	Anchor,
	Button,
	Col,
	Collapse,
	DatePicker,
	Divider,
	Form,
	Icon,
	Input,
	InputNumber,
	Layout,
	List,
	Menu,
	Modal,
	Popover,
	Radio,
	Row,
	Select,
	Spin,
	Tabs,
	Tag,
	Upload,
	message,
	notification
} from 'ant-design-vue';

const app = createApp();

app.use(Anchor);
app.use(Button);
app.use(Col);
app.use(Collapse);
app.use(DatePicker);
app.use(Divider);
app.use(Form);
app.use(Icon);
app.use(Input);
app.use(InputNumber);
app.use(Layout);
app.use(List);
app.use(Menu);
app.use(Modal);
app.use(Popover);
app.use(Radio);
app.use(Row);
app.use(Select);
app.use(Spin);
app.use(Tabs);
app.use(Tag);
app.use(Upload);

app.config.globalProperties.$message = message;
app.config.globalProperties.$notification = notification;
app.config.globalProperties.$confirm = Modal.confirm;
app.config.globalProperties.$error = Modal.error;
app.config.globalProperties.$info = Modal.info;
app.config.globalProperties.$success = Modal.success;
app.config.globalProperties.$warning = Modal.warning;
