import React from 'react'
import s from './Nav.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";




const Nav = () => {
    return (
        <nav className={s.nav}>

            <div className={s.item}>
            <a href='/profile'>профиль</a>
            </div>
    <div className={s.item}>
    <a href='/dialogs'>messs</a>
    </div>
<div className={s.item}>
<a href='lots'>lots</a>
        </div>

        </nav>




    )
}
export default Nav;