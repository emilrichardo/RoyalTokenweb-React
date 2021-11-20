import React from 'react';
import { useTranslation } from 'react-i18next';

import whitepaperEng from "../../resources/whitepaper/eng.pdf"
import whitepaperEsp from "../../resources/whitepaper/esp.pdf"

import presProEng from "../../resources/presentations/eng_pro.pdf"
import presProEsp from "../../resources/presentations/esp_pro.pdf"
import presStaEng from "../../resources/presentations/eng_sta.pdf"
import presStaEsp from "../../resources/presentations/esp_sta.pdf"
import presTokEng from "../../resources/presentations/eng_tok.pdf"
import presTokEsp from "../../resources/presentations/esp_tok.pdf"

import log01 from "../../images/logo/company/dexguru_bn.svg"
import log02 from "../../images/logo/company/Coinmarketcap_bn.svg"
import log03 from "../../images/logo/company/CoinGeck_bn.svg"
import log04 from "../../images/logo/company/Pancakeswap_bn.svg"
import log05 from "../../images/logo/company/Bingbon_bn.svg"
import log06 from "../../images/logo/company/Dicitalcoin_bn.svg"
import log07 from "../../images/logo/company/bscscan.svg"
import log08 from "../../images/logo/company/Cryptorank_bn.svg"
import log09 from "../../images/logo/company/coindataflow_bn.svg"

export default function Road() {
    const [t, i18n] = useTranslation("global");
    const {language} = i18n ;

    return(
        <>
          <section class="bg-blue-soft" id="six">
            <div class="block-content big" style={{position: "relative"}}>
                <center>
                    <h3 class="h2" style={{marginBottom: "80px",color:"var(--color-gold)"}}>{t("road.Road_Title")}</h3>
                </center>

                <div class="road-map">
                    <span class="arrow"></span>
                    <span></span>
                    <div class="road-teaser">
                        <div>
                            <h4 class="h3">{t("road.Road_01")} 2021</h4>
                            <p><b>Token</b></p>
                            <p>{t("road.Road_01_text")} </p>
                            <span></span>
                        </div>
                    </div>
                    <div class="road-teaser">
                        <div>
                            <h4 class="h3">{t("road.Road_02")} 2021</h4>
                            <p><b>Staking</b></p>
                            <p>{t("road.Road_02_text")} </p>
                            <span></span>
                        </div>
                    </div>
                    <div class="road-teaser">
                        <div>
                            <h4 class="h3">{t("road.Road_03")}  2021</h4>
                            <p><b>Exchange</b></p>
                            <p>{t("road.Road_03_text")} </p>
                            <span></span>
                        </div>
                    </div>

                    <div class="road-teaser">
                        <div>
                            <h4 class="h3">{t("road.Road_04")}  2021</h4>
                            <p><b>Coinmarketcap</b></p>
                            <p>{t("road.Road_04_text")} </p>
                            <span></span>
                        </div>
                    </div>

                    <div class="road-teaser">
                        <div>
                            <h4 class="h3">{t("road.Road_06")} 2022</h4>
                            <p><b>NFT Marketplace</b></p>
                            <p>{t("road.Road_06_text")} </p>
                            <span></span>
                        </div>
                    </div>


                </div>

                <div class="road">
                    <h4 class="h3">{t("road.Road_08")}  2022</h4>
                    <p><b>Gaming platform</b></p>
                    <p>{t("road.Road_08_text")} </p>
                </div>


                <div class="buttons center">
                    <a href={language === "en" ? whitepaperEng : whitepaperEsp} target="_blank" class="btn gold pdf">Whitepaper</a>
                </div>
                <div class="buttons center">
                    <a href={language === "en" ? presTokEng : presTokEsp} target="_blank" class="btn outline pres">Royal Token {t("buttons.Btn_Pres")}</a>
                    <a href={language === "en" ? presStaEng : presStaEsp} target="_blank" class="btn outline pres">Royal Staking {t("buttons.Btn_Pres")}</a>
                </div>

                <div class="social-share">
                    <ul>
                        <li><a href="https://www.facebook.com/NFT-Royal-Token-100558212373334" target="_blank" class="share-facebook"></a></li>
                        <li><a href="https://dappradar.com/binance-smart-chain/gambling/nft-royal-token" target="_blank" class="share-dappradar"></a></li>
                        <li><a href="https://twitter.com/nftroyaltokenes?s=11" target="_blank" class="share-twitter"></a></li>
                        <li><a href={language === "en" ? 'https://t.me/NFTroyaltokenOficial' : 'https://t.me/nftroyaltoken'} target="_blank" class="share-telegram"></a></li>
                        <li><a href="https://www.youtube.com/channel/UCw6acysO2eWSajMGw4lYNcg" target="_blank" class="share-youtube"></a></li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="bg-blue">
            <div class="block-content">
                <div class="logos">


                    <a href="https://dex.guru/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599-eth" target="_blank"><img src={log01}/></a>
                    <a href="https://coinmarketcap.com/currencies/nft-royal-token/" target="_blank"><img src={log02} /></a>
                    <a href="https://www.coingecko.com/en/coins/nft-royal-token" target="_blank"><img src={log03} /></a>
                    <a href="https://pancakeswap.finance/info/token/0x1b2f67679798c764f2c0c69dfb6bda8b30a094cf" target="_blank"><img src={log04}/></a>
                    <a href="https://bingbon.com/en-us/prices/nft-royal-token/" target="_blank"><img src={log05} /></a>
                    <a href="https://digitalcoinprice.com/coins/nft-royal-token" target="_blank"><img src={log06} /></a>
                    <a href="https://bscscan.com/token/0x1b2f67679798c764f2c0c69dfb6bda8b30a094cf" target="_blank"><img src={log07} /></a>
                    <a href="https://cryptorank.io/news/nft-royal-token" target="_blank"><img src={log08} class="small" /></a>
                    <a href="https://coindataflow.com/en/prediction/nft-royal-token" target="_blank"><img src={log09} class="small" /></a>
                </div>
            </div>
        </section>
        </>
    )
};
