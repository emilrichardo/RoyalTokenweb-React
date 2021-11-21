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


        <section id="four" class="telon ">
            <div class="palo-telon"></div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="block-box-bg">
                <div class="bg-overlay soft"></div>
                <img src={rosa2} loading="lazy"/>
                <div class="wrapper">
                    <div class="text">
                        <p class="h3">{t("gaming.Gaming_01")}</p>
                        <h2 class="h1">{t("gaming.Gaming_02")}</h2>
                    </div>
                </div>
            </div>
            </section>
        </Reveal>

        <section class="bg-purple">

            <span class="bg-purple-top"></span>
            <div class="block-content">
                <div class="block-box right bottom">
                    <img src={verdagaming} loading="lazy"/>
                    <div class="text">
                        <h4 class="h2">{t("gaming.Gaming_Today")}</h4>
                        <p class="h4">{t("gaming.Gaming_03")}</p>
                    </div>
                </div>

                <div class="block-box bottom box-black">
                    <img src={naranja} loading="lazy"/>
                    <div class="text">
                        <p class="h4">{t("gaming.Gaming_04")}</p>
                        <p class="h4">{t("gaming.Gaming_05")}</p>
                    </div>
                </div>
            </div>

            <div class="block-content">
                <center>
                    <h2 class="h1">{t("gaming.Gaming_06")}</h2>
                </center>

                <div class="teaser-gaming">
                    <div>
                        <img src={naranja} loading="lazy"/>
                        <h4 class="h4">{t("gaming.Gaming_Teaser_01")}</h4>
                        <p>{t("gaming.Gaming_Teaser_02")}</p>
                    </div>
                    <div>
                        <img src={seguridad} loading="lazy"/>
                        <h4 class="h4">{t("gaming.Gaming_Teaser_03")}</h4>
                        <p>{t("gaming.Gaming_Teaser_04")}</p>
                    </div>
                    <div>
                        <img src={etherscan} loading="lazy"/>
                        <h4 class="h4">{t("gaming.Gaming_Teaser_05")}</h4>
                        <p>{t("gaming.Gaming_Teaser_06")}</p>
                    </div>
                    <div>
                        <img src={api} loading="lazy"/>
                        <h4 class="h4">{t("gaming.Gaming_Teaser_07")}</h4>
                        <p>{t("gaming.Gaming_Teaser_08")}</p>
                    </div>
                    <div>
                        <img src={fiabilidad} loading="lazy"/>
                        <h4 class="h4">{t("gaming.Gaming_Teaser_09")}</h4>
                        <p>{t("gaming.Gaming_Teaser_10")}</p>
                    </div>
                </div>
            </div>
            <span class="bg-purple-bottom"></span>
        </section>
        </>
    )
};
