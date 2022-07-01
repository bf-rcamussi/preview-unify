import AnimationPlayer from "components/AnimationPlayer/AnimationPlayer";
import React from "react";
import s from './style.module.css';
import gradient from 'assets/Json/underline-01.json';
import bg from 'assets/Backgrounds/noise-background-06.jpg'


const ContactForm = () => {
    return (
        <div className={s.container}>
            <div className={s.titleSection}>
                <h4 className={s.overTitle}>
                    Let’s build together
                </h4>
                <h1 className={s.title}>
                    Connect with us
                </h1>
                <div className={s.gradient}>
                    <AnimationPlayer
                        animationData={gradient}
                        mode="trigger"
                        id={s.gradient}
                        visibility={[0,1]}
                        width={135}
                        height={40}
                    />
                </div>
            </div>
            <form className={s.form}>
                <label className={s.label}>
                    <input type={"text"}  className={`${s.input}`} placeholder="Name here" />
                </label>
                <label className={s.label}>
                    <input type={"email"}  className={`${s.input}`} placeholder="Email address here"/>
                </label>
                <label className={s.label}>
                    <textarea className={`${s.input}`} placeholder="Insert message here"/>
                </label>
                    <button className={s.button}>
                        Submit
                    </button>
            </form>
            <img className={s.background} src={bg}/>
        </div>
    )
}

export default ContactForm;