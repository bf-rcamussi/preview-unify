import React, { useEffect } from "react";
import s from './style.module.css';
import AnimationPlayer from "components/AnimationPlayer/AnimationPlayer";
import lines from 'assets/Json/grid-vertical.json';
import underline from 'assets/Json/underline-03.json';
import gradient2 from 'assets/Json/underline-03.json';
import Timeline from "components/timeline/Timeline";
import MiddleHexagons from "components/hexagons/middle-hexagons/MiddleHexagons";
import gsap from "gsap";
import TextGallery from "components/text-gallery/TextGallery";


const Section6 = ({}) => {

    useEffect(() => {
        gsap.fromTo(`.${s.hexContainer}`, {
            transform: 'translateY(-100px)'
        }, {
            transform: 'translateY(-400px)',
            duration: 1,
            scrollTrigger: {
                trigger: `.${s.container}`,
                scrub: true,
                start: 'top bottom',
            },
            
            
        })
    }, [])

    return (
        <div className={s.container}>
                <div className={s.hexContainer}>
                    <MiddleHexagons/>
                </div>

                <div className={s.billboard}>
                    <div className={s.overTitle}>
                        The Future
                    </div>
                    <div className={s.title}>
                        L4, L5 … We should clearly identify the problem here. Crypto was the problem, that was the mistake we made.
                    </div>
                    <div className={s.underline}>
                        <AnimationPlayer
                            animationData={underline}
                            mode="trigger"
                            id={s.underline}
                            visibility={[0,1]}
                            width={135}
                            height={40}
                        />
                    </div>
                </div>

                <TextGallery/>
        </div>
    )
}

export default Section6;