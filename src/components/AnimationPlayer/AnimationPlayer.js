import React, { useRef, useState } from "react";
import animationData from 'assets/Json/gradientbars-01';
import { useEffect } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import {create} from '@lottiefiles/lottie-interactivity';


export default ({
                animationData,
                width, height, 
                autoplay=false,
                delay,
                loop=false, mode,
                id, visibility
              }) => {

    const player = useRef(null);
    const [state, setState] = useState({lottie: null});
    const [ready, setReady] = useState(false);
    const handleEvent = (e) => {
      if (e === 'load') {
        setReady(true);
      }
    }

    useEffect(() => {
      if (!ready) return;

      const totalFrames = state.lottie.totalFrames;

      if (mode == "scroll"){
        create({
          mode: 'scroll',
          player: state.lottie,
          container: `.${id}`,
          actions: [
            {
              visibility: visibility,
              type: 'seek',
              frames: [0, totalFrames-1],
              loop: loop
            },
          ],
        });
      }
      else if (mode == "trigger"){
        create({
          mode: 'scroll',
          player: state.lottie,
          container: `.${id}`,
          actions: [
            {
              visibility: visibility,
              type: 'play',
              frames: [0, totalFrames-1],
              loop: loop
            },
          ],
        });
      }
      else if (loop){
        create({
          mode: 'chain',
          player: state.lottie,
          container: `.${id}`,
          actions: [
            { 
              state: 'loop',
              visibility: [0.2, 0.5],
              frames: [0, totalFrames-1],
              loop: loop,
              
            },
          ],
        });
      }
      else if (delay){
        setTimeout(()=> {
          state.lottie.play()
        }, delay)
      }

    }, [ready])

    return (
        <div>
              <Player
                width={width}
                height={height}
                lottieRef={ins => setState({lottie: ins})}
                ref={player}
                renderer={'svg'}
                src={animationData}
                style={{width, height}}
                rendererSettings={
                  {preserveAspectRatio: 'xMidYMid meet'}
                }
                onEvent={handleEvent}
                keepLastFrame
                autoplay={autoplay}
                loop={loop}
              />
        </div>
        
    )
}
