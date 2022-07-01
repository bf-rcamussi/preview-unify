import AnimationPlayer from "components/AnimationPlayer/AnimationPlayer";
import React, { useContext, useEffect, useRef } from "react";
import s from './style.module.css';
import gridAnimation from 'assets/Json/grid-room';
import gradientAnimation from 'assets/Json/underline-02.json';
import { context } from "context/context";
import gsap from "gsap";
import lines from 'assets/Json/grid-vertical.json';

const Section3 = () => {

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to(`.${s.title}`, {
            text: {
                delimiter: "",
                newClass: s.title + ' ' + s.brightText,
                value: "Unifi Protocol has a place in the storied history of this industry, we’ve had success here"
            },
            scrollTrigger: {
                trigger: `.${s.gridContainer}`,
                start: '+=100vh',
                end: "+=1000px",
                scrub: true,
            },
            onComplete: () => {
                document.querySelector(`.${s.gridContainer}`).style.bottom = 0;
            }
            })
    }, [])
    
    return (
        <section className={s.container}>
            <div className={s.gridContainer}
            >   
                <div className={s.textContainer}>
                    <h4 className={s.overTitle}>
                        The Past
                    </h4>
                    <div className={s.title}>
                        Unifi Protocol has a place in the storied history of this industry,
                        we’ve had success here
                    </div>
                    <div className={s.gradientContainer}>
                        <AnimationPlayer
                            animationData={gradientAnimation}
                            mode="trigger"
                            id={s.gradientContainer}
                            visibility={[0, 1]}
                        />
                    </div>
                </div>
                <div className={s.animationContainer}>
                    <AnimationPlayer
                        animationData={gridAnimation}
                        mode="trigger"
                        visibility={[.2, 1]}
                        id={s.gridContainer}
                    />
                </div>
            </div>
            <div className={s.animationDuration}/>
        </section>
        
    )
}

export default Section3;