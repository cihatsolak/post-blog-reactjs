import React from 'react'
import { Menu } from 'antd'
import { setUser } from "../../../store/authSlice/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const HeaderMenu = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <Menu theme="dark">
            <Menu.Item key="exit" onClick={() => {
                dispatch(setUser(null))
                navigate('/auth/sign-in')
            }
            }>
                Çıkış Yap
            </Menu.Item>
        </Menu>
    );
}

export default HeaderMenu