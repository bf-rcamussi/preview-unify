import React, { useEffect, useRef } from "react";
import s from './style.module.css'
import Hex1 from 'assets/Hero/1.png';
import Hex2 from 'assets/Hero/2.png';
import Hex3 from 'assets/Hero/3.png';
import Hex4 from 'assets/Hero/4.png';
import BlackMoon from 'assets/Hero/matte-black.png';
import WhiteMoon from 'assets/Hero/moon.png';
import Hex3Video from 'assets/HexagonVideo/hexagon-1-extended.mp4';
import { gsap } from "gsap";


const HexVideo = () => {
    return (
        <div
            data-scroll-speed="3"
            data-scroll
            className={`${s.hex} ${s.hex3}`}
            dangerouslySetInnerHTML={{__html: `
                <video src=${Hex3Video} class=${s.hex3Image} autoPlay loop muted/>
            `}}
        >
        </div> 
    )
}

export default () => {
    const whiteMoon = useRef(null);
    const blackMoon = useRef(null);


    useEffect(()=> {
    }, [])

    return (
        <div className={s.container} data-scroll-section>
            <img
                ref={whiteMoon}
                data-scroll-speed=".1"
                data-scroll
                src={WhiteMoon} 
                className={`${s.whiteMoon}`}
            />
            <img
                data-scroll-speed="5"
                data-scroll-offset="10px 20px"
                data-scroll
                src={BlackMoon}
                className={`${s.blackMoon}`}
            />
            <img
                data-scroll-speed="1"
                data-scroll
                src={Hex1}
                className={`${s.hex} ${s.hex1}`}
            />
            <img
                data-scroll-speed="3"
                data-scroll
                src={Hex2}
                className={`${s.hex} ${s.hex2}`}/>
            <img 
                data-scroll 
                data-scroll-speed="2"
                src={Hex4} 
                className={`${s.hex} ${s.hex4}`}
            />
            <HexVideo/>
        </div>        
        
    )
}