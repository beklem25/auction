import React from 'react'
import s from './Mylot.module.css'
import "./Lot";

const Mylot = (props) => {
    return (

        <div className={s.mylot}>
                <text>мої лоти опис та зображення </text>
            { props. size }
            { props. messege }
            <div>
            <span>улюблені</span></div> { props. likesCount }
</div>

    )
}

export default Mylot;