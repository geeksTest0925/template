// 全部菜单数据
export const mockMenuDatas = [
    {
        id: 1,
        name: '首页',
        icon: 'MailOutlined',
        alias: 'HOME_DETAIL',
    },
    {
        id: 2,
        name: '用户管理',
        icon: 'MailOutlined',
        alias: '404',
        children: [
            {
                id: 201,
                name: '修改信息',
                alias: 'COMPOSER_LIST',
            },
            {
                id: 202,
                name: '创建信息',
                alias: 'CHECK_PENDING_LIST',
            },
            {
                id: 203,
                name: '操作记录',
                alias: 'OPERATING_LIST',
            },
        ],
    },
]
