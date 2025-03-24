1.how to fill the screen with background picture?
--  background-size: cover;
--  background-position: center;

2.how to push route?
-- original:
    history.push
-- react
    <Link to=""></Link>
    <Route></Route>



login


React props 概念及使用总结
props（Properties）是 React 组件中用于在父组件向子组件传递数据的重要机制。它是组件复用和交互的关键，具有以下特点：

1. props 的核心特点
props 是只读的，子组件无法直接修改 props 的值。
props 采用单向数据流（从父组件到子组件），确保数据流向清晰。
props 可传递多种数据类型，包括字符串、数字、布尔值、对象、数组、函数、JSX 组件等。
props 常用于将数据、事件处理函数、UI 配置等参数传递给子组件。
2. props 的常见应用场景
（1）传递基本数据
props 常用于向子组件传递简单数据，如文本、数字或布尔值，以动态渲染组件内容。

（2）传递对象或数组
在复杂场景中，props 可用于传递更复杂的数据结构，如对象或数组。通过这种方式，子组件可以轻松获取和渲染来自父组件的数据。

（3）传递 JSX 组件
props 可用于将 JSX 作为参数传递，帮助组件具备更强的灵活性。例如，利用 props.children 可在组件内部渲染嵌套的子元素，常用于布局组件、卡片组件等。

（4）传递回调函数
props 也可用于将函数作为参数传递，特别适合需要父子组件通信的场景。例如，表单提交、按钮点击等事件处理通常通过 props 传递回调函数来完成。

3. props 的最佳实践
使用 props 时，推荐采用解构赋值的方式，简化代码并提高可读性。
为避免传递过多 props 导致组件混乱，建议将复杂 props 组合成一个对象。
在复杂项目中，可结合 PropTypes 定义 props 的数据类型，提升代码的健壮性和可维护性。
当 props 数据量较多时，适当使用 defaultProps 设置默认值，确保组件具有合理的初始状态。
4. props 与 state 的区别
props 由父组件传递，子组件只能读取而无法修改；
state 由组件自身管理，允许组件内部更新。
props 适用于父子组件间的数据传递，而 state 适用于管理组件的动态数据。
5. props 的重要性
在 React 中，props 是实现组件复用、解耦、动态渲染的核心工具。掌握 props 的使用，有助于构建更清晰、更易维护的 React 组件。