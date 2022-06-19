import React from 'react'
import { Menu, Layout } from 'antd'
import './Sidebar.css'
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    return (
        <Layout.Sider className='side-bar'>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
                <Menu.Item key="/">
                    <Link to="/">Ana Sayfa</Link>
                </Menu.Item>
                <Menu.Item key="/post/create-post">
                    <Link to="/post/create-post">Post Oluştur</Link>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    )
}

export default Sidebar