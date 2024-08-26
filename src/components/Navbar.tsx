import React, { useState } from 'react';
import { Layout, Input, Avatar, Badge } from 'antd';
import { BellOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { AiOutlineMenu } from 'react-icons/ai';
import './Navbar.css';

const { Header } = Layout;

interface NavbarProps {
  collapsed: boolean;
  toggleCollapse: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ collapsed, toggleCollapse }) => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <div className={`navbar ${collapsed ? 'collapsed' : 'expanded'}`}>
      <div className="navbar-content">
        <div className="navbar-right">
          {isSearchVisible ? (
            <Input.Search
              className="search-input"
              placeholder="Search..."
              onBlur={toggleSearchBar}
              autoFocus
            />
          ) : (
            <SearchOutlined className="search-icon" onClick={toggleSearchBar} />
          )}
          <Badge count={1}>
            <BellOutlined className="notification-icon" />
          </Badge>
          <div className="profile-info">
            <span className="username">John Doe</span>
            <span className="email">johndoe@example.com</span>
          </div>
          <Avatar icon={<UserOutlined />} src="/profile-pic.png" className="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
