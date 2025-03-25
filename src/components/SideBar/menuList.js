
export default [
	{
		icon: 'anticon-lx-cascades',
		index: '/home',
		title: '主页',
		key: '18'
	},
	{
		icon: 'anticon-lx-home',
		index: '/dashboard',
		title: 'Dashboard',
		key: '1'
	},
	{
		icon: 'anticon-lx-cascades',
		index: '/demo',
		title: '基础表格',
		key: '2',
		subs: [
			{
				index: '/demo/editor',
				title: '富文本编辑器',
				key: '11'
			},
			{
				index: '/demo/ueditor',
				title: 'markdown编辑器',
				key: '12'
			}
		]
	},
	{
		icon: 'anticon-lx-calendar',
		index: '/sys',
		title: '三级菜单示例',
		key: '4',
		subs: [
			{
				index: '/sys/roles',
				title: '角色管理',
				key: '5'
			},
			{
				index: '/sys/menu',
				title: '菜单管理',
				key: '6'
			},
			{
				index: '/sys/sql',
				title: 'SQL监控',
				key: '7'
			},
			{
				index: '/sys/user',
				title: '用户管理',
				key: '8'
			},
			{
				index: '/sys/log',
				title: '系统日志',
				key: '5'
			},
			{
				icon: 'anticon-lx-emoji',
				index: '/icons',
				title: '自定义图标',
				key: '3'
			}
		]
	},
	{
		icon: 'anticon-lx-warn',
		index: '/errors',
		title: '错误处理',
		key: '10',
		subs: [
			{
				index: '/main/permission',
				title: '权限测试',
				key: '11'
			},
			{
				index: '/error/404',
				title: '404页面',
				key: '12'
			}
		]
	}
];
