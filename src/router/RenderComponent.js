import React from 'react'
import AuthLayout from '../layout/Auth/AuthLayout'
import MainLayout from '../layout/Main/MainLayout'

const RenderComponent = (item, isSubElement) => {

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

    if (item.children) {
        return <MainLayout>{item.component}</MainLayout>
    }

    if (isSubElement === false) {
        return <MainLayout>{item.component}</MainLayout>
    }

    return <>{item.component}</>
}

export default RenderComponent