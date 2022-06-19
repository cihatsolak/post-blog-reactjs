import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import RenderComponent from './RenderComponent'

const Router = () => {
    return (
        <>
            <Routes>
                {
                    AppRoutes.map((item) => {
                        return (
                            <React.Fragment key={item.path}>
                                {item.children ? <>
                                    <Route path={item.path} key={item.path} element={RenderComponent(item)} >
                                        {item.children.map((subItem) => {
                                            return (
                                                <Route path={subItem.path} key={subItem.path} element={RenderComponent(subItem)} />
                                            )
                                        })}
                                    </Route>
                                </> : <Route path={item.path} key={item.path} element={RenderComponent(item, false)} />}
                            </React.Fragment>
                        )
                    })
                }
            </Routes>
        </>
    )
}

export default Router