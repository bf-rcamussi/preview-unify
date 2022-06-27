import { useLottie } from "lottie-react";
import React from "react";
import animationData from 'assets/Json/gradientbars-01';
import s from './Gradient1.module.css'


export default () => {
    const options = {
        animationData,
        loop: true
      };
    const {View} = useLottie(options)
    return (
        <div className={s.anim}>
            {View}
        </div>
        
    )
}