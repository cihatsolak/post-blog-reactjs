import { Layout } from 'antd'
import React from 'react'
import PropTypes from 'prop-types'
import './Content.css'

const Content = ({ children }) => {
    return (
        <Layout.Content className="app-content container">
            <div className='app-content-wrapper'>
                {children}
            </div>
        </Layout.Content>
    )
}

Content.propTypes = {
    children: PropTypes.node.isRequired
}

export default Content