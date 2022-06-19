import React from 'react'
import { Layout } from 'antd'

const MainLayout = ({ children }) => {
    return (
        <Layout>
            {
                /*Sidebar*/
                <Layout>
                    {
                        /*Header*/
                        /*Content*/
                    }
                    {children}
                </Layout>
            }
        </Layout>
    )
}

MainLayout.propTypes = {
    children: propTypes.node.isRequired
}

export default MainLayout