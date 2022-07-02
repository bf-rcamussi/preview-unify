import AnimationPlayer from "components/AnimationPlayer/AnimationPlayer";
import React, { useContext } from "react";
import s from './style.module.css';
import lines from 'assets/Json/grid-vertical.json';
import Timeline from "components/timeline/Timeline";
import { context } from "context/context";

const Section4 = ({}) => {
    const { isMobile } = useContext(context);
    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.timeline}>
                    <Timeline/>
                </div>
            </div>
            {
                !isMobile  &&
                <div className={s.backgroundLines}>
                    <AnimationPlayer
                        mode={"trigger"}
                        animationData={lines}
                        id={s.backgroundLines}
                        visibility={[0, .5]}
                />
                </div>
            }
            
        </div>
    )
}

export default Section4;