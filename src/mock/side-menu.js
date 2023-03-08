// 全部菜单数据
export const mockMenuDatas = [
	{
		id: 1,
		name: '首页',
		icon: 'MailOutlined',
		alias: 'HOME_DETAIL'
	},
	{
		id: 2,
		name: 'subnav', // 菜单名称
		icon: 'MailOutlined',
		alias: '',
		children: [
			{
				id: 201,
				name: 'option1', // 菜单名称
				alias: 'OPTION1_LIST', // 菜单别名
				action: 0, // 操作按钮类型
				actionName: '',
				category: 1, // 菜单类型
				code: '', // 菜单编号
				component: '',
				hasChildren: false,
				isDeleted: 0, // 是否已删除
				isOpen: 1, // 是否打开新页面
				isOpenName: '',
				parentId: '2',
				parentName: '',
				path: '/', // 请求地址
				productId: 0, // 产品id
				remark: '', // 备注
				sort: 201,
				source: 'iconfont iconicon_GPS' // 菜单资源
			},
			{
				id: 202,
				name: 'option2',
				alias: 'OPTION2_LIST',
				action: 0,
				actionName: '',
				category: 1,
				code: '',
				component: '',
				hasChildren: false,
				isDeleted: 0,
				isOpen: 1,
				isOpenName: '',
				parentId: '2',
				parentName: '',
				path: '/',
				productId: 0,
				remark: '',
				sort: 202,
				source: 'iconfont iconicon_GPS'
			},
			{
				id: 203,
				name: 'options3',
				alias: 'OPTION3_LIST',
				action: 0,
				actionName: '',
				category: 1,
				code: '',
				component: '',
				hasChildren: false,
				isDeleted: 0,
				isOpen: 1,
				isOpenName: '',
				parentId: '2',
				parentName: '',
				path: '/',
				productId: 0,
				remark: '',
				sort: 203,
				source: 'iconfont iconicon_GPS'
			}
		]
	}
];
