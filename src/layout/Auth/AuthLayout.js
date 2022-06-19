import React from 'react'
import { Layout } from 'antd'
import PropTypes from 'prop-types'
import './AuthLayout.css'

const AuthLayout = ({ children }) => {
    return (
        <Layout className='auth-layout'>
            {children}
        </Layout>
    )
}

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthLayout