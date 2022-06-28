import React from "react";
import animationData from 'assets/Json/logo-spinning.json';
import s from './style.module.css'
import AnimationPlayer from "components/AnimationPlayer/AnimationPlayer";

export default () => {
    const options = {
        animationData,
        loop: true
      };

      return (
        <div className={s.container}>
            <div className={s.animation}>
                <AnimationPlayer
                    mode={"normal"}
                    loop 
                    id={s.animation}
                    animationData={animationData}
                    delay={1000}
                    autoplay
                />
            </div>
            <div className={s.titleContainer}>
                <h4 className={s.title}>
                    Loading your experience
                </h4>
            </div>
        </div>
    )
}