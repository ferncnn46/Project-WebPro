import React from 'react';
import { 
AppstoreOutlined, 
  ShopOutlined,
  MailOutlined,
  UserOutlined, 
  HomeOutlined,
  CloseOutlined
    } from '@ant-design/icons';
import { Menu } from 'antd';

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const MenubarUser = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
 
    const logout = () => {
        dispatch({
          type: "LOGOUT",
          payload: null,
        });
        navigate("/");
      };

    return (
        <Menu mode='horizontal'>
            <Menu.Item key="Home" icon={<HomeOutlined />}>
            <Link to="/user/index">Home</Link>
            </Menu.Item>  

            <Menu.Item key="Collection" icon={<AppstoreOutlined />}>
                <Link to="/user/collection">Collection</Link>
            </Menu.Item>

            <Menu.Item key="Catalog" icon={<ShopOutlined />}>
                <Link to="/user/catalog">Catalog</Link>
            </Menu.Item>
            
            <Menu.Item key="Request Message" icon={<MailOutlined />}>
                <Link to="/user/request">Request Us</Link>
            </Menu.Item>

            <Menu.Item key="Profile" icon={<UserOutlined />}>
                <Link to="/user/profile">Profile</Link>
            </Menu.Item>
                     
            <Menu.Item key="sign out" icon={<CloseOutlined />} onClick={logout}>  
                Sign Out
            </Menu.Item>
        </Menu>
    )
};


export default MenubarUser
