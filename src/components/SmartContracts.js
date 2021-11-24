import { useState } from "react";
import binance from "../images/icons/exchanges/binance.svg"
import {CopyToClipboard} from 'react-copy-to-clipboard';
export default function SmartContracts(params) {


    const [copied, setCopied] = useState(false)
    return(
        <>
         <label>Smart Contracts:</label>


            <span class="input">
            <a href="https://bscscan.com/token/0x1b2f67679798c764f2c0c69dfb6bda8b30a094cf" target="_blank"><img src={binance} class="icon-exchange"/></a>


                <input
                    type="text"
                    id="contract"
                    value="0x1b2f67679798c764f2c0c69dfb6bda8b30a094cf" readonly="readonly"
                />

                 <CopyToClipboard>

                     <button onClick={()=> setCopied(true)} class="copy" text="0x1b2f67679798c764f2c0c69dfb6bda8b30a094cf"></button>


                 </CopyToClipboard>




            </span>

            {copied && <span>✓ Copied</span>}


        </>
    )
};
