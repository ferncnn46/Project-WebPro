import React from 'react';
import {
    TeamOutlined,
    ShopOutlined,
    MailOutlined, HomeOutlined,
    CloseOutlined
} from '@ant-design/icons';
import { Menu, Dropdown  } from 'antd';

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const MenubarAdmin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch({
            type: "LOGOUT",
            payload: null,
        });
        navigate("/");
    };

    const menu = (
        <Menu>
            <Menu.Item key="Create Plant" icon={<ShopOutlined />}>
                <Link to="/admin/create-plant">Create Plant</Link>
            </Menu.Item>
            <Menu.Item key="Edit Plant" icon={<ShopOutlined />}>
                <Link to="/admin/edit-plant">Edit Plant</Link>
            </Menu.Item>
        </Menu>
    );
    return (
        <Menu mode='horizontal'>
            <Menu.Item key="Home" icon={<HomeOutlined />}>
                <Link to="/admin/index">Home</Link>
            </Menu.Item>

            <Menu.Item key="Manage User" icon={<TeamOutlined />}>
                <Link to="/admin/manage-user">List of User</Link>
            </Menu.Item>

            <Dropdown overlay={menu}>
                <Menu.Item key="Plant" icon={<ShopOutlined />}>
                    Plant
                </Menu.Item>
            </Dropdown>

            <Menu.Item key="Request Message" icon={<MailOutlined />}>
                <Link to="/admin/request-ms">Request Message</Link>
            </Menu.Item>

            <Menu.Item key="sign out" icon={<CloseOutlined />} onClick={logout}>
                Sign Out
            </Menu.Item>



        </Menu>
    )
};



export default MenubarAdmin
