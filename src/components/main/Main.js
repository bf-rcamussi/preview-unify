import React, { useContext } from "react";
import LoadingScreen from "components/loading-screen/LoadingScreen";
import s from './style.module.css';
import Section1 from "components/sections/section-1/Section1";
import { context } from "context/context";
import { useEffect } from "react";
import Section2 from "components/sections/section-2/Section2";


const Main = () => {
    const {scroll} = useContext(context);
    useEffect(() => {
        setTimeout(() => {
            document.body.classList.add('can-scroll')
        }, 5000)
    }, [scroll]);

    return (
        <div className={s.container}>
            <LoadingScreen/>
            <Section1/>
            <Section2/>
        </div>
    )
}

export default Main;