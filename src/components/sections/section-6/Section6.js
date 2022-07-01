import React, { useEffect } from "react";
import s from './style.module.css';
import AnimationPlayer from "components/AnimationPlayer/AnimationPlayer";
import lines from 'assets/Json/grid-vertical.json';
import gradient from 'assets/Json/gradientbars-01.json';
import gradient2 from 'assets/Json/underline-03.json';
import Timeline from "components/timeline/Timeline";
import MiddleHexagons from "components/hexagons/middle-hexagons/MiddleHexagons";
import gsap from "gsap";


const Section6 = ({}) => {

    useEffect(() => {
        gsap.fromTo(`.${s.hexContainer}`, {
            transform: 'translateY(-180px)'
        }, {
            transform: 'translateY(-300px)',
            duration: 1,
            scrollTrigger: {
                trigger: `.${s.hexContainer}`,
                scrub: true
            },
            start: 'top bottom',
            
        })
    }, [])

    return (
        <div className={s.container}>
                <div className={s.hexContainer}>
                    <MiddleHexagons/>
                </div>

                <div className={s.billboard}>
                    <div className={s.overTitle}>

                    </div>
                    <div className={s.title}>
                        
                    </div>
                    <div className={s.title}>
                        
                    </div>
                </div>
        </div>
    )
}

export default Section6;