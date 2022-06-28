import React from "react";
import s from './style.module.css'
import HeaderSpinner from "components/header-spinner/HeaderSpinner";


export default () => {
    return (
        <div className={s.container} onScroll={(e) => {e.preventDefault()}}>
            <div className={s.header}>
                <HeaderSpinner/>
            </div>
        </div>
        
    )
}