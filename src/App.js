import Main from 'components/main/Main';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { context } from 'context/context';


function App() {
  const ref = useRef();
  const [scroll, setScroll] = useState(null); 
  const [isMobile, setIsMobile] = useState();
  const [canScroll, setCanScroll] = useState(false);
  
  const updateMobile = () => {
    const isNowMobile = window.innerWidth < window.innerHeight;
      if (isMobile !== isNowMobile) {
        setIsMobile(isNowMobile);
      }
  };

  useEffect(() => {
    (async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const scr = new LocomotiveScroll({
          el: ref.current,
          smooth: true,
          lerp: 0.05,
          multiplier: 1,
          firefoxMultiplier: .5,
          smartphone: {
            smooth: true
          },
          tablet: {
            smooth: true
          },
          scrollFromAnywhere: true
        })
        setScroll(scr)
        scr.stop()
      } catch (error) {
        throw Error(`[SmoothScrollProvider]: ${error}`)
      }
    })()

    return () => {
      scroll?.destroy()
    }
  }, [])


  useEffect(() => {
    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => {window.removeEventListener('resize', updateMobile)};
  }, [])


  return (
    <context.Provider value={{scroll, isMobile, setIsMobile, canScroll, setCanScroll}}>
      <div className="App">
        <main ref={ref}  >
          <Main/>
        </main>
      </div>
    </context.Provider>
  );
}

export default App;