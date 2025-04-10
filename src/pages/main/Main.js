// import RouterBreadcrumbs from "../../components/SideBar/index"
// import ResponsiveAppBar from "../../components/Header/index"
// import Panel from "../../components/Panels/index"
// import MainCard from "../../pages/MainCard/index.js"
// import "./index.css"
// import { Route, Routes, Link, Outlet } from "react-router-dom"


// export default function index() {

//   return (

//     <div className="main-bar">
//       <div className="side-bar">
//         <RouterBreadcrumbs></RouterBreadcrumbs>
//       </div>

//       <div className="content-container">
//         <div className="top-bar">
//           <ResponsiveAppBar></ResponsiveAppBar>
//         </div>
//         <div className="main-card">
//           <Panel></Panel>
//         </div>
//         {/* <div className="main-card">
//           <div className="main-card-content">
//             <Outlet />
//           </div>


//         </div> */}



//       </div>

//     </div>

//   )
// }

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sideItems from "../../components/SideBar/menuList";
import Panel from "../../components/Panels/index";
import "./index.css"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;

const findMenuItemByKey = (items, key) => {
  for (const item of items) {
    if (item.key === key) return item;
    if (item.children) {
      const found = findMenuItemByKey(item.children, key);
      if (found) return found;
    }
  }
  return null;
};

const App = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    const selectedItem = findMenuItemByKey(sideItems, e.key);
    if (selectedItem && selectedItem.index) {
      navigate(selectedItem.index);
    }
  };
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className='main-layout'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" style={{height:64}}/>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={sideItems}
          onClick={onClick}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            // padding: "24 24 24 0",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Panel></Panel>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;