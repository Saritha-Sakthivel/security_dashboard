import { Menu } from 'antd';
import React from 'react';
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  SettingOutlined,
} from '@ant-design/icons';

type MenuListProps = {
  darkTheme: boolean;
};

const MenuList: React.FC<MenuListProps> = ({ darkTheme }) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar'>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="security_dashboard" icon={<AppstoreOutlined />}>
        Security Dashboard
      </Menu.Item>
      <Menu.Item key="organisation" icon={<AreaChartOutlined />}>
        Organisation
      </Menu.Item>
      <Menu.Item key="subscription" icon={<PayCircleOutlined />}>
        Subscription
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
