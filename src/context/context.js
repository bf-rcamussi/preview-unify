import { createContext } from "react";


export const context = createContext({
    scroll: null,
    setScroll: null,
    isMobile: window.innerWidth < window.innerHeight
});