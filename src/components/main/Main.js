import React from "react";
import LoadingScreen from "components/loading-screen/LoadingScreen";
import s from './style.module.css';
import Section1 from "components/sections/section-1/Section1";


const Main = () => {
    return (
        <div className={s.container}>
            <LoadingScreen/>
            <Section1/>
            <Section1/>
        </div>
    )
}

export default Main;