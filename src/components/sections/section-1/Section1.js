import HeroHexagons from "components/hexagons/hero-hexagons/HeroHexagons";
import React, { useContext, useEffect, useRef } from "react";
import s from './style.module.css';
import AnimationPlayer from "components/AnimationPlayer/AnimationPlayer";
import gradient from "assets/Json/underline-01.json";
import gsap from "gsap";
import { context } from "context/context";


const Section1 = () => {
    const sectionRef = useRef(null);
    const {scroll, isMobile} = useContext(context);
    
    useEffect(() => {
        gsap.to(`.${s.appearUp} span`, {
            y: 0,
            duration: 1,
            ease: 'ease-in-out',
            delay: 2.5,
            stagger: 0.3
          })
    }, [])

    useEffect(() => {
        gsap.to(`.${s.appearRight} span`, {
            x: 0,
            duration: 1,
            ease: 'ease-in-out',
            delay: 2.5,
            stagger: 0.3
          })
    }, [])

    useEffect(() => {
        gsap.fromTo(`.${s.hexContainer}`,
        {
            y: 200,
        }, {
            y: 0,
            duration: 2,
            ease: 'ease-in-out',
            delay: 2.5,
            stagger: 0.3
          })
    }, [])

    return (
        <section className={s.container} data-scroll-container>
            <div  className={s.logoContainer}>
                <img className={s.logo} src={require('assets/Logos/unifi-protocol-logo.svg').default} alt="unifi logo"/>
            </div>
            <div className={s.hexContainer} data-scroll-section>
                <HeroHexagons/>
            </div>
            <div className={s.textContainer}>
                <div className={`${s.text} ${s.appearRight}`}>
                    <span>
                        We are a web3
                    </span>
                    <span>
                        software company 
                    </span>
                </div>
                <div className={s.gradientContainer}>
                    <AnimationPlayer 
                        animationData={gradient}
                        delay={3000}
                        width={135}
                        height={40}
                        id={s.gradientContainer}
                    />
                </div>
                <div className={s.titleContainer}>
                    <h1 className={`${s.title} ${s.appearUp}`}>
                        <span>
                            Developing
                        </span>
                    </h1>
                    <h1 className={`${s.title} ${s.appearUp}`}>
                        <span>
                        Sustainable & Innovative
                        </span>
                    </h1>
                </div>
                <div className={`${s.subtitle} ${s.appearUp}`}>
                    <span>
                        Blockchain Solutions
                    </span>
                </div>
            </div>
            <div className={s.buttonsContainer}>
                <a className={`${s.btn} ${s.btn1}`}>
                    Get in Touch
                </a>
                <a className={`${s.btn} ${s.btn2}`}> 
                    Join our waiting list
                </a>
            </div>
        </section>
        
    )
}

export default Section1;