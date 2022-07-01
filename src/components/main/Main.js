import React, { useContext, useState } from "react";
import LoadingScreen from "components/loading-screen/LoadingScreen";
import s from './style.module.css';
import Section1 from "components/sections/section-1/Section1";
import { context } from "context/context";
import { useEffect } from "react";
import Section2 from "components/sections/section-2/Section2";
import Section3 from "components/sections/section-3/Section3";
import Section4 from "components/sections/section-4/Section4";
import Section5 from "components/sections/section-5/Section5";
import Section6 from "components/sections/section-6/Section6";
import Section7 from "components/sections/section-7/Section7";
import Section8 from "components/sections/section-8/Section8";
import Footer from "components/footer/Footer";


const Main = () => {
    const {scroll, canScroll, setCanScroll} = useContext(context);

    useEffect(() => {
        setTimeout(() => {
            setCanScroll(true);
        }, 2000)
    }, []);

    useEffect(() => {
        if (canScroll) {
            scroll.update()
            scroll.start()
        }
    }, [canScroll])
    return (
        <div className={`${s.container} ${canScroll && s.canScroll}`}>
            <div className={s.modalHandler}>
                <LoadingScreen/>
                <Section1/>
            </div>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/>
            <Section8/>
            <Footer/>
        </div>
    )
}

export default Main;