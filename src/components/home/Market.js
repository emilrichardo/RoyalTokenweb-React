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
            <div class="block-box-bg">
                <div class="bg-overlay blue soft"></div>
                <img src={azul} loading="lazy"/>
                <div class="wrapper">
                    <div class="text">
                        <h2 class="h1">{t("market.Market_01")}</h2>
                        <p class="h3">{t("market.Market_02")}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-blue-light">
            <div class="block-content">
                <div class="grid col-2 small-col-1 teaser">
                    <div>
                        <img src={wallet} />
                        <h4 class="h4">{t("market.Market_Teaser_01")}</h4>
                        <p>{t("market.Market_Teaser_02")}</p>
                    </div>
                    <div>
                        <img src={collection} />
                        <h4 class="h4">{t("market.Market_Teaser_03")}</h4>
                        <p>{t("market.Market_Teaser_04")}</p>
                    </div>
                    <div>
                        <img src={nft} />
                        <h4 class="h4">{t("market.Market_Teaser_05")}</h4>
                        <p>{t("market.Market_Teaser_06")}</p>
                    </div>
                    <div>
                        <img src={sale}/>
                        <h4 class="h4">{t("market.Market_Teaser_07")}</h4>
                        <p>{t("market.Market_Teaser_08")}</p>
                    </div>
                </div>

                <div class="content center">
                    <div class="block">
                        <center>
                            <h3 class="h2">{t("market.Market_Center")}</h3>
                        </center>
                        <img src={center} loading="lazy"/>
                    </div>
                </div>

                <div class="grid col-4 med-col-2 small-col-1 teaser-center">
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
            <div class="block-box-bg left">
                <div class="bg-overlay blue soft"></div>
                <img src={amarillo} loading="lazy"/>
                <div class="wrapper">
                    <div class="text">
                        <h2 class="h2">{t("market.Market_03")}</h2>
                        <p>{t("market.Market_04")}</p>
                        <a href="#" class="btn gold">{t("buttons.Btn_Register")}</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-blue-light">
            <div class="block-content big">
                <div class="grid-text col-2">
                    <div>
                        <p>{t("market.Market_05")}</p>
                    </div>
                </div>

                <center>
                    <h3 class="h2 margin-top">{t("market.Market_06")}</h3>
                    <div class="buttons center">
                        <a href="#" class="btn gold">{t("buttons.Btn_Buy")}</a>
                    </div>
                </center>
            </div>
        </section>

        </>
    )
};
