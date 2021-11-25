import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from 'react-reveal/Reveal';


import rosa2 from "../../images/body/rosa2.jpg"
import verdagaming from "../../images/body/verde_gaming.png"
import naranja from "../../images/body/naranja.png"
import seguridad from "../../images/icons/body/gaming/Seguridad.png"
import etherscan from "../../images/icons/body/gaming/Etherscan.png"
import api from "../../images/icons/body/gaming/API.png"
import fiabilidad from "../../images/icons/body/gaming/Fiabilidad.png"
export default function Gaming() {
    const [t, i18n] = useTranslation("global")
    return(
        <>

    <Reveal   effect="telon  fade-in" effectOut="telon" delay={40000}>


        <section id="four" className="telon ">
            <div className="palo-telon"></div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="block-box-bg">
                <div className="bg-overlay soft"></div>
                <img src={rosa2} loading="lazy"/>
                <div className="wrapper">
                    <div className="text">
                        <p className="h3">{t("gaming.Gaming_01")}</p>
                        <h2 className="h1">{t("gaming.Gaming_02")}</h2>
                    </div>
                </div>
            </div>
            </section>
        </Reveal>

        <section className="bg-purple">

            <span className="bg-purple-top"></span>
            <div className="block-content">
                <div className="block-box right bottom">
                    <img src={verdagaming} loading="lazy"/>
                    <div className="text">
                        <h4 className="h2">{t("gaming.Gaming_Today")}</h4>
                        <p className="h4">{t("gaming.Gaming_03")}</p>
                    </div>
                </div>

                <div className="block-box bottom box-black">
                    <img src={naranja} loading="lazy"/>
                    <div className="text">
                        <p className="h4">{t("gaming.Gaming_04")}</p>
                        <p className="h4">{t("gaming.Gaming_05")}</p>
                    </div>
                </div>
            </div>

            <div className="block-content">
                <center>
                    <h2 className="h1">{t("gaming.Gaming_06")}</h2>
                </center>

                <div className="teaser-gaming">
                    <div>
                        <img src={naranja} loading="lazy"/>
                        <h4 className="h4">{t("gaming.Gaming_Teaser_01")}</h4>
                        <p>{t("gaming.Gaming_Teaser_02")}</p>
                    </div>
                    <div>
                        <img src={seguridad} loading="lazy"/>
                        <h4 className="h4">{t("gaming.Gaming_Teaser_03")}</h4>
                        <p>{t("gaming.Gaming_Teaser_04")}</p>
                    </div>
                    <div>
                        <img src={etherscan} loading="lazy"/>
                        <h4 className="h4">{t("gaming.Gaming_Teaser_05")}</h4>
                        <p>{t("gaming.Gaming_Teaser_06")}</p>
                    </div>
                    <div>
                        <img src={api} loading="lazy"/>
                        <h4 className="h4">{t("gaming.Gaming_Teaser_07")}</h4>
                        <p>{t("gaming.Gaming_Teaser_08")}</p>
                    </div>
                    <div>
                        <img src={fiabilidad} loading="lazy"/>
                        <h4 className="h4">{t("gaming.Gaming_Teaser_09")}</h4>
                        <p>{t("gaming.Gaming_Teaser_10")}</p>
                    </div>
                </div>
            </div>
            <span className="bg-purple-bottom"></span>
        </section>
        </>
    )
};
