import React from 'react'
import AuthLayout from '../layout/Auth/AuthLayout'
import MainLayout from '../layout/Main/MainLayout'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'

const RenderComponent = (item, isSubElement) => {
    const { user } = useSelector((state) => state.auth)
    const protection = item.protect;
    if (protection === false) {
        if (item.children) {
            return (
                <AuthLayout>
                    {item.component}
                </AuthLayout>
            )
        }
        return <>{item.component}</>
    }

    if (!user) {
        return <Navigate to="/auth/sign-in" />
    }

    if (item.children) {
        return <MainLayout>{item.component}</MainLayout>
    }

    if (isSubElement === false) {
        return <MainLayout>{item.component}</MainLayout>
    }

    return <>{item.component}</>
}

export default RenderComponent