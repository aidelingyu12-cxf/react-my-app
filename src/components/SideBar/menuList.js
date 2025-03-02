export default [
	{
		icon: 'anticon-lx-home',
		index: '/main/dashboard',
		title: 'Dashboard'
	},
	{
		icon: 'anticon-lx-cascades',
		index: '/main/demo',
		title: '基础表格'
	},
	{
		icon: 'anticon-lx-emoji',
		index: '/main/icons',
		title: '自定义图标'
	},
	{
		icon: 'anticon-lx-calendar',
		index: '/sys',
		title: '三级菜单示例',
		subs: [
			{
				index: '/sys/roles',
				title: '角色管理'
			},
			{
				index: '/sys/menues',
				title: '菜单管理'
			},
			{
				index: '/sys/sql',
				title: 'SQL监控',
				subs: [
					{
						index: '/sys/editor',
						title: '富文本编辑器'
					},
					{
						index: '/sys/markdown',
						title: 'markdown编辑器'
					}
				]
			}
		]
	},
	{
		icon: 'anticon-lx-warn',
		index: '/errors',
		title: '错误处理',
		subs: [
			{
				index: '/main/permission',
				title: '权限测试'
			},
			{
				index: '/error/404',
				title: '404页面'
			}
		]
	}
];