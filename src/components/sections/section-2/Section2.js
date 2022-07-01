import React, { useContext, useEffect, useRef } from "react";
import s from './style.module.css';
import AnimationPlayer from "components/AnimationPlayer/AnimationPlayer";
import gradient1 from "assets/Json/gradientbars-01.json";
import gradient2 from "assets/Json/underline-02.json";
import gsap from "gsap";
import { context } from "context/context";
import VerticalTabs from "components/vertical-tabs/VerticalTabs";

const Section2 = () => {
    const {isMobile} = useContext(context);
    useEffect(() => {
        gsap.fromTo(`.${s.title} span`,
        {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'linear',
            scrollTrigger: {
                trigger: `.${s.title}`,
            },
            stagger: .2
          })
    }, [])

    return (
        <section className={s.container}>
            {
                !isMobile &&
                <div className={s.topGradientContainer}>
                    <AnimationPlayer
                        id={s.topGradientContainer}
                        animationData={gradient1}
                        mode="scroll"
                        width={60.5}
                        height={161}
                        autoplay
                        visibility={[0, .8]}
                    />
                </div>
            }
            
            <div className={s.titlesContainer}>
                <h4 className={`${s.overTitle}`}>
                    <span>
                        Our Vision
                    </span>
                </h4>
                <h2 className={`${s.title}`}>
                    <span>
                        A Sustainable
                    </span>
                    <span>
                        Blockchain is better
                    </span>
                </h2>
                <div className={s.midleGradientContainer}>
                <AnimationPlayer
                    id={s.midleGradientContainer}
                    animationData={gradient2}
                    mode="trigger"
                    width={135}
                    height={40}
                    autoplay
                    visibility={[0, 2]}
                />
            </div>
            </div>
            <p className={`${s.text}`}>
                Our intent is to create an ecosystem that is affordable, efficient and sustainable. 
                The cornerstone of this vision is the ability for a blockchain to function independently of market volatility,
                simplifying crypto adoption for all.
            </p>
            <VerticalTabs/>
        </section>
        
    )
}

export default Section2;