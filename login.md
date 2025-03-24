1.login
app.js 
获取api初始化数据
负责加载样式、导航栏、页脚等全局内容
管理用户登录状态
路由的核心


const [user, setUser] = useState("");
setXXX不需要定义，可以直接改编传入的值

<Context.Provider value={value}>
提供给子组件使用，value是给子组件传递的内容，可以是值，方法等
所有子组件都可以使用




<Route path="/" element={
<ProtectedWrapper>
<Layout />
</ProtectedWrapper>
}>
child1
child2
</Route>
ProtectedWrapper可以做为登录安全组件，内部包裹子组件，登陆之前验证用户信息




2.how to push route?
-- original:
    history.push
-- react
 