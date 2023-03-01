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
		name: 'subnav',
		icon: 'MailOutlined',
		alias: '404',
		children: [
			{
				id: 201,
				name: 'option1',
				alias: 'OPTION1_LIST'
			},
			{
				id: 202,
				name: 'option2',
				alias: 'OPTION2_LIST'
			},
			{
				id: 203,
				name: 'options3',
				alias: 'OPTION3_LIST'
			}
		]
	}
];
