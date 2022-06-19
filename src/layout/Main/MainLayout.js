import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import Sidebar from '../../components/Sidebar/Sidebar'

const MainLayout = ({ children }) => {
    return (
        <Layout>
            <Sidebar />
            <Layout>
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