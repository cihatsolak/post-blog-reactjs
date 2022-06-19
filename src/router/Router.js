import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppRoutes from './AppRoutes'

const Router = () => {

    const renderComponent = (item) => {
        return <>{item.component}</>
    }

    return (
        <>
            <Routes>
                {
                    AppRoutes.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                {
                                    item.children
                                        ?
                                        <Route path={item.path} element={renderComponent(item)}>
                                            {
                                                item.children.map((subItem, index) => {
                                                    return <Route key={index} path={subItem.path} element={renderComponent(subItem)} />
                                                })
                                            }
                                        </Route>
                                        :
                                        <Route path={item.path} element={renderComponent(item)} />
                                }
                            </React.Fragment>
                        )
                    })
                }
            </Routes>
        </>
    )
}

export default Router