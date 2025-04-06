import React, { useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import { useNavigate } from 'react-router-dom';
import sideItems from "./menuList";

// const items = [
//   {
//     key: '1',
//     icon: <MailOutlined />,
//     label: 'Navigation One',
//   },
//   {
//     key: '2',
//     icon: <CalendarOutlined />,
//     label: 'Navigation Two',
//   },
//   {
//     key: 'sub1',
//     label: 'Navigation Two',
//     icon: <AppstoreOutlined />,
//     children: [
//       { key: '3', label: 'Option 3' },
//       { key: '4', label: 'Option 4' },
//       {
//         key: 'sub1-2',
//         label: 'Submenu',
//         children: [
//           { key: '5', label: 'Option 5' },
//           { key: '6', label: 'Option 6' },
//         ],
//       },
//     ],
//   },
//   {
//     key: 'sub2',
//     label: 'Navigation Three',
//     icon: <SettingOutlined />,
//     children: [
//       { key: '7', label: 'Option 7' },
//       { key: '8', label: 'Option 8' },
//       { key: '9', label: 'Option 9' },
//       { key: '10', label: 'Option 10' },
//     ],
//   },
//   {
//     key: 'link',
//     icon: <LinkOutlined />,
//     label: (
//       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//         Ant Design
//       </a>
//     ),
//   },
// ];

// 递归查找点击的 key 对应的菜单项
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
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('dark');
  const changeMode = value => {
    setMode(value ? 'vertical' : 'inline');
  };
  const changeTheme = value => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    
    <div className="sideBar-inner">
      {/* <Switch onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br /> */}
      <Menu
        style={{height: '100%'}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
        items={sideItems}
        onClick={onClick}
      />
    </div>
  );
};
export default App;