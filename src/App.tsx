import { useState } from 'react';
import { Layout } from 'antd';
import Logo from './components/logo';
import MenuList from './components/menuList';
import ToggleTheme from './components/Toggletheme';
import Navbar from './components/Navbar';

const { Header, Sider, Content } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider 
        theme={darkTheme ? 'dark' : 'light'} 
        className='sidebar'
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapse}
        trigger={null}
      >
        <Logo collapsed={collapsed} toggleCollapse={toggleCollapse} />
        <MenuList darkTheme={darkTheme} />
        <ToggleTheme darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Layout className="site-layout">
        <Header className={`header ${collapsed ? 'collapsed' : 'expanded'} ${darkTheme ? 'dark' : 'light'}`}>
          <Navbar collapsed={collapsed} toggleCollapse={toggleCollapse} />
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
          {/* Your main content goes here */}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
