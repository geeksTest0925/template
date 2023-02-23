// 全部菜单数据
export const mockMenuDatas = [
    {
        id: 1,
        name: "首页",
        icon: "InboxOutlined",
        alias: 'HOME_DETAIL'
    },
    {
        id: "10000011",
        name: "用户管理",
        icon: "InboxOutlined",
        alias: '404',
        path: '/user',
        children: [
            {
                id: "10000020",
                name: "修改信息",
                alias: 'COMPOSER_LIST',
                path: "/cms/user/pageCreateMan?&0.1585205112982644"
            },
            {
                id: "10000030",
                name: "创建信息",
                alias: 'CHECK_PENDING_LIST',
                path: "/cms/user/pageCreateMan?&0.1585205112982644"
            },
            {
                id: "10000040",
                name: "操作记录",
                alias: "OPERATING_LIST",
                path: "/cms/user/getReviewLogs"
            }
        ]
    },
];