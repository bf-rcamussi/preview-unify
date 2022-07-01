import React, { useEffect } from "react";
import s from './style.module.css';
import hex11 from 'assets/HexagonPattern/row1/1.png'
import hex12 from 'assets/HexagonPattern/row1/2.png'
import hex13 from 'assets/HexagonPattern/row1/3.png'
import hex14 from 'assets/HexagonPattern/row1/4.png'

import hex21 from 'assets/HexagonPattern/row2/1.png'
import hex22 from 'assets/HexagonPattern/row2/2.png'
import hex23 from 'assets/HexagonPattern/row2/3.png'
import hex24 from 'assets/HexagonPattern/row2/4.png'
import hex25 from 'assets/HexagonPattern/row2/4.png'

import hex31 from 'assets/HexagonPattern/row3/1.png'
import hex32 from 'assets/HexagonPattern/row3/2.png'
import hex33 from 'assets/HexagonPattern/row3/3.png'
import hex34 from 'assets/HexagonPattern/row3/4.png'
import vid from 'assets/HexagonVideo/hexagon-1-extended.mp4'
import gsap from "gsap";
import outline from 'assets/HexagonPattern/outline.png';

const MiddleHexagons = () => {

    useEffect(() => {
        gsap.fromTo(`.${s.image}`, {
            opacity: 0,
        },
        {
            opacity: 1,
            border: '1px solid inset transparent',
            duration: .2,
            stagger: .1,
            scrollTrigger: {
                trigger: `#hexContainer`,
                start: 'top center',
            }
        }
        )
    }, [])

    return (
        <div className={s.container}>
            <div className={s.hexContainer} id="hexContainer">
                <div className={`${s.row} ${s.row1}`}>
                    <div className={s.imageContainer}>
                        <img className={s.image} src={hex11} />
                        <img className={s.outline} src={outline}/>
                    </div>
                    <div className={s.imageContainer}>
                        <img className={s.image} src={hex12} />
                        <img className={s.outline} src={outline}/>
                    </div>
                    <div className={s.imageContainer}>
                        <img className={s.image} src={hex13} />
                        <img className={s.outline} src={outline}/>
                    </div>
                    <div className={s.imageContainer}>
                        <div className={`${s.animHex} ${s.image}`}>
                            <video className={s.image} src={vid} autoPlay loop/>
                        </div>
                        <img className={s.outline} src={outline}/>
                    </div>
                </div>

                <div className={`${s.row} ${s.row2}`}>
                    <div className={s.imageContainer}>
                        <div className={`${s.animHex} ${s.image}`}>
                            <video className={s.image} src={vid} autoPlay loop/>
                        </div>
                        <img className={s.outline} src={outline}/>
                    </div>
                    <div className={s.imageContainer}>
                        <img className={s.image} src={hex21} />
                        <img className={s.outline} src={outline}/>
                    </div>
                    <div className={s.imageContainer}>
                        <img className={s.image} src={hex23} />
                        <img className={s.outline} src={outline}/>
                    </div>
                    <div className={s.imageContainer}>
                        <img className={s.image} src={hex24} />
                        <img className={s.outline} src={outline}/>
                    </div>
                    <div className={s.imageContainer}>
                        <img className={s.image} src={hex25} />
                        <img className={s.outline} src={outline}/>
                    </div>
                </div>

                <div className={`${s.row} ${s.row3}`}>
                    <div className={s.imageContainer}>
                        <div className={`${s.animHex} ${s.image}`}>
                            <video className={s.image} src={vid} autoPlay loop/>
                        </div>
                        <img className={s.outline} src={outline}/>
                    </div>
                    <div className={s.imageContainer}>
                        <img className={s.image} src={hex32} />
                        <img className={s.outline} src={outline}/>
                    </div>
                    <div className={s.imageContainer}>
                        <img className={s.image} src={hex33} />
                        <img className={s.outline} src={outline}/>
                    </div>
                    <div className={s.imageContainer}>
                        <img className={s.image} src={hex34} />
                        <img className={s.outline} src={outline}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MiddleHexagons;