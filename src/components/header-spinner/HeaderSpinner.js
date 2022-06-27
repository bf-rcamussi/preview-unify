import React from "react";
import { useLottie } from "lottie-react";
import animationData from 'assets/Json/logo-spinning.json';
import s from './style.module.css'


export default () => {
    const options = {
        animationData,
        loop: true
      };
    const {View} = useLottie(options)
    return (
        <div className={s.container}>
            <div className={s.animation}>
                {View}
            </div>
            <div className={s.titleContainer}>
                <h4 className={s.title}>
                    Loading your experience
                </h4>
            </div>
        </div>
    )
}