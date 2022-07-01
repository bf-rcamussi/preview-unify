import React, { useEffect, useState } from "react";
import s from './style.module.css';
import arrowAnimation from "assets/Json/big-arrow.json";
import AnimationPlayer from "components/AnimationPlayer/AnimationPlayer";
import gsap from "gsap";
import scrollGradient from 'assets/GradientBars/scrollbar-gradient-01@2x.png';
import bg from 'assets/Backgrounds/noise-background-03.jpg'

const items = [
    {
        title: 'Epulae nimis ipsum ille os accum san ut turpis dolore et nobis autem',
        text1: 'Premo vindico himenaeos oppeto euismod letalis genitus camur quis. Huic roto loquor eu capio porttitor feugiat pharetra obruo rhoncus.',
        text2: 'Premo vindico himenaeos oppeto euismod letalis genitus camur quis. Huic roto loquor eu capio porttitor feugiat pharetra obruo rhoncus.'
    },
    {
        title: 'Epulae nimis ipsum ille os accum san ut turpis dolore et nobis autem',
        text1: 'Premo vindico himenaeos oppeto euismod letalis genitus camur quis. Huic roto loquor eu capio porttitor feugiat pharetra obruo rhoncus.',
        text2: 'Premo vindico himenaeos oppeto euismod letalis genitus camur quis. Huic roto loquor eu capio porttitor feugiat pharetra obruo rhoncus.'
    },
    {
        title: 'Epulae nimis ipsum ille os accum san ut turpis dolore et nobis autem',
        text1: 'Premo vindico himenaeos oppeto euismod letalis genitus camur quis. Huic roto loquor eu capio porttitor feugiat pharetra obruo rhoncus.',
        text2: 'Premo vindico himenaeos oppeto euismod letalis genitus camur quis. Huic roto loquor eu capio porttitor feugiat pharetra obruo rhoncus.'
    }
]
const TextGallery = () => {
    const [item, setItem] = useState(items[0]);
    const [index, setIndex] = useState(0);
    const [prev, setPrev] = useState(items[1]);

    const fadeText = () => {
        const tl = gsap.timeline()
        tl.to(`.${s.title}, .${s.paragraphs}`, {
            opacity: 0,
            duration: .2
        }).add(
            () => {
                setItem(items[index])
            }
        ).to(`.${s.title}, .${s.paragraphs}`, {
            opacity: 1,
            duration: .2
        })
    }

    useEffect(() => {
        gsap.to(`.${s.gradient}`, {
            width: `${(100 / items.length) * (index + 1)}%`,
            duration: .2
        })
    }, [index])

    useEffect(() => {
        fadeText()
    }, [index]);


    const moveIndex = (i) => {
        if (i + index < items.length && i + index >= 0){
            setIndex(index + i);
        }
        else if (i + index >= items.length) {
            setIndex(0)
        }
        else {
            setIndex(items.length - 1)
        }
    }

    return (
        <div className={s.container}>
                <div className={s.controls}>
                    <div className={s.index}>
                        <span>{String(index + 1).padStart(2, '0')}</span>/{String(items.length).padStart(2, '0')}
                    </div>
                    <div className={s.buttons}>
                            <button className={`${s.btn} ${s.btn1}`} onClick={() => {moveIndex(-1)}}>
                                <AnimationPlayer
                                    id={s.btn2}
                                    animationData={arrowAnimation}
                                    mode="trigger"
                                    visibility={[0,1]}
                                    width={99}
                                    height={77}
                                />
                            </button>
                            <button className={`${s.btn} ${s.btn2}`} onClick={() => {moveIndex(1)}}>
                                    <AnimationPlayer
                                        id={s.btn2}
                                        animationData={arrowAnimation}
                                        mode="trigger"
                                        visibility={[0,1]}
                                        width={99}
                                        height={77}
                                    />
                            </button>
                    </div>
                    
                </div>
                <div className={s.textContainer}>
                    <h2 className={s.title}>
                        {
                            item.title
                        }
                    </h2>
                    <div className={s.paragraphs}>
                        <p className={s.text}>
                            {item.text1}
                        </p>
                        <p className={s.text}>
                            {item.text2}
                        </p>
                    </div>
                    <img  className={s.background} src={bg}/>
                    <div className={s.indicator}>
                        <div className={s.bar}>
                            <div className={s.gradient}>
                                <img className={s.imageGradient} src={scrollGradient}/>
                            </div>
                            <span className={s.line}/>
                        </div>
                    </div>
                </div>            
        </div>  
    )
}

export default TextGallery;

