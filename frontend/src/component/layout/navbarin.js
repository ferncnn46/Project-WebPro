import React from 'react';
import { 
    CloseOutlined
    } from '@ant-design/icons';
import { Menu } from 'antd';

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const Navbar2 = () => {

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
            <Menu.Item key="sign out" icon={<CloseOutlined />} onClick={logout}>  
                Sign Out
            </Menu.Item>
            
    )
};

export default Navbar2
