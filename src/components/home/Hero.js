
import React from 'react';
import { useTranslation } from 'react-i18next';

import HeroBackground from './HeroBackground';
import Prices from "../Prices"
import SmartContracts from '../SmartContracts';

const Hero = ({children}) => {
    const [t, i18n] = useTranslation("global")

    return ( <>

        <section id="one" className="bg-gradient zindex">
        <div className="hero">
             <div className="content-hero">
                <div>
                    <HeroBackground/>

                </div>

                <div>
                    <Prices/>
                    <SmartContracts/>

                     {children}
                    <div className="buttons left">
                    <a href="#two" className="btn outline">{t("buttons.Btn_Read")} </a>
                    </div>
                </div>
            </div>
         </div>
        </section>

    </> );
}

export default Hero;