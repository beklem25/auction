import React from 'react'
import s from './Nav.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";




const Nav = () => {
    return (
        <nav className={s.nav}>

            <div className={s.item}>
            <a>профиль</a>
            </div>
    <div className={s.item}>
    <a>messs</a>
    </div>
<div className={s.item}>
<a>lots</a>
        </div>

        </nav>




    )
}
export default Nav;