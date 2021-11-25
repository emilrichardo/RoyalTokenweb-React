import React from 'react';
import { useTranslation } from 'react-i18next';
import crown from '../../images/icons/body/icon_crown.svg';

export default function Lion(params) {
    const [t, i18n] = useTranslation("global")
    return(
        <div className="parallax bg-blue">
            <div className="cosa">
                <div>
                    <img src={crown} className="crown" />
                    <h2 className="h2">{t("hero.Lion_01")}</h2>
                    <p className="h4">{t("hero.Lion_02")} </p>
                </div>
            </div>
        </div>
    )
};
