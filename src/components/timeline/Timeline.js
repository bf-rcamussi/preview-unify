import AnimationPlayer from "components/AnimationPlayer/AnimationPlayer";
import React, { useEffect, useState } from "react";
import s from './style.module.css';
import gradient from 'assets/Backgrounds/noise-background-02.jpg'
import gsap from "gsap";


const items = [
    {
        year: 1993,
        text: 'Cypherpunk Manifesto defining privacy and a trustless economyasdas'
    },
    {
        year: 2008,
        text: 'Lorem ipsum dolor sit amet'
    },
    {
        year: 2014,
        text: 'Cypherpunk Manifesto defining privacy and a trustless economyasdas'
    },
    {
        year: 2017,
        text: 'Lorem ipsum dolor sit amet'
    },
    {
        year: 2018,
        text: 'Cypherpunk Manifesto defining privacy and a trustless economyasdas'
    },
    {
        year: 2018,
        text: 'Lorem ipsum dolor sit amet'
    },
    {
        year: 2019,
        text: 'Cypherpunk Manifesto defining privacy and a trustless economyasdas'
    },
    {
        year: 2020,
        text: 'Lorem ipsum dolor sit amet'
    }
]


const Timeline = () => {
    const [item, setItem] = useState(items[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setItem(items[index]);
    }, [index])

    
    useEffect(() => {
        const percentage = (100 / items.length) * (index + 1)
        gsap.to(`.${s.gradient}`, {
            height: `${percentage}%`,
        })
    }, [index])

    return (
        <div className={s.container}>
            <div className={s.sideBar}>
                <div className={s.yearsContainer}>
                {
                    items.map((year, i) =>
                    <button className={`${s.year} ${index===i && s.active}`}
                        key={i}
                        onClick={() => {setIndex(i)}}
                    >
                        {year.year}
                    </button>)
                }   
                </div>
                <div className={s.indicator}>
                    <div className={s.gradient}>
                    </div>
                    <div className={s.line}>
                    </div>
                </div>
                
            
            </div>
            <div className={s.content}>
                <div className={s.textContainer}>
                    <h4 className={s.overTitle}>
                        {item.year}
                    </h4>
                    <h2 className={s.title}>
                        {item.text}
                    </h2>
                </div>
                <img className={s.background} src={gradient}/>
            </div>
        </div>
    )
}

export default Timeline;