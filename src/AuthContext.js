import { createContext } from "react";

// AuthContext 是在 React 中使用 Context API 来管理 身份验证 (Authentication) 状态的一种模式。

// 在一个应用中，AuthContext 通常用于： ✅ 管理用户登录状态
// ✅ 提供全局的用户信息
// ✅ 控制页面访问权限（如重定向到登录页）
// ✅ 简化 props 传递，避免繁琐的 prop drilling
// AuthContext 适用于以下情况：

// 用户登录/登出功能
// 需要在多个组件中共享用户信息
// 权限控制和访问保护
// 多角色系统 (如管理员、普通用户等)

let AuthContext = createContext(null);

export default AuthContext

