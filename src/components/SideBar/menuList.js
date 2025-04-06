
export default [
	{
		icon: '主页',
		index: '/home',
		title: '主页',
		key: '1'
	},
	{
		icon: 'dashboard',
		index: '/dashboard',
		title: 'Dashboard',
		key: '2'
	},
	{
		icon: '基础表格',
		index: '/demo',
		title: '基础表格',
		key: '3',
		children: [
			{
				index: '/demo/editor',
				title: '富文本编辑器',
				key: '4',
				icon: '富文本编辑器',
			},
			{
				index: '/demo/ueditor',
				title: 'markdown编辑器',
				key: '5',
				icon: 'markdown编辑器',
			}
		]
	},
	{
		icon: '三级菜单示例',
		index: '/sys',
		title: '三级菜单示例',
		key: '6',
		children: [
			{
				icon: '角色管理',
				index: '/sys/roles',
				title: '角色管理',
				key: '7'
			},
			{
				icon: '菜单管理',
				index: '/sys/menu',
				title: '菜单管理',
				key: '8'
			},
			{
				icon: 'SQL监控',
				index: '/sys/sql',
				title: 'SQL监控',
				key: '9'
			},
			{
				icon: '用户管理',
				index: '/sys/user',
				title: '用户管理',
				key: '10'
			},
			{
				icon: '系统日志',
				index: '/sys/log',
				title: '系统日志',
				key: '11'
			},
			{
				icon: '自定义图标',
				index: '/icons',
				title: '自定义图标',
				key: '12'
			}
		]
	},
	{
		icon: '错误处理',
		index: '/errors',
		title: '错误处理',
		key: '13',
		children: [
			{
				icon: '权限测试',
				index: '/main/permission',
				title: '权限测试',
				key: '14'
			},
			{
				icon: '404页面',
				index: '/error/404',
				title: '404页面',
				key: '15'
			}
		]
	}
];
