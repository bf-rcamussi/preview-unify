import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/PPNeueMontreal-Medium.ttf';
import './assets/fonts/PPNeueBit-Bold.ttf';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import gsap from 'gsap';


const root = ReactDOM.createRoot(document.getElementById('root'));
gsap.registerPlugin(ScrollTrigger, TextPlugin);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
