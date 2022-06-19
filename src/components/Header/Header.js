import React from 'react'
import { Avatar, Dropdown, Layout } from "antd";
import HeaderMenu from './Menu/HeaderMenu'
import './Header.css'
import { useSelector } from "react-redux";

const Header = () => {
    const { user } = useSelector((state) => state.auth)

    return (
        <Layout.Header className="app-header">
            <Dropdown overlay={HeaderMenu} placement="bottomLeft" >
                <Avatar style={{ background: "#87d068" }}>
                    {user && user.user.full_name[0]}
                </Avatar>
            </Dropdown>
        </Layout.Header>
    )
}

export default Header