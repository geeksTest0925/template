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
		alias: '404',
		children: [
			{
				id: 201,
				name: 'option1',
				alias: 'OPTION1_LIST',
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
				sort: 201,
				source: 'iconfont iconicon_GPS'
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
