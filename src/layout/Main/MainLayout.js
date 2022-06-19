import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'

const MainLayout = ({ children }) => {
    return (
        <Layout>
            <Sidebar />
            <Layout>
                <Header />
                {
                    /*Header*/
                    /*Content*/
                }
                {children}
            </Layout>
        </Layout>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout