import React from 'react'
import { Avatar, Dropdown, Layout } from "antd";
import HeaderMenu from './Menu/HeaderMenu'
import './Header.css'

const Header = () => {
    return (
        <Layout.Header className='app-header'>
            <Dropdown overlay={HeaderMenu} placement='bottomLeft'>
                <Avatar style={{ background: "#87d068" }}>
                    Y
                </Avatar>
            </Dropdown>
        </Layout.Header>
    )
}

export default Header