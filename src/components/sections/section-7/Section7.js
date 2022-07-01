import React, { useEffect } from "react";
import s from './style.module.css';
import hex from 'assets/Backgrounds/noise-hexagon.png';
import icon1 from 'assets/Logos/binance-logo.svg';
import icon2 from 'assets/Logos/polygon-logo.svg';
import icon3 from 'assets/Logos/ethereum-logo.svg';
import icon4 from 'assets/Logos/avax-logo.svg';
import icon5 from 'assets/Logos/harmony-one-logo.svg';
import AnimationPlayer from "components/AnimationPlayer/AnimationPlayer";
import gradient from 'assets/Json/underline-01.json'
import gsap from "gsap";

const Section7 = () => {

    useEffect(() => {
        gsap.fromTo(`.${s.icons}`,{
            top: 600
        },{
            top: -100,
            scrollTrigger: {
                trigger: `.${s.titleSection}`,
                scrub: true
            }
        })
    })

    return (
        <section className={s.container}>
                <div className={s.icons}>
                    <div className={s.hex1}>
                        <div className={s.imageWrap}>
                            <img src={icon1} className={s.icon}/>
                            <img src={hex} className={s.hex}/>
                        </div>
                    </div>
                    <div className={s.hex2}>
                        <div className={s.imageWrap}>
                            <img src={icon2} className={s.icon}/>
                            <img src={hex} className={s.hex}/>
                        </div>
                    </div>
                    <div className={s.hex3}>
                        <div className={s.imageWrap}>
                            <img src={icon3} className={s.icon}/>
                            <img src={hex} className={s.hex}/>
                        </div>
                    </div>
                    <div className={s.hex4}>
                        <div className={s.imageWrap}>
                            <img src={icon4} className={s.icon}/>
                            <img src={hex} className={s.hex}/>
                        </div>
                    </div>
                    <div className={s.hex5}>
                        <div className={s.imageWrap}>
                            <img src={icon5} className={s.icon}/>
                            <img src={hex} className={s.hex}/>
                        </div>
                    </div>
                </div>
            
            <div className={s.titleSection}>
                <h3 className={s.overTitle}>
                    Partnerships
                </h3>
                <h2 className={s.title}>
                    Developing with the best
                </h2>
                <div className={s.gradient}>
                    <AnimationPlayer 
                        animationData={gradient}
                        id={s.gradient}
                        mode="trigger"
                        visibility={[0, 1]}
                        height={40}
                        width={135}
                    />
                </div>
            </div>

        </section>
    )
}

export default Section7;