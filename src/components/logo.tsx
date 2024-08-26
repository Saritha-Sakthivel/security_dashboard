import React from 'react';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';


type LogoProps = {
    collapsed: boolean;
    toggleCollapse: () => void;
  };


const Logo: React.FC<LogoProps> = ({ collapsed, toggleCollapse })=>{
    return(
        <div className='logo'>
           <div className="logo-content">
        <img
          src="/path/to/logo.png" // Replace with your logo path
          alt="Logo"
          className="logo-img"
        />
        {!collapsed && <span className="product-name">EQ of AI</span>}
      </div>
      <div className="collapse-arrow" onClick={toggleCollapse}>
        {collapsed ? <RightCircleOutlined /> : <LeftCircleOutlined />}
      </div>
        </div>
    );
}
export default Logo;