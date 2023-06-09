import React from 'react';
import { 
    HomeOutlined, 
    LoginOutlined,UserAddOutlined, 
    CloseOutlined
    } from '@ant-design/icons';
import { Menu } from 'antd';

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const Navbar = () => {


    return (
        <Menu mode='horizontal'>
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item key="sign in" icon={<LoginOutlined />}>
                <Link to="/sign-in">Sign In</Link>
            </Menu.Item>
            
            <Menu.Item key="sign up" icon={<UserAddOutlined />}>
                <Link to="/sign-up">Sign Up</Link>
            </Menu.Item>

        </Menu>
    )
};



export default Navbar
