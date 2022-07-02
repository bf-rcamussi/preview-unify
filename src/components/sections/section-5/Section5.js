import React from "react";
import s from './style.module.css';
import AnimationPlayer from "components/AnimationPlayer/AnimationPlayer";
import lines from 'assets/Json/grid-vertical.json';
import gradient from 'assets/Json/gradientbars-01.json';
import gradient2 from 'assets/Json/underline-03.json';
import Timeline from "components/timeline/Timeline";
import { context } from "context/context";
import { useContext } from "react";


const Section5 = ({}) => {
    const { isMobile } = useContext(context);

    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.topGradient}>
                    <AnimationPlayer
                        mode={"scroll"}
                        animationData={gradient}
                        id={s.topGradient}
                        visibility={[0, 1]}
                        width={60}
                        height={200}
                    />
                </div>
                <div className={s.textContainer}>
                    <h4 className={s.overTitle}>
                        Where We’re going
                    </h4>
                    <h1 className={s.title}>
                        We’re going to be around for the future of this industry too
                    </h1>
                    <div className={s.horizontalGradient}>
                        <AnimationPlayer
                        mode={"trigger"}
                        animationData={gradient2}
                        width={135}
                        height={40}
                        id={s.horizontalGradient}
                        visibility={[0, 1]}
                        />
                    </div>
                </div>
            </div>
           { 
                !isMobile &&
                <div className={s.backgroundLines}>
                    <AnimationPlayer
                        mode={"trigger"}
                        animationData={lines}
                        id={s.backgroundLines}
                        visibility={[0, .1]}
                    />
                </div>
            }
        </div>
    )
}

export default Section5;