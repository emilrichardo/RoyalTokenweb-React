import { useState } from "react";
import binance from "../images/icons/exchanges/binance.svg"
import {CopyToClipboard} from 'react-copy-to-clipboard';
export default function SmartContracts(params) {


    const [copied, setCopied] = useState(false)
    return(
        <>
         <label>Smart Contracts:</label>


            <span className="input">
            <a href="https://bscscan.com/token/0x1b2f67679798c764f2c0c69dfb6bda8b30a094cf" target="blank"><img alt="binance" src={binance} className="icon-exchange"/></a>


                <input
                    type="text"
                    id="contract"
                    value="0x1b2f67679798c764f2c0c69dfb6bda8b30a094cf" readOnly="readOnly"
                />

                 <CopyToClipboard>

                     <button onClick={()=> setCopied(true)} className="copy" text="0x1b2f67679798c764f2c0c69dfb6bda8b30a094cf"></button>


                 </CopyToClipboard>




            </span>

            {copied && <span>✓ Copied</span>}


        </>
    )
};
