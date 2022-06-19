import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import { Content } from 'antd/lib/layout/layout'

const MainLayout = ({ children }) => {
    return (
        <Layout>
            <Sidebar />
            <Layout style={{ marginLeft: '200px' }}>
                <Header />
                <Content>
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout