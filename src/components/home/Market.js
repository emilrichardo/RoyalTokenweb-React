import React from 'react';
import { useTranslation } from 'react-i18next';

import azul from "../../images/body/azul.jpg";
import wallet from "../../images/icons/body/market/NFT_blue_wallet.svg";
import collection from "../../images/icons/body/market/Collection_blue.svg";
import nft from "../../images/icons/body/market/NFT_blue.svg"
import sale from "../../images/icons/body/market/sale.svg"
import center from "../../images/body/center.png"
import seguridad from "../../images/icons/body/market/Royal_Seguridad.svg"
import transaccion from "../../images/icons/body/market/Royal_Transacciones.svg"
import royalnft from "../../images/icons/body/market/Royal_NFT.svg"
import vender from "../../images/icons/body/market/Royal_Vender.svg"
import amarillo from "../../images/body/amarillo.jpg"

export default function Market() {
    const [t, i18n] = useTranslation("global")
    return(
        <>
        <section id="five">
            <div className="block-box-bg">
                <div className="bg-overlay blue soft"></div>
                <img src={azul} loading="lazy"/>
                <div className="wrapper">
                    <div className="text">
                        <h2 className="h1">{t("market.Market_01")}</h2>
                        <p className="h3">{t("market.Market_02")}</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-blue-light">
            <div className="block-content">
                <div className="grid col-2 small-col-1 teaser">
                    <div>
                        <img src={wallet} />
                        <h4 className="h4">{t("market.Market_Teaser_01")}</h4>
                        <p>{t("market.Market_Teaser_02")}</p>
                    </div>
                    <div>
                        <img src={collection} />
                        <h4 className="h4">{t("market.Market_Teaser_03")}</h4>
                        <p>{t("market.Market_Teaser_04")}</p>
                    </div>
                    <div>
                        <img src={nft} />
                        <h4 className="h4">{t("market.Market_Teaser_05")}</h4>
                        <p>{t("market.Market_Teaser_06")}</p>
                    </div>
                    <div>
                        <img src={sale}/>
                        <h4 className="h4">{t("market.Market_Teaser_07")}</h4>
                        <p>{t("market.Market_Teaser_08")}</p>
                    </div>
                </div>

                <div className="content center">
                    <div className="block">
                        <center>
                            <h3 className="h2">{t("market.Market_Center")}</h3>
                        </center>
                        <img src={center} loading="lazy"/>
                    </div>
                </div>

                <div className="grid col-4 med-col-2 small-col-1 teaser-center">
                    <div>
                        <img src={seguridad} />
                        <h4>{t("market.Market_Center_01")}</h4>
                    </div>
                    <div>
                        <img src={transaccion} />
                        <h4>{t("market.Market_Center_02")}</h4>
                    </div>
                    <div>
                        <img src={royalnft} />
                        <h4>{t("market.Market_Center_03")}</h4>
                    </div>
                    <div>
                        <img src={vender} />
                        <h4>{t("market.Market_Center_04")}</h4>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="block-box-bg left">
                <div className="bg-overlay blue soft"></div>
                <img src={amarillo} loading="lazy"/>
                <div className="wrapper">
                    <div className="text">
                        <h2 className="h2">{t("market.Market_03")}</h2>
                        <p>{t("market.Market_04")}</p>
                        <a href="http://my.nftroyaltoken.com/join/admin" className="btn gold">{t("buttons.Btn_Register")}</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-blue-light">
            <div className="block-content big">
                <div className="grid-text col-2">
                    <div>
                        <p>{t("market.Market_05")}</p>
                    </div>
                </div>

                <center>
                    <h3 className="h2 margin-top">{t("market.Market_06")}</h3>
                    <div className="buttons center">
                        <a href="#" className="btn gold">{t("buttons.Btn_Buy")}</a>
                    </div>
                </center>
            </div>
        </section>

        </>
    )
};
