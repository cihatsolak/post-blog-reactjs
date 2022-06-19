import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import RendererComponent from './RendererComponent'

const Router = () => {
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
                                        <Route path={item.path} element={RendererComponent(item)}>
                                            {
                                                item.children.map((subItem, index) => {
                                                    return <Route key={index} path={subItem.path} element={RendererComponent(subItem)} />
                                                })
                                            }
                                        </Route>
                                        :
                                        <Route path={item.path} element={RendererComponent(item)} />
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