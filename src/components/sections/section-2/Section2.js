import HeroHexagons from "components/hexagons/hero-hexagons/HeroHexagons";
import React, { useContext, useEffect, useRef } from "react";
import s from './style.module.css';
import { LocomotiveScrollProvider, useLocomotiveScroll } from "react-locomotive-scroll";
import AnimationPlayer from "components/AnimationPlayer/AnimationPlayer";
import gradient from "assets/Json/gradientbars-01.json";
import gsap from "gsap";
import { context } from "context/context";


const Section2 = () => {
    const sectionRef = useRef(null);
    const grad = useRef(null);
    const {scroll} = useContext(context);
   /*  useEffect(() => {
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
            y: 100,
        }, {
            y: 0,
            duration: 2,
            ease: 'ease-in-out',
            delay: 2.5,
            stagger: 0.3
          })
    }, []) */

    return (
        <section className={s.container} data-scroll-section>
            <div className={s.gradientContainer}>
                <AnimationPlayer
                    id={s.gradientContainer}
                    animationData={gradient}
                    mode="scroll"
                    width={60.5}
                    height={161}
                    autoplay
                    visibility={[0, .8]}
                />
            </div>
        </section>
        
    )
}

export default Section2;