import AnimationPlayer from "components/AnimationPlayer/AnimationPlayer";
import React from "react";
import s from './style.module.css';
import lines from 'assets/Json/grid-vertical.json';
import Timeline from "components/timeline/Timeline";

const Section4 = ({}) => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.timeline}>
                    <Timeline/>
                </div>
            </div>
            <div className={s.backgroundLines}>
                <AnimationPlayer
                    mode={"trigger"}
                    animationData={lines}
                    id={s.backgroundLines}
                    visibility={[0, .5]}
                />
            </div>
        </div>
    )
}

export default Section4;