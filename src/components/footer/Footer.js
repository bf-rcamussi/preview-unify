import React from "react";
import s from './style.module.css';
import unify from 'assets/Logos/unifi-protocol-logo-negative.svg';
import telegram from "assets/Logos/telegram-logo-negative.svg";
import twitter from "assets/Logos/twitter-logo-negative.svg";
import youtube from "assets/Logos/youtube-logo-negative.svg";
import medium from "assets/Logos/medium-logo-negative.svg";

const links = {

}

const Footer = () => {
    return (
        <footer className={s.container}>
            <div className={s.main}>
                <a className={s.logo}>
                    <img src={unify}/>
                </a>
                <div className={s.col}>
                    <h5 className={s.colTitle}>
                        Partners
                    </h5>
                    <a className={s.link}>
                        Ethereum
                    </a>
                    <a className={s.link}>
                        Binance
                    </a> 
                    <a className={s.link}>
                        Smart Chain
                    </a>
                    <a className={s.link}>
                        IoTeX
                    </a>
                    <a className={s.link}>
                        Ontology
                    </a>
                    <a className={s.link}>
                        Avalance
                    </a>
                    <a className={s.link}>
                        Polygon
                    </a>
                    <a className={s.link}>
                        Harmony
                    </a>
                    <a className={s.link}>
                        Icon
                    </a>
                    <a className={s.link}>
                        Tron
                    </a>
                    <a className={s.link}>
                        Bit Torrent
                    </a>
                </div>

                <div className={s.col}>
                    <h5 className={s.colTitle}>
                        Resources
                    </h5>
                    <a className={s.link}>
                        White Paper
                    </a>
                    <a className={s.link}>
                        Litte Paper
                    </a>
                    <a className={s.link}>
                        Help Desk
                    </a>
                    <a className={s.link}>
                        Audit Report
                    </a>
                    <a className={s.link}>
                        Unifi Report
                    </a>
                    <a className={s.link}>
                        Brand Assets
                    </a>
                    <a className={s.link}>
                        Developer Docs
                    </a>
                </div>

                <div className={s.col}>
                    <h5 className={s.colTitle}>
                        Our Products
                    </h5>
                    <a className={s.link}>
                        Trading
                    </a>
                    <a className={s.link}>
                        Staking
                    </a>
                    <a className={s.link}>
                        Cross Chain
                    </a>
                    <a className={s.link}>
                        Report
                    </a>
                    <a className={s.link}>
                        Government DAO
                    </a>
                </div>

                <div className={s.col}>
                    <h5 className={s.colTitle}>
                        Community
                    </h5>
                    <a className={s.link}>
                        Telegram
                    </a>
                    <a className={s.link}>
                        Discord
                    </a>
                    <a className={s.link}>
                        Twitter
                    </a>
                    <a className={s.link}>
                        Medium
                    </a>
                </div>
            </div>
            <div className={s.bottomBar}>
                <span className={s.rights}>@2022 All rights reserved.</span>
                <div className={s.bottomIcons}>
                    <a>
                        <img src={telegram}/>
                    </a>
                    <a>
                        <img src={twitter}/>
                    </a>
                    <a>
                        <img src={youtube}/>
                    </a>
                    <a>
                        <img src={medium}/>
                    </a>
                </div>
            </div>
            <div className={s.hexagons}>
                
            </div>
        </footer>
    )
}


export default Footer;