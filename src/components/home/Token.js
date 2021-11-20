import React from 'react';
import { useTranslation } from 'react-i18next';
import verde from "../../images/body/verde.png"
import verde2 from "../../images/body/verde2.png"
export default function Token(params) {
    const [t, i18n] = useTranslation("global")
    return(
        <section class="bg-gradient" id="three">
            <div class="block-content big">
                <div class="content center top">
                    <center>
                        <h2 class="h2">{t("token.Token_Title")}</h2>
                    </center>
                </div>

                <div class="block-box right top margin-top">
                    <img src={verde} loading="lazy"/>
                    <div class="text">
                        <h2 class="h3">{t("token.Token_01")} </h2>
                        <p>{t("token.Token_02")}</p>
                    </div>
                </div>

                <div class="block-box top margin-minus">
                    <img src={verde2} loading="lazy"/>
                    <div class="text">
                        <h2 class="h3">{t("token.Token_03")}</h2>
                        <p>{t("token.Token_04")}</p>

                        <div class="menu list item color-white">
                            <h2 class="h4">{t("token.Token_Title_02")}</h2>
                            <ul>
                                <li>{t("token.Token_Types_01")}</li>
                                <li>{t("token.Token_Types_02")}</li>
                                <li>{t("token.Token_Types_03")}</li>
                                <li>{t("token.Token_Types_04")}</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
};
