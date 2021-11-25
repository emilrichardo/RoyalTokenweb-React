import React from 'react';
import { useTranslation } from 'react-i18next';

import token from "../../images/icons/body/token.svg";
import block from "../../images/icons/body/blockchain.svg";
import precio from "../../images/icons/body/precio.svg";


export default function King() {
    const [t, i18n] = useTranslation("global")
    return(
        <section id="two">
            <div className="block-content big">
                <div className="grid col-2 small-col-1 first">
                    <div>
                        <h2 className="h2">{t("king.King_01")}</h2>
                        <p className="h4">{t("king.King_02")}</p>
                    </div>
                    <div>
                        <div className="menu list item">
                            <ul>
                                <li>{t("king.King_List_01")}</li>
                                <li>{t("king.King_List_02")}</li>
                                <li>{t("king.King_List_03")}</li>
                                <li>{t("king.King_List_04")}</li>
                                <li>{t("king.King_List_05")}</li>
                                <li>{t("king.King_List_06")}</li>
                                <li>{t("king.King_List_07")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="icons">
                    <div>
                        <img src={token}/>

                        <h4>{t("king.King_Royal_01")}</h4>
                    </div>
                    <div>
                        <img src={block} />
                        <h4>{t("king.King_Royal_02")}</h4>
                    </div>
                    <div>
                        <img src={precio} />
                        <h4>{t("king.King_Royal_03")}</h4>
                    </div>
                </div>
            </div>
        </section>
    )
};
