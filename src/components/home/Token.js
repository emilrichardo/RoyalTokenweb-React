import React from 'react';
import { useTranslation } from 'react-i18next';
import verde from "../../images/body/verde.png"
import verde2 from "../../images/body/verde2.png"
import verde3 from "../../images/body/verde3.png"
export default function Token(params) {
    const [t, i18n] = useTranslation("global")
    return(
        <>
        <section className="bg-gradient" id="three">
            <div className="block-content big">
                <div className="content center top">
                    <center>
                        <h2 className="h2">{t("token.Token_Title")}</h2>
                    </center>
                </div>

                <div className="block-box right top margin-top">
                    <img src={verde} loading="lazy"/>
                    <div className="text">
                        <h2 className="h3">{t("token.Token_01")} </h2>
                        <p>{t("token.Token_02")}</p>
                    </div>
                </div>

                <div className="block-box top margin-minus">
                    <img src={verde2} loading="lazy"/>
                    <div className="text">
                        <h2 className="h3">{t("token.Token_03")}</h2>
                        <p>{t("token.Token_04")}</p>

                        <div className="menu list item color-white">
                            <h2 className="h4">{t("token.Token_Title_02")}</h2>
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
        <section>
            <div className="block-content big">

                <div className="block-box right">
                    <img src={verde3} loading="lazy"/>
                    <div className="text">
                        <h2 className="h3">{t("token.Token_05")}</h2>
                        <p>{t("token.Token_06")}</p>
                        <a href='http://my.nftroyaltoken.com/join/admin' className="btn gold">{t("buttons.Btn_Register")}</a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};
