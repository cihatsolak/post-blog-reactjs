import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import RenderComponent from './RenderComponent'

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
                                        <Route path={item.path} element={RenderComponent(item)}>
                                            {
                                                item.children.map((subItem, index) => {
                                                    return <Route key={index} path={subItem.path} element={RenderComponent(subItem, false)} />
                                                })
                                            }
                                        </Route>
                                        :
                                        <Route path={item.path} element={RenderComponent(item)} />
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