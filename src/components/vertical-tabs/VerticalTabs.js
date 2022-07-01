import React, { useEffect, useState } from "react";
import s from './style.module.css';
import gsap from "gsap";
import AnimationPlayer from "components/AnimationPlayer/AnimationPlayer";
import background from "assets/Backgrounds/noise-background-01.jpg";
import backgroundMobile from "assets/Backgrounds/noise-background-01-mobile.jpg";
import arrowAnimation from "assets/Json/big-arrow.json";

const items = [
    {
        title: 'DEFI',
        text1: 'UNFI token holders are granted exclusive access to Proposals and Referendums to propose or vote on',
        text2: 'Unifi governance actions across multiple blockchains.',
        cta: {label: 'Learn More', href: '#'}
    },
    {
        title: 'CROSS CHAIN',
        text1: 'UNFI token holders are granted exclusive access to Proposals and Referendums to propose or vote on',
        text2: 'Unifi governance actions across multiple blockchains.',
        cta: {label: 'Learn More', href: '#'}
    },
    {
        title: 'GOVERNANCE',
        text1: 'UNFI token holders are granted exclusive access to Proposals and Referendums to propose or vote on',
        text2: 'Unifi governance actions across multiple blockchains.',
        cta: {label: 'Learn More', href: '#'}
    },
    {
        title: 'GAS',
        text1: 'UNFI token holders are granted exclusive access to Proposals and Referendums to propose or vote on',
        text2: 'Unifi governance actions across multiple blockchains.',
        cta: {label: 'Learn More', href: '#'}
    }
]

const VerticalTabs = () => {
    const [activeItem, setActiveItem] = useState(items[0]);
    const [activeIndex, setActiveIndex] = useState(0);
    const moveIndex = (step) => {
        let movement = (activeIndex + step) % items.length;
        movement = movement < 0 ? items.length - 1 : movement;
        setActiveIndex(movement);
    }
    const textUp = () => {
        gsap.fromTo(`.${s.activeTitle}, .${s.textContainer}`, 
        {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 8,
            ease: 'linear',
            scrollTrigger: {
                trigger: `.${s.activeTitle}`,
            },
            stagger: .2
          })
    }

    useEffect(() => {
    }, [])


    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(`.${s.activeTitle}, .${s.textContainer}`, 
        {
            opacity: 0,
            duration: .4,
            stagger: 0.1
        }).add(
            function(){setActiveItem(items[activeIndex]);}
        ).to(`.${s.activeTitle}, .${s.textContainer}`, 
        {
            opacity: 1,
            duration: .4,
            stagger: 0.1
        });
    }, [activeIndex])


    return (
        <div className={s.container}>

            

            <div className={s.itemsContainer}>
            {
                items.map((item, i) =>
                {
                    return (
                        <button className={`${s.item} ${i == activeIndex && s.active}`} key={i}
                            onClick={() => {setActiveIndex(i)}}
                        > 
                            <div className={s.itemText}>
                                {item.title}
                            </div>
                            <span className={`${s.border} ${i == activeIndex && s.active}`}/>
                        </button>
                    )
                })
            }
            </div>

            <div className={s.activeItemContainer}>
                <div className={s.content}>
                    <div className={s.mobileControls}>
                        <div className={s.mobileIndexes}>
                            {items.map(
                                (item, i) => 
                                <span key={i} className={`${s.mobileIndex} ${i === activeIndex && s.active}`}/>
                            )}
                        </div>
                        <div className={s.mobileBtns}>
                            <button className={`${s.btn} ${s.btn1}`} onClick={() => {moveIndex(-1)}}>
                                <AnimationPlayer
                                    id={s.mobileControls}
                                    animationData={arrowAnimation}
                                    mode="trigger"
                                    visibility={[0,1]}
                                    width={28}
                                    height={25}
                                />
                            </button>
                            <button className={`${s.btn} ${s.btn2}`} onClick={() => {moveIndex(1)}}>
                                    <AnimationPlayer
                                        id={s.mobileControls}
                                        animationData={arrowAnimation}
                                        mode="trigger"
                                        visibility={[0,1]}
                                        width={28}
                                        height={25}
                                    />
                            </button>
                        </div>
                    </div>

                    <h2 className={s.activeTitle}>
                        {activeItem.title}
                    </h2>
                    <div className={s.textContainer}>
                        {
                            activeItem.text1 &&
                            <p>
                                {activeItem.text1}
                            </p>
                        }
                        {
                            activeItem.text2 &&
                            <p>
                                {activeItem.text2}
                            </p>
                        }
                    </div>
                </div>
                <div className={s.rightCol}>
                    <div className={s.controlsContainer}>
                        <button className={`${s.btn} ${s.btn1}`} onClick={() => {moveIndex(-1)}}>
                            <AnimationPlayer
                                id={s.btn1}
                                animationData={arrowAnimation}
                                mode="trigger"
                                visibility={[0,1]}
                                width={95}
                                height={84}
                            />
                        </button>
                        <button className={`${s.btn} ${s.btn2}`} onClick={() => {moveIndex(1)}}>
                            <AnimationPlayer
                                id={s.btn2}
                                animationData={arrowAnimation}
                                mode="trigger"
                                visibility={[0,1]}
                                width={95}
                                height={84}
                            />
                        </button>
                    </div>
                    <a className={s.cta} href={activeItem.cta.href}>
                    {
                        activeItem.cta.label
                    }
                    </a>
                </div>
                <img className={s.backgroundImage} src={background}/>
            </div>
        </div>
        
    )
}

export default VerticalTabs;