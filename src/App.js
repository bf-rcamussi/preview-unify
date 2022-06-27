import Main from 'components/main/Main';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { context } from 'context/context';


function App() {
  const ref = useRef();
  const [scroll, setScroll] = useState(null); 

  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
      const scrollInstance = new locomotiveModule.default({
        el: ref.current,
        smooth: true,
        lerp: 0.05,
        multiplier: 1,
        firefoxMultiplier: 0.1
      });
      gsap.registerPlugin(ScrollTrigger);
      setScroll(scrollInstance);
    });    
  }, []);


  return (
    <context.Provider value={{scroll, setScroll}}>
      <div className="App">
        <main ref={ref} data-scroll-container>
          <Main/>
        </main>
      </div>
    </context.Provider>
  );
}

export default App;
