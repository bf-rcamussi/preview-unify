import React, { useEffect } from "react";
import s from './style.module.css';
import bg from 'assets/Backgrounds/noise-background-04.jpg';
import AnimationPlayer from "components/AnimationPlayer/AnimationPlayer";
import gradient from "assets/Json/gradientbars-01.json";
import telegram from "assets/Logos/telegram-logo.svg";
import twitter from "assets/Logos/twitter-logo.svg"
import youtube from "assets/Logos/youtube-logo.svg"
import medium from "assets/Logos/medium-logo.svg"

import gsap from "gsap";
import ContactForm from "components/contact-form/ContactForm";


const Section8 = () => {

    useEffect(() => {
        gsap.fromTo(`.${s.circle}`, {
            scale: .2,
            y: 100
        }, {
            scale: 1,
            y: 0,
            scrollTrigger: {
                trigger: `.${s.container}`,
                start: 'top bottom',
                scrub: true,
                once: true
            }
        })
    })

    return (
        <section className={s.container}>
            <div className={s.circle}>
                <div className={s.content}>
                    <h4 className={s.overTitle}>
                        We’re online
                    </h4>
                    <h1 className={s.title}>
                        Join the conversation
                    </h1>
                    <div className={s.socialLogos}>
                        <a className={s.socialLink}>
                          <img className={s.logo} src={telegram}/>  
                        </a>
                        <a className={s.socialLink}>
                          <img className={s.logo} src={twitter}/>  
                        </a>
                        <a className={s.socialLink}>
                          <img className={s.logo} src={youtube}/>  
                        </a>
                        <a className={s.socialLink}>
                          <img className={s.logo} src={medium}/>  
                        </a>
                    </div>
                </div>  
                <img src={bg} className={s.background}/>
            </div>
            <div className={s.gradient}>
                <AnimationPlayer 
                    animationData={gradient}
                    mode="scroll"
                    visibility={[0, 1]}
                    id={s.gradientt}
                />
            </div>

            <ContactForm/>
        </section>
    )
}

export default Section8;