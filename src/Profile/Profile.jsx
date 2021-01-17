import React from 'react'
import s from'./Profile.module.css'
import Lot from "../Lots/Lot";
import Dialogs from "../Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const Profile = () => {
    return (

<div className='app-profile'>Профіль
    <div className={s.item}>ava+decs</div>
    <div className={s.item}>мої продажі</div>
    <div className={s.button}>
        <button>Додати товар</button>
        </div>
    <div className ={s.item}>покупки</div>
<Lot />
    <div className ={s.item}>покупки</div>
    <div>
        <Dialogs />
    </div>

</div>

    )
}

export default Profile;