import { useLottie } from "lottie-react";
import React, { useRef } from "react";
import animationData from 'assets/Json/gradientbars-01';
import { gsap } from "gsap";
import { useEffect } from "react";
import lottie from "lottie-web";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lottie from 'react-lottie';
import {create} from '@lottiefiles/lottie-interactivity';
import '@lottiefiles/lottie-player';

export default ({animationData, width, height, autoplay=false,
                container, waitTime,
                loop=false, behavior, trigger, id}) => {

    const player = useRef(null);


    useEffect(() => {
        if (behavior == 'visibilityTrigger'){
            player.current.addEventListener('ready', function (e) {
                create({
                  mode: 'scroll',
                  player: player.current,
                  actions: [
                    {
                      visibility: [0.1, 1],
                      type: 'play',
                      frames: [0, '100%'],
                    },
                  ],
                });
              });
        }
        else if (behavior == 'scrollControl'){
            player.current.addEventListener('ready', function (e) {
                create({
                  mode: 'scroll',
                  player: player.current,
                  container,
                  actions: [
                    {
                      visibility: [.5, 1],
                      type: 'seek',
                      frames: [0, 100],
                    },
                  ],
                });
              });
        }
        else if (behavior == 'wait'){
          setTimeout(() => {
            player.current.play()
          },waitTime
          );
        }
        return player.current.stop();
    }, [])

    return (
        <div style={{width, height}}>
            <lottie-player
                ref={player}
                id={id}
                autoplay={autoplay || null}
                loop={loop && null}
                mode="normal"
                src={JSON.stringify(animationData)}
                >
                    
            </lottie-player>
        </div>
        
    )
}