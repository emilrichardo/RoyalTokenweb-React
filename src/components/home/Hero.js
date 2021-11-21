import React from 'react';
import { useTranslation } from 'react-i18next';

import binance from "../../images/icons/exchanges/binance.svg"
export default function Hero() {
    const [t, i18n] = useTranslation("global")

    return(
        <>
        <section id="one" class="bg-gradient zindex">
            <div class="hero">
                <div class="content-hero">
                <div>
                <svg id="hero_svg" xmlns="http://www.w3.org/2000/svg" mlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 590">
                    <defs>
                    <linearGradient id="linear-gradient" x1="384.49" y1="441.92" x2="384.49" y2="183.98" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#f5cc79"/>
                        <stop offset="0.15" stop-color="#f7d48a" stop-opacity="0.81"/>
                        <stop offset="0.38" stop-color="#fadfa4" stop-opacity="0.52"/>
                        <stop offset="0.59" stop-color="#fce8b9" stop-opacity="0.3"/>
                        <stop offset="0.77" stop-color="#feefc8" stop-opacity="0.14"/>
                        <stop offset="0.91" stop-color="#fff3d1" stop-opacity="0.04"/>
                        <stop offset="1" stop-color="#fff4d4" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-2" x1="767.01" y1="361.52" x2="705.81" y2="326.19" gradientUnits="userSpaceOnUse">
                        <stop offset="0.01" stop-color="#bf8933"/>
                        <stop offset="0.07" stop-color="#cb9843"/>
                        <stop offset="0.18" stop-color="#d8a955"/>
                        <stop offset="0.29" stop-color="#dfb460"/>
                        <stop offset="0.41" stop-color="#e2b763"/>
                        <stop offset="1" stop-color="#ffef9f"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-3" x1="743.88" y1="407.06" x2="688.14" y2="351.32" gradientUnits="userSpaceOnUse">
                        <stop offset="0.01" stop-color="#aa792b"/>
                        <stop offset="0.02" stop-color="#ae7e2f"/>
                        <stop offset="0.11" stop-color="#c59746"/>
                        <stop offset="0.2" stop-color="#d5a956"/>
                        <stop offset="0.3" stop-color="#dfb460"/>
                        <stop offset="0.41" stop-color="#e2b763"/>
                        <stop offset="1" stop-color="#ffef9f"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-4" x1="772.9" y1="395.28" x2="740.72" y2="363.1" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#a67629"/>
                        <stop offset="1" stop-color="#f5cc79"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-5" x1="596.97" y1="439.12" x2="529.87" y2="400.38" xlinkHref="#linear-gradient-2"/>
                    <linearGradient id="linear-gradient-6" x1="571.61" y1="489.04" x2="510.51" y2="427.93" xlinkHref="#linear-gradient-3"/>
                    <linearGradient id="linear-gradient-7" x1="603.42" y1="476.12" x2="568.15" y2="440.85" xlinkHref="#linear-gradient-4"/>
                    <linearGradient id="linear-gradient-8" x1="391.27" y1="518.57" x2="345.4" y2="492.08" xlinkHref="#linear-gradient-2"/>
                    <linearGradient id="linear-gradient-9" x1="373.93" y1="552.7" x2="332.15" y2="510.92" xlinkHref="#linear-gradient-3"/>
                    <linearGradient id="linear-gradient-10" x1="395.68" y1="543.87" x2="371.56" y2="519.75" xlinkHref="#linear-gradient-4"/>
                    <linearGradient id="linear-gradient-11" x1="634.5" y1="267.9" x2="555.07" y2="222.04" xlinkHref="#linear-gradient-2"/>
                    <linearGradient id="linear-gradient-12" x1="604.48" y1="327" x2="532.14" y2="254.66" xlinkHref="#linear-gradient-3"/>
                    <linearGradient id="linear-gradient-13" x1="642.15" y1="311.72" x2="600.38" y2="269.95" xlinkHref="#linear-gradient-4"/>
                    <linearGradient id="linear-gradient-14" x1="203.82" y1="448.32" x2="145.04" y2="414.39" xlinkHref="#linear-gradient-2"/>
                    <linearGradient id="linear-gradient-15" x1="181.6" y1="492.05" x2="128.08" y2="438.53" xlinkHref="#linear-gradient-3"/>
                    <linearGradient id="linear-gradient-16" x1="209.47" y1="480.74" x2="178.57" y2="449.84" xlinkHref="#linear-gradient-4"/>
                    <linearGradient id="linear-gradient-17" x1="98.96" y1="266" x2="36.99" y2="230.22" xlinkHref="#linear-gradient-2"/>
                    <linearGradient id="linear-gradient-18" x1="75.54" y1="312.1" x2="19.1" y2="255.67" xlinkHref="#linear-gradient-3"/>
                    <linearGradient id="linear-gradient-19" x1="104.92" y1="300.18" x2="72.34" y2="267.6" xlinkHref="#linear-gradient-4"/>
                    <linearGradient id="linear-gradient-20" x1="244.97" y1="244.1" x2="181.83" y2="207.64" xlinkHref="#linear-gradient-2"/>
                    <linearGradient id="linear-gradient-21" x1="221.11" y1="291.07" x2="163.61" y2="233.57" xlinkHref="#linear-gradient-3"/>
                    <linearGradient id="linear-gradient-22" x1="251.05" y1="278.92" x2="217.85" y2="245.72" xlinkHref="#linear-gradient-4"/>
                    <linearGradient id="linear-gradient-23" x1="536.44" y1="123.58" x2="480.86" y2="91.49" xlinkHref="#linear-gradient-2"/>
                    <linearGradient id="linear-gradient-24" x1="515.43" y1="164.94" x2="464.81" y2="114.32" xlinkHref="#linear-gradient-3"/>
                    <linearGradient id="linear-gradient-25" x1="541.79" y1="154.24" x2="512.56" y2="125.01" xlinkHref="#linear-gradient-4"/>
                    <linearGradient id="linear-gradient-26" x1="443.26" y1="321.64" x2="325.72" y2="253.77" xlinkHref="#linear-gradient-2"/>
                    <linearGradient id="linear-gradient-27" x1="398.83" y1="409.1" x2="291.78" y2="302.05" xlinkHref="#linear-gradient-3"/>
                    <linearGradient id="linear-gradient-28" x1="454.58" y1="386.48" x2="392.77" y2="324.67" xlinkHref="#linear-gradient-4"/>
                    <radialGradient id="radial-gradient" cx="1754.7" cy="293.45" r="12.35" gradientTransform="translate(-2493.65 114.62) scale(1.85 0.78)" gradientUnits="userSpaceOnUse">
                        <stop offset="0.16" stop-color="#936722" stop-opacity="0.6"/>
                        <stop offset="0.35" stop-color="#9e7232" stop-opacity="0.47"/>
                        <stop offset="0.73" stop-color="#bb905c" stop-opacity="0.13"/>
                        <stop offset="0.88" stop-color="#c69c6d" stop-opacity="0"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-2" cx="1661.95" cy="333.83" r="12.35" gradientTransform="translate(-2493.65 158.92) scale(1.85 0.78)" xlinkHref="#radial-gradient"/>
                    <radialGradient id="radial-gradient-3" cx="1007.41" cy="392.76" r="12.35" gradientTransform="translate(-962.72 263.32) scale(1.33 0.62)" xlinkHref="#radial-gradient"/>
                    <radialGradient id="radial-gradient-4" cx="1957.51" cy="229.69" r="12.35" gradientTransform="translate(-3910.72 42.36) scale(2.31 0.88)" xlinkHref="#radial-gradient"/>
                    <radialGradient id="radial-gradient-5" cx="1166.33" cy="343.77" r="12.35" gradientTransform="translate(-1633.75 186.1) scale(1.56 0.72)" xlinkHref="#radial-gradient"/>
                    <radialGradient id="radial-gradient-6" cx="1317.02" cy="234.02" r="12.35" gradientTransform="translate(-2301.39 61.87) scale(1.81 0.8)" gradientUnits="userSpaceOnUse">
                        <stop offset="0.16" stop-color="#936722" stop-opacity="0.6"/>
                        <stop offset="0.3" stop-color="#966a26" stop-opacity="0.57"/>
                        <stop offset="0.48" stop-color="#9e7333" stop-opacity="0.47"/>
                        <stop offset="0.67" stop-color="#ac8147" stop-opacity="0.3"/>
                        <stop offset="0.87" stop-color="#bf9563" stop-opacity="0.08"/>
                        <stop offset="0.93" stop-color="#c69c6d" stop-opacity="0"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-7" cx="1189.85" cy="223.51" r="12.35" gradientTransform="translate(-1633.75 65.22) scale(1.56 0.72)" xlinkHref="#radial-gradient"/>
                    <radialGradient id="radial-gradient-8" cx="1378.3" cy="154.94" r="12.35" gradientTransform="translate(-1633.75 -3.71) scale(1.56 0.72)" xlinkHref="#radial-gradient"/>
                    <radialGradient id="radial-gradient-9" cx="1303.97" cy="268.89" fx="1293.2491736780014" r="24.76" gradientTransform="translate(-1633.75 112.98) scale(1.56 0.67)" xlinkHref="#radial-gradient"/>
                    <linearGradient id="linear-gradient-29" x1="732.09" y1="321.61" x2="719.26" y2="299.39" gradientUnits="userSpaceOnUse">
                        <stop offset="0.01" stop-color="#6f8aa4"/>
                        <stop offset="0.05" stop-color="#7e97a9"/>
                        <stop offset="0.14" stop-color="#90a7ae"/>
                        <stop offset="0.22" stop-color="#9bb0b2"/>
                        <stop offset="0.32" stop-color="#9eb3b3"/>
                        <stop offset="1" stop-color="#f0eff2"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-30" x1="1724.07" y1="-1020.75" x2="1729.66" y2="-1030.43" gradientTransform="matrix(0.87, -0.5, 1, 0.58, 255.52, 1755.76)" gradientUnits="userSpaceOnUse">
                        <stop offset="0.01" stop-color="#637b8b"/>
                        <stop offset="0.3" stop-color="#708794"/>
                        <stop offset="0.83" stop-color="#92a7ab"/>
                        <stop offset="1" stop-color="#9eb3b3"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-31" x1="747.69" y1="326.48" x2="731.39" y2="298.24" xlinkHref="#linear-gradient-29"/>
                    <linearGradient id="linear-gradient-32" x1="1734.22" y1="-1015.69" x2="1739.81" y2="-1025.36" xlinkHref="#linear-gradient-30"/>
                    <linearGradient id="linear-gradient-33" x1="764.61" y1="330.47" x2="743.38" y2="293.7" xlinkHref="#linear-gradient-29"/>
                    <linearGradient id="linear-gradient-34" x1="1748.54" y1="-1013.62" x2="1754.12" y2="-1023.3" xlinkHref="#linear-gradient-30"/>
                    <radialGradient id="radial-gradient-10" cx="740.68" cy="309.25" fx="720.81014723387" fy="293.6626215159381" r="70.55" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#fff"/>
                        <stop offset="0.03" stop-color="#fff" stop-opacity="0.82"/>
                        <stop offset="0.06" stop-color="#fff" stop-opacity="0.67"/>
                        <stop offset="0.09" stop-color="#fff" stop-opacity="0.55"/>
                        <stop offset="0.12" stop-color="#fff" stop-opacity="0.47"/>
                        <stop offset="0.15" stop-color="#fff" stop-opacity="0.42"/>
                        <stop offset="0.18" stop-color="#fff" stop-opacity="0.4"/>
                        <stop offset="0.34" stop-color="#ebebed" stop-opacity="0.33"/>
                        <stop offset="0.67" stop-color="#b9b9bf" stop-opacity="0.13"/>
                        <stop offset="0.88" stop-color="#9696a0" stop-opacity="0"/>
                    </radialGradient>
                    <linearGradient id="linear-gradient-35" x1="-754.88" y1="1759.03" x2="-775.33" y2="1734.66" gradientTransform="matrix(0.87, 0.5, 0.5, 1.44, 357.51, -1754.01)" xlinkHref="#linear-gradient-30"/>
                    <linearGradient id="linear-gradient-36" x1="-766.95" y1="1766.27" x2="-785.99" y2="1743.57" gradientTransform="matrix(0.87, 0.5, 0.5, 1.44, 357.51, -1754.01)" gradientUnits="userSpaceOnUse">
                        <stop offset="0.01" stop-color="#6f8aa4"/>
                        <stop offset="0.07" stop-color="#7e97a9"/>
                        <stop offset="0.18" stop-color="#90a7ae"/>
                        <stop offset="0.29" stop-color="#9bb0b2"/>
                        <stop offset="0.41" stop-color="#9eb3b3"/>
                        <stop offset="1" stop-color="#f0eff2"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-37" x1="135.68" y1="1760.34" x2="128.21" y2="1751.44" gradientTransform="matrix(0.87, 0.5, 0, 1.15, 448.39, -1701.53)" xlinkHref="#linear-gradient-30"/>
                    <linearGradient id="linear-gradient-38" x1="563.72" y1="374.77" x2="571.69" y2="357.69" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#adbebe"/>
                        <stop offset="0.09" stop-color="#bac9c9"/>
                        <stop offset="0.35" stop-color="#e0e6e6"/>
                        <stop offset="0.56" stop-color="#f7f8f8"/>
                        <stop offset="0.7" stop-color="#fff"/>
                    </linearGradient>
                    <radialGradient id="radial-gradient-11" cx="565.94" cy="383.69" fx="546.0679941836256" fy="368.10708965305025" r="70.55" xlinkHref="#radial-gradient-10"/>
                    <linearGradient id="linear-gradient-39" x1="369.19" y1="497.54" x2="369.19" y2="443.07" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-30"/>
                    <linearGradient id="linear-gradient-40" x1="388.92" y1="492.86" x2="345.31" y2="449.25" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-36"/>
                    <linearGradient id="linear-gradient-41" x1="367.42" y1="476.15" x2="367.42" y2="462.67" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-30"/>
                    <radialGradient id="radial-gradient-12" cx="368.88" cy="470.31" fx="349.0121735584521" fy="454.72986396799683" r="70.55" xlinkHref="#radial-gradient-10"/>
                    <linearGradient id="linear-gradient-42" x1="617.78" y1="234.92" x2="567.81" y2="184.95" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-36"/>
                    <linearGradient id="linear-gradient-43" x1="610.73" y1="236.97" x2="574.85" y2="201.09" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-30"/>
                    <linearGradient id="linear-gradient-44" x1="219.93" y1="1452.09" x2="213.45" y2="1445.6" gradientTransform="matrix(0.68, 0.73, -0.34, 1.1, 945.83, -1546.88)" xlinkHref="#linear-gradient-30"/>
                    <linearGradient id="linear-gradient-45" x1="212.95" y1="1451.76" x2="206.46" y2="1445.27" gradientTransform="matrix(0.68, 0.73, -0.34, 1.1, 944.42, -1545.27)" gradientUnits="userSpaceOnUse">
                        <stop offset="0.01" stop-color="#a6bed5"/>
                        <stop offset="0.28" stop-color="#b3c6d9"/>
                        <stop offset="0.8" stop-color="#d5dbe3"/>
                        <stop offset="1" stop-color="#e4e5e7"/>
                    </linearGradient>
                    <radialGradient id="radial-gradient-13" cx="592.79" cy="209.94" fx="572.9239736931534" fy="194.35276661832546" r="70.55" xlinkHref="#radial-gradient-10"/>
                    <linearGradient id="linear-gradient-46" x1="-871.75" y1="1677.64" x2="-895.58" y2="1649.23" gradientTransform="matrix(0.87, 0.5, 0.5, 1.44, 113.08, -1570.9)" xlinkHref="#linear-gradient-30"/>
                    <linearGradient id="linear-gradient-47" x1="-877.41" y1="1680.62" x2="-900.42" y2="1653.19" gradientTransform="matrix(0.87, 0.5, 0.5, 1.44, 113.08, -1570.9)" xlinkHref="#linear-gradient-36"/>
                    <linearGradient id="linear-gradient-48" x1="-199.53" y1="1683.86" x2="-227.98" y2="1649.95" gradientTransform="matrix(0.87, 0.5, 0, 1.15, 361.82, -1427.29)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#adbebe"/>
                        <stop offset="0.03" stop-color="#b1c1c1"/>
                        <stop offset="0.3" stop-color="#d3dcdc"/>
                        <stop offset="0.56" stop-color="#ebefef"/>
                        <stop offset="0.8" stop-color="#fafbfb"/>
                        <stop offset="1" stop-color="#fff"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-49" x1="-210.39" y1="1672.76" x2="-217.03" y2="1661.27" gradientTransform="matrix(0.87, 0.5, 0, 1.15, 361.82, -1427.29)" xlinkHref="#linear-gradient-30"/>
                    <radialGradient id="radial-gradient-14" cx="178.14" cy="388.47" fx="158.27136360978315" fy="372.8910785985324" r="70.55" xlinkHref="#radial-gradient-10"/>
                    <linearGradient id="linear-gradient-50" x1="94.7" y1="229.42" x2="53.56" y2="188.28" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-36"/>
                    <linearGradient id="linear-gradient-51" x1="88.29" y1="231.3" x2="47.15" y2="190.16" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-36"/>
                    <linearGradient id="linear-gradient-52" x1="82.4" y1="233.95" x2="41.25" y2="192.81" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-36"/>
                    <radialGradient id="radial-gradient-15" cx="67.98" cy="210.17" fx="48.10583501680105" fy="194.5911912936722" r="70.55" xlinkHref="#radial-gradient-10"/>
                    <radialGradient id="radial-gradient-16" cx="213.61" cy="179.45" fx="193.74384112984382" fy="163.86574481923532" r="70.55" xlinkHref="#radial-gradient-10"/>
                    <linearGradient id="linear-gradient-53" x1="131.12" y1="1380.37" x2="100.98" y2="1350.23" gradientTransform="matrix(0.87, 0.5, 0, 1.15, 414.86, -1570.23)" xlinkHref="#linear-gradient-30"/>
                    <linearGradient id="linear-gradient-54" x1="124.08" y1="1384.95" x2="94.9" y2="1355.77" gradientTransform="matrix(0.68, 0.73, -0.34, 1.1, 899.42, -1525.99)" xlinkHref="#linear-gradient-36"/>
                    <linearGradient id="linear-gradient-55" x1="118.98" y1="1365.79" x2="99.03" y2="1348.51" gradientTransform="matrix(0.87, 0.5, 0, 1.15, 413.17, -1553.52)" gradientUnits="userSpaceOnUse">
                        <stop offset="0.01" stop-color="#637b8b"/>
                        <stop offset="0.24" stop-color="#69808f"/>
                        <stop offset="0.54" stop-color="#788f9a"/>
                        <stop offset="0.88" stop-color="#93a8ab"/>
                        <stop offset="1" stop-color="#9eb3b3"/>
                    </linearGradient>
                    <radialGradient id="radial-gradient-17" cx="512.56" cy="67.43" fx="492.6903150502888" fy="51.843125493785976" r="70.55" xlinkHref="#radial-gradient-10"/>
                    <linearGradient id="linear-gradient-56" x1="389.86" y1="413.12" x2="438.15" y2="289.1" gradientTransform="matrix(1, 0, 0, -1, 0, 592)" gradientUnits="userSpaceOnUse">
                        <stop offset="0.03" stop-color="#936722"/>
                        <stop offset="0.54" stop-color="#c48d35"/>
                        <stop offset="1" stop-color="#9e6a1a"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-57" x1="360.32" y1="401.62" x2="408.62" y2="277.6" xlinkHref="#linear-gradient-56"/>
                    <linearGradient id="linear-gradient-58" x1="368.01" y1="404.61" x2="416.3" y2="280.59" xlinkHref="#linear-gradient-56"/>
                    <linearGradient id="linear-gradient-59" x1="347.76" y1="396.72" x2="396.05" y2="272.71" xlinkHref="#linear-gradient-56"/>
                    <linearGradient id="linear-gradient-60" x1="347.5" y1="396.62" x2="395.79" y2="272.6" xlinkHref="#linear-gradient-56"/>
                    <linearGradient id="linear-gradient-61" x1="369.81" y1="405.31" x2="418.1" y2="281.3" xlinkHref="#linear-gradient-56"/>
                    <linearGradient id="linear-gradient-62" x1="327.98" y1="374.16" x2="441.58" y2="374.16" xlinkHref="#linear-gradient-56"/>
                    <linearGradient id="linear-gradient-63" x1="390.43" y1="413.34" x2="438.73" y2="289.32" xlinkHref="#linear-gradient-56"/>
                    <linearGradient id="linear-gradient-64" x1="388.83" y1="412.71" x2="437.12" y2="288.7" xlinkHref="#linear-gradient-56"/>
                    <linearGradient id="linear-gradient-65" x1="392.96" y1="330.64" x2="373.79" y2="432.49" gradientTransform="matrix(1, 0, 0, -1, 0, 592)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#ffef9f"/>
                        <stop offset="0.47" stop-color="#fdd57f"/>
                        <stop offset="1" stop-color="#d4a855"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-66" x1="379.21" y1="408.97" x2="427.5" y2="284.95" xlinkHref="#linear-gradient-56"/>
                    <linearGradient id="linear-gradient-67" x1="350.8" y1="397.91" x2="399.09" y2="273.89" xlinkHref="#linear-gradient-56"/>
                    <linearGradient id="linear-gradient-68" x1="380.84" y1="409.61" x2="429.13" y2="285.59" xlinkHref="#linear-gradient-56"/>
                    <linearGradient id="linear-gradient-69" x1="352.89" y1="398.72" x2="401.18" y2="274.7" xlinkHref="#linear-gradient-56"/>
                    <linearGradient id="linear-gradient-70" x1="325.71" y1="350.65" x2="447.77" y2="350.65" xlinkHref="#linear-gradient-56"/>
                    </defs>
                    <polygon id="square_bg_12" class="cls-1 square square-1" points="377.72 538.67 330 511.12 282.29 538.67 330 566.22 377.72 538.67"/>
                    <polygon id="square_bg_11" class="cls-1 square square-1" points="611.14 499.22 563.42 471.67 515.71 499.22 563.42 526.77 611.14 499.22"/>
                    <polygon id="square_bg_10" class="cls-1 square square-1" points="740.17 380.88 692.45 353.34 644.73 380.88 692.45 408.44 740.17 380.88"/>
                    <polygon id="square_bg_09" class="cls-1 square square-1" points="582.43 160.93 529.66 130.47 476.9 160.93 529.66 191.4 582.43 160.93"/>
                    <polygon id="square_bg_08" class="cls-1 square square-1" points="511.32 157.9 467.29 132.48 423.25 157.9 467.29 183.33 511.32 157.9"/>
                    <polygon id="square_bg_07" class="cls-1 square square-2" points="178.41 465.29 118.96 430.96 59.51 465.29 118.96 499.61 178.41 465.29"/>
                    <polygon id="square_bg_06" class="cls-1 square square-2" points="134.57 326.4 75.12 292.08 15.67 326.4 75.12 360.72 134.57 326.4"/>
                    <polygon id="square_bg_05" class="cls-1 square square-2" points="307.62 275.07 213.09 220.5 118.56 275.07 213.09 329.65 307.62 275.07"/>
                    <polygon id="square_bg_04" class="cls-1 square square-2" points="636.61 295.75 563.73 253.67 490.85 295.75 563.73 337.82 636.61 295.75"/>
                    <polygon id="square_bg_03" class="cls-1 square square-2" points="396.19 338.82 319.66 294.63 243.13 338.82 319.66 383.01 396.19 338.82"/>
                    <polygon id="square_bg_02" class="cls-1 square square-2" points="432.37 376.43 336.86 321.29 241.34 376.43 336.86 431.58 432.37 376.43"/>
                    <polygon id="square_bg_01" class="cls-1 square square-2" points="521.58 386.88 448.7 344.81 375.82 386.88 448.7 428.96 521.58 386.88"/>
                    <polygon id="square_s_bg_04" class="cls-1 square square-3" points="453.65 414.11 405.94 386.56 358.22 414.11 405.94 441.66 453.65 414.11"/>
                    <polygon id="square_s_bg_03" class="cls-1 square square-3" points="490.35 449.88 462.19 433.61 434.02 449.88 462.19 466.14 490.35 449.88"/>
                    <polygon id="square_s_bg_02" class="cls-1 square square-3" points="514.23 347.04 495.37 336.15 476.5 347.04 495.37 357.94 514.23 347.04"/>
                    <polygon id="square_s_bg_01" class="cls-1 square square-3" points="258.19 371.99 237.94 360.3 217.68 371.99 237.94 383.69 258.19 371.99"/>
                    <polygon id="square_sa_bg_06" class="cls-2 square square-4" points="731.6 223.7 699.95 205.42 668.29 223.7 699.95 241.97 731.6 223.7"/>
                    <polygon id="square_sa_bg_05" class="cls-2 square square-4" points="687.94 477.2 655.91 458.71 623.88 477.2 655.91 495.69 687.94 477.2"/>
                    <polygon id="square_sa_bg_04" class="cls-2 square square-4" points="407.78 161.98 362.64 135.93 317.51 161.98 362.64 188.04 407.78 161.98"/>
                    <polygon id="square_sa_bg_03" class="cls-3 square square-4" points="376.41 220.5 338.76 198.76 301.12 220.5 338.76 242.23 376.41 220.5"/>
                    <polygon id="square_sa_bg_02" class="cls-3 square square-4" points="314.04 461.83 281.92 443.29 249.79 461.83 281.92 480.38 314.04 461.83"/>
                    <polygon id="square_sa_bg_01" class="cls-3 square square-4" points="196.06 347.04 167.89 330.78 139.72 347.04 167.89 363.31 196.06 347.04"/>
                    <polygon id="glow" class="cls-4" points="284.78 183.98 284.78 384.36 384.49 441.92 484.2 384.36 484.2 183.98 284.78 183.98"/>
                    <g id="cube_8" class="cube">
                <polygon id="cube_bg_8" class="cls-5-1" points="736.41 320.3 695.61 343.86 695.61 390.97 736.41 414.53 777.22 390.97 777.22 343.86 736.41 320.3"/>
                    <polygon class="cls-5" points="777.22 343.86 736.41 320.3 695.61 343.86 736.41 367.41 777.22 343.86"/>
                    <polygon class="cls-6" points="695.61 343.86 695.61 390.97 736.41 414.53 736.41 367.41 695.61 343.86"/>
                    <polygon class="cls-7" points="736.41 367.41 736.41 414.53 777.22 390.97 777.22 343.86 736.41 367.41"/>
                    </g>
                    <g id="cube_7" class="cube">
                <polygon id="cube_bg_7" class="cls-5-1" points="563.42 393.92 518.69 419.75 518.69 471.4 563.42 497.22 608.15 471.4 608.15 419.75 563.42 393.92"/>
                    <polygon class="cls-8" points="608.15 419.75 563.42 393.92 518.69 419.75 563.42 445.57 608.15 419.75"/>
                    <polygon class="cls-9" points="518.69 419.75 518.69 471.4 563.42 497.22 563.42 445.57 518.69 419.75"/>
                    <polygon class="cls-10" points="563.42 445.57 563.42 497.22 608.15 471.4 608.15 419.75 563.42 445.57"/>
                    </g>
                    <g id="cube_6" class="cube">
                <polygon id="cube_bg_6" class="cls-5-1" points="368.33 487.67 337.75 505.32 337.75 540.64 368.33 558.29 398.92 540.64 398.92 505.32 368.33 487.67"/>
                    <polygon class="cls-11" points="398.92 505.32 368.33 487.67 337.75 505.32 368.33 522.98 398.92 505.32"/>
                    <polygon class="cls-12" points="337.75 505.32 337.75 540.64 368.33 558.29 368.33 522.98 337.75 505.32"/>
                    <polygon class="cls-13" points="368.33 522.98 368.33 558.29 398.92 540.64 398.92 505.32 368.33 522.98"/>
                    </g>
                    <g id="cube_5" class="cube">
                <polygon id="cube_bg_5" class="cls-5-1" points="594.79 214.4 541.83 244.97 541.83 306.12 594.79 336.69 647.74 306.12 647.74 244.97 594.79 214.4"/>
                    <polygon class="cls-14" points="647.74 244.97 594.79 214.4 541.83 244.97 594.79 275.55 647.74 244.97"/>
                    <polygon class="cls-15" points="541.83 244.97 541.83 306.12 594.79 336.69 594.79 275.55 541.83 244.97"/>
                    <polygon class="cls-16" points="594.79 275.55 594.79 336.69 647.74 306.12 647.74 244.97 594.79 275.55"/>
                    </g>
                    <g id="cube_4" class="cube">
                <polygon id="cube_bg_4" class="cls-5-1" points="174.43 408.73 135.25 431.36 135.25 476.6 174.43 499.22 213.61 476.6 213.61 431.36 174.43 408.73"/>
                    <polygon class="cls-17" points="213.61 431.36 174.43 408.73 135.25 431.36 174.43 453.98 213.61 431.36"/>
                    <polygon class="cls-18" points="135.25 431.36 135.25 476.6 174.43 499.22 174.43 453.98 135.25 431.36"/>
                    <polygon class="cls-19" points="174.43 453.98 174.43 499.22 213.61 476.6 213.61 431.36 174.43 453.98"/>
                    </g>
                    <g id="cube_3" class="cube">
                <polygon id="cube_bg_3" class="cls-5-1" points="67.98 224.26 26.66 248.11 26.66 295.81 67.98 319.67 109.29 295.81 109.29 248.11 67.98 224.26"/>
                    <polygon class="cls-20" points="109.29 248.11 67.98 224.26 26.66 248.11 67.98 271.96 109.29 248.11"/>
                    <polygon class="cls-21" points="26.66 248.11 26.66 295.81 67.98 319.67 67.98 271.96 26.66 248.11"/>
                    <polygon class="cls-22" points="67.98 271.96 67.98 319.67 109.29 295.81 109.29 248.11 67.98 271.96"/>
                    </g>
                    <g id="cube_2" class="cube">
                <polygon id="cube_bg_2" class="cls-5-1" points="213.4 201.57 171.31 225.87 171.31 274.47 213.4 298.77 255.49 274.47 255.49 225.87 213.4 201.57"/>
                    <polygon class="cls-23" points="255.49 225.87 213.4 201.57 171.31 225.87 213.4 250.17 255.49 225.87"/>
                    <polygon class="cls-24" points="171.31 225.87 171.31 274.47 213.4 298.77 213.4 250.17 171.31 225.87"/>
                    <polygon class="cls-25" points="213.4 250.17 213.4 298.77 255.49 274.47 255.49 225.87 213.4 250.17"/>
                    </g>
                    <g id="cube_1" class="cube">
                <polygon id="cube_bg_1" class="cls-5-1" points="508.65 86.14 471.59 107.53 471.59 150.32 508.65 171.72 545.71 150.32 545.71 107.53 508.65 86.14"/>
                    <polygon class="cls-26" points="545.71 107.53 508.65 86.14 471.59 107.53 508.65 128.93 545.71 107.53"/>
                    <polygon class="cls-27" points="471.59 107.53 471.59 150.32 508.65 171.72 508.65 128.93 471.59 107.53"/>
                    <polygon class="cls-28" points="508.65 128.93 508.65 171.72 545.71 150.32 545.71 107.53 508.65 128.93"/>
                    </g>
                    <g id="cube_0" class="cube">
                <polygon id="cube_bg_0" class="cls-5-1" points="384.49 242.46 306.13 287.71 306.13 378.19 384.49 423.44 462.86 378.19 462.86 287.71 384.49 242.46"/>
                    <polygon class="cls-29" points="462.86 287.71 384.49 242.46 306.13 287.71 384.49 332.95 462.86 287.71"/>
                    <polygon class="cls-30" points="306.13 287.71 306.13 378.19 384.49 423.44 384.49 332.95 306.13 287.71"/>
                    <polygon class="cls-31" points="384.49 332.95 384.49 423.44 462.86 378.19 462.86 287.71 384.49 332.95"/>
                    </g>
                    <ellipse id="item_shadow_8" class="cls-32 shadow" cx="745.17" cy="343.9" rx="23.44" ry="11.84"/>
                    <ellipse id="item_shadow_7" class="cls-33 shadow" cx="573.96" cy="419.75" rx="23.44" ry="11.84"/>
                    <ellipse id="item_shadow_6" class="cls-34 shadow" cx="375" cy="505.32" rx="16.86" ry="9.34"/>
                    <ellipse id="item_shadow_5" class="cls-35 shadow" cx="608.54" cy="244.97" rx="29.32" ry="13.37"/>
                    <ellipse id="item_shadow_4" class="cls-36 shadow" cx="185.37" cy="432.12" rx="19.81" ry="10.85"/>
                    <ellipse id="item_shadow_3" class="cls-37 shadow" cx="77.24" cy="248.08" rx="22.93" ry="12.06"/>
                    <ellipse id="item_shadow_2" class="cls-38 shadow" cx="222.06" cy="225.17" rx="19.81" ry="10.85"/>
                    <ellipse id="item_shadow_1" class="cls-39 shadow" cx="515.99" cy="107.18" rx="19.81" ry="10.85"/>
                    <ellipse id="item_shadow_0" class="cls-40 shadow" cx="400.06" cy="293.52" rx="39.72" ry="20.41"/>
                    <path id="line_left_2" class="cls-41 line line-2" d="M155.1,213.19,102,243.88l3,1.73,50.65-29.24h0l16.08,9.28,3-1.73L156.1,213.19A1,1,0,0,0,155.1,213.19Z"/>
                    <path id="line_left_1" class="cls-41 line line-1" d="M306.13,298.71l-66.45-38.37a1.49,1.49,0,0,0-2,.54,1.53,1.53,0,0,0,.56,2.09l67.91,39.2Z"/>
                    <path id="line_right_1" class="cls-41 line line-1" d="M523.84,416.78,423.13,358.64a1.47,1.47,0,0,0-2,.53,1.53,1.53,0,0,0,.56,2.09l99.16,57.25Z"/>
                    <path id="line_bottom_2" class="cls-41 line line-2" d="M351.62,532.4h0a1.52,1.52,0,0,0-2.09-.56l-17.24,9.95-135.12-78a1.48,1.48,0,0,0-2,.54,1.53,1.53,0,0,0,.56,2.09L331.78,545a1,1,0,0,0,1,0l18.3-10.56A1.46,1.46,0,0,0,351.62,532.4Z"/>
                    <path id="line_bottom_1" class="cls-41 line line-1" d="M346.49,359.72a1.53,1.53,0,0,0-2.09-.56L213.61,434.67v3.47L346,361.73A1.47,1.47,0,0,0,346.49,359.72Z"/>
                    <path id="line_top_2" class="cls-41 line line-2" d="M705,338.43l-82.82-47.82a1.47,1.47,0,0,0-2,.54,1.54,1.54,0,0,0,.56,2.09L702,340.16Z"/>
                    <path id="line_top_3" class="cls-41 line line-3" d="M531,142a1.48,1.48,0,0,0-2.13.79,1.6,1.6,0,0,0,.77,1.88l122.3,70.62-27.84,16.07,3,1.73,29.34-16.94a1,1,0,0,0,0-1.73Z"/>
                    <path id="line_top_1" class="cls-41 line line-1" d="M520,231.5l-77.26,44.6,3,1.73,74.71-43.13h0L541.83,247V245l1.21-.69L520.91,231.5A.9.9,0,0,0,520,231.5Z"/>
                    <g id="stats" class="item item-content item-8">
                    <g id="column_3">
                        <path id="c_body_3" class="cls-42" d="M717.85,300.21v19.05a3.78,3.78,0,0,0,2.22,3.1,11.88,11.88,0,0,0,10.74,0,3.78,3.78,0,0,0,2.22-3.1V300.21Z"/>
                        <ellipse id="c_top_3" class="cls-43" cx="725.44" cy="300.21" rx="7.59" ry="4.38"/>
                    </g>
                    <g id="column_2">
                        <path id="c_body_2" class="cls-44" d="M731.71,298.05v27.08a3.77,3.77,0,0,0,2.22,3.1,11.88,11.88,0,0,0,10.74,0,3.77,3.77,0,0,0,2.22-3.1V298.05Z"/>
                        <ellipse id="c_top_2" class="cls-45" cx="739.3" cy="298.05" rx="7.59" ry="4.38"/>
                    </g>
                    <g id="column_1">
                        <path id="c_body_1" class="cls-46" d="M746.17,292.09v38.44a3.76,3.76,0,0,0,2.22,3.1,11.88,11.88,0,0,0,10.74,0,3.76,3.76,0,0,0,2.22-3.1V292.09Z"/>
                        <ellipse id="c_top_1" class="cls-47" cx="753.76" cy="292.09" rx="7.59" ry="4.38"/>
                    </g>
                    </g>
                    <circle id="bubble_8" class="cls-48 item item-bubble item-8" cx="740.68" cy="309.25" r="43.65"/>
                    <g id="lock" class="item item-content item-7">
                    <path id="lock_depth" class="cls-49" d="M575.51,413.1l-18.42-18.69a3.05,3.05,0,0,1-1.28-2.44l-6.46-23.46,6.86-4.43a.79.79,0,0,1,.88,0l24.53,14.17a3,3,0,0,1,1.28,2.44v26.88a1.15,1.15,0,0,1-.42,1C582.25,408.77,575.83,413.13,575.51,413.1Z"/>
                    <path id="lock_front" class="cls-50" d="M574.79,413l-24.54-14.17a3.06,3.06,0,0,1-1.27-2.44V369.5c0-.94.57-1.37,1.27-1l24.54,14.16a3.08,3.08,0,0,1,1.28,2.44V412C576.07,413,575.49,413.4,574.79,413Z"/>
                    <path id="lock_hole" class="cls-51" d="M566.41,391.78a8.6,8.6,0,0,0-3.89-6.74c-2.15-1.24-3.89-.24-3.89,2.25a8.57,8.57,0,0,0,2,5.14v4.34a4,4,0,0,0,1.84,3.19c1,.59,1.84.11,1.84-1.06v-4.35C565.58,394.5,566.41,393.49,566.41,391.78Z"/>
                    <path id="lock_top" class="cls-52" d="M560,369.53l.16-5.35c0-3.9,2.59-4.95,6-3a13.61,13.61,0,0,1,6.13,10.63v5.56s0,1.15,1.62,2.11a3.37,3.37,0,0,0,3.49.08v-7.79c0-7.16-3.43-12.29-9.63-15.87s-12.86-1.28-12.86,5.88v5.55a2.35,2.35,0,0,0,1.46,2.49A3.3,3.3,0,0,0,560,369.53Z"/>
                    </g>
                    <circle id="bubble_7" class="cls-53 item item-bubble item-7" cx="565.94" cy="383.69" r="43.65"/>
                    <g id="video" class="item item-content item-6">
                    <path id="video_depth" class="cls-54" d="M349.71,444.87l2.91,29.86a2.94,2.94,0,0,0,1.48,2.56l29.51,20.24c.5.13,3.82-1.37,4.28-1.64a1.54,1.54,0,0,0,.79-1.35V464.48a3,3,0,0,0-1.48-2.56L355,443.32a2.48,2.48,0,0,0-1.81-.15A19.6,19.6,0,0,0,349.71,444.87Z"/>
                    <path id="video_front" class="cls-55" d="M349.09,446.12v30.06a2.94,2.94,0,0,0,1.48,2.56l32.22,18.6a1.56,1.56,0,0,0,2.35-1.35V465.93a3,3,0,0,0-1.47-2.56l-32.23-18.61A1.57,1.57,0,0,0,349.09,446.12Z"/>
                    <path id="video_icon" class="cls-56" d="M373.92,473,362,462.88a.85.85,0,0,0-1.4.65v11.76a.86.86,0,0,0,1,.85l11.91-1.69A.85.85,0,0,0,373.92,473Z"/>
                    </g>
                    <circle id="bubble_6" class="cls-57 item item-bubble item-6" cx="368.88" cy="470.31" r="43.65"/>
                    <g id="credit_card" class="item item-content item-5">
                    <path id="credit_bg" class="cls-58" d="M572.14,181.37v34.44a3.39,3.39,0,0,0,1.69,2.93l36.93,21.32a1.8,1.8,0,0,0,2.69-1.56V204.06a3.4,3.4,0,0,0-1.69-2.93l-36.93-21.32A1.8,1.8,0,0,0,572.14,181.37Z"/>
                    <polygon id="credit_band" class="cls-59" points="572.14 210.4 613.45 234.25 613.45 227.65 572.14 203.8 572.14 210.4"/>
                    <ellipse id="credit_circle_dark" class="cls-60" cx="602.52" cy="211.1" rx="3.34" ry="6.24" transform="translate(-35.42 186.09) rotate(-17.06)"/>
                    <ellipse id="credit_circle_light" class="cls-61" cx="596.47" cy="207.23" rx="3.34" ry="6.24" transform="translate(-34.55 184.15) rotate(-17.06)"/>
                    </g>
                    <circle id="bubble_5" class="cls-62 item item-bubble item-5" cx="592.79" cy="209.94" r="43.65"/>
                    <g id="phone" class="item item-content item-4">
                    <path id="phone_depth" class="cls-63" d="M188.82,423.45l-20.09-14.7a2.86,2.86,0,0,1-1.19-2.27l-2.92-48.73,3.32-1.41a.78.78,0,0,1,.79.05l22.78,13.15a2.83,2.83,0,0,1,1.19,2.27V421a1.06,1.06,0,0,1-.44,1C192,422.13,188.82,423.45,188.82,423.45Z"/>
                    <path id="phone_front" class="cls-64" d="M188.09,423.37l-22.78-13.16a2.83,2.83,0,0,1-1.18-2.26v-49.2c0-.87.53-1.27,1.18-.9L188.09,371a2.81,2.81,0,0,1,1.19,2.26v49.2C189.28,423.34,188.75,423.74,188.09,423.37Z"/>
                    <polygon id="phone_screen" class="cls-65" points="189.28 417.17 164.13 402.64 164.13 364.05 189.28 378.58 189.28 417.17"/>
                    <path id="phone_dollar" class="cls-66" d="M178.27,394.65a2.68,2.68,0,0,0-.35-1.36,6.92,6.92,0,0,0-1.18-1.48c-.56-.57-1-1.08-1.45-1.56a11.64,11.64,0,0,1-1-1.42,6.82,6.82,0,0,1-.67-1.49,5.47,5.47,0,0,1-.25-1.64,2.1,2.1,0,0,1,.83-2,2.39,2.39,0,0,1,2.21.16V382l1.23.71v1.92a7.17,7.17,0,0,1,2.89,5.8l-2.22-1.28a3.87,3.87,0,0,0-.38-1.81,2.63,2.63,0,0,0-1-1.12c-.42-.24-.75-.29-1-.15s-.35.46-.35.94a2.64,2.64,0,0,0,.34,1.28,9.05,9.05,0,0,0,1.26,1.56c.61.64,1.11,1.19,1.51,1.67a11,11,0,0,1,1,1.43,6.66,6.66,0,0,1,.62,1.44,5.56,5.56,0,0,1,.21,1.54,2.1,2.1,0,0,1-.81,2,2.45,2.45,0,0,1-2.24-.19v1.77l-1.22-.71V397a7.84,7.84,0,0,1-2.44-2.7,7,7,0,0,1-.87-3.41l2.22,1.28a3.94,3.94,0,0,0,.44,1.87,3.18,3.18,0,0,0,1.24,1.28,1.21,1.21,0,0,0,1.07.21C178.14,395.41,178.27,395.12,178.27,394.65Z"/>
                    </g>
                    <circle id="bubble_4" class="cls-67 item item-bubble item-4" cx="178.14" cy="388.47" r="43.65"/>
                    <g id="collection" class="item item-content item-3">
                    <path id="back" class="cls-68" d="M57.12,185.33v28.35a2.78,2.78,0,0,0,1.4,2.42l30.4,17.55a1.48,1.48,0,0,0,2.22-1.28V204a2.8,2.8,0,0,0-1.4-2.41l-30.4-17.55A1.48,1.48,0,0,0,57.12,185.33Z"/>
                    <path id="shadow_middle" class="cls-69" d="M86.67,203.48,57.12,186.42v27.26a2.78,2.78,0,0,0,1.4,2.42l29.54,17.06V205.89A2.79,2.79,0,0,0,86.67,203.48Z"/>
                    <path id="middle" class="cls-70" d="M50.71,187.21v28.35a2.78,2.78,0,0,0,1.4,2.42l30.4,17.55a1.48,1.48,0,0,0,2.22-1.28V205.89a2.78,2.78,0,0,0-1.4-2.41l-30.4-17.55A1.48,1.48,0,0,0,50.71,187.21Z"/>
                    <path id="shadow_front" class="cls-69" d="M80.77,206.13,50.71,188.77v26.79a2.78,2.78,0,0,0,1.4,2.42l30.05,17.35V208.54A2.79,2.79,0,0,0,80.77,206.13Z"/>
                    <path id="front" class="cls-71" d="M44.82,189.86v28.35a2.8,2.8,0,0,0,1.39,2.42l30.4,17.55a1.48,1.48,0,0,0,2.22-1.28V208.54a2.79,2.79,0,0,0-1.39-2.41L47,188.58A1.48,1.48,0,0,0,44.82,189.86Z"/>
                    </g>
                    <circle id="bubble_3" class="cls-72 item item-bubble item-3" cx="67.98" cy="210.17" r="43.65"/>
                    <g id="ethereum" class="item item-content item-2">
                    <polygon id="et_bottom_bg" class="cls-73" points="213.15 212.93 233.07 184.88 213.15 196.64 213.15 196.64 193.24 184.88 213.15 212.93 213.15 212.93 213.15 212.94 213.15 212.93 213.15 212.93 213.15 212.93"/>
                    <polygon id="et_top_bg" class="cls-73" points="233.06 181.1 213.15 148.07 193.24 181.1 213.15 192.87 233.06 181.1"/>
                    <path id="et_light_bottom" class="cls-74" d="M213.15,212.93V196.64l-19.91-11.76Z"/>
                    <polygon id="et_dark_bottom" class="cls-75" points="213.15 212.93 233.07 184.88 213.15 196.64 213.15 196.64 213.15 212.93"/>
                    <polygon id="et_base_top" class="cls-76" points="233.06 181.1 213.15 172.05 193.24 181.1 213.15 192.87 233.06 181.1"/>
                    <polygon id="et_dark_top" class="cls-75" points="213.15 148.07 213.15 192.87 233.06 181.1 213.15 148.07"/>
                    <polygon id="et_light_top" class="cls-74" points="193.24 181.1 213.15 192.87 213.15 148.07 193.24 181.1"/>
                    </g>
                    <circle id="bubble_2" class="cls-77 item item-bubble item-2" cx="213.61" cy="179.45" r="43.65"/>
                    <g id="bitcoin" class="item item-content item-1">
                    <path id="bitcoin_depth" class="cls-78" d="M532,74.91c0,9.4-3.31,15.7-8.23,17.27-2.44.78-6.76,1.93-7.61,1.79-10.4-1.77-11.1-44.06-14.88-53.8,1.34-.5,3.24-.94,4.8-1.37a11.91,11.91,0,0,1,9.38,1.1C524.57,45.17,532,60.85,532,74.91Z"/>
                    <ellipse id="bitcoin_front" class="cls-79" cx="509.68" cy="66.87" rx="15" ry="28.07" transform="translate(2.81 152.5) rotate(-17.06)"/>
                    <path id="bitcoin_sign" class="cls-80" d="M515.12,71.14c1.42,0,2.31-1,2.11-3.54-.28-3.51-2.79-6.08-6-8.23V54.73l-2.45-1.41v4.52c-.65-.37-1.3-.74-2-1.1V52.19l-2.44-1.41v4.64l-1.56-.88h0l-3.38-2v3s1.81,1,1.78,1a2.79,2.79,0,0,1,1.41,2.05V71.39c-.05.33-.23.8-.92.4,0,0-1.79-1-1.79-1l-.48,3.09,3.18,1.84,1.75,1v4.7l2.44,1.41V78.18l2,1.16V84l2.45,1.41V80.69c4.12,2.1,7,2.57,7.36-1.68A8.85,8.85,0,0,0,515.12,71.14Zm-8.19-11c1.38.8,5.73,2.8,5.73,6.13s-4.34.31-5.73-.49Zm0,14.71V68.58c1.66,1,6.87,3.42,6.87,7.07S508.59,75.76,506.93,74.8Z"/>
                    </g>
                    <circle id="bubble_1" class="cls-81 item item-bubble item-1" cx="512.56" cy="67.43" r="43.65"/>
                    <g id="token" class="item item-content item-0">
                    <path class="cls-82" d="M394.85,174.13l1.73,2.38.14.14L394,178.36l4.19,6.45a5.7,5.7,0,0,0-1.85,3.05,4.58,4.58,0,0,0,3.7,5.77,5.55,5.55,0,0,0,5.68-3.41l7.34-1.16-.26-2.78,3.31-.55.37,2.87.05.13-3.16.5-7.82,11.19-.13-.07a63.75,63.75,0,0,0-15.28-4.06,69.17,69.17,0,0,0-17-.24l-.15,0-2.07-12.72-2.48-1.49.08-.17,1.91-2.4,2.54,1.57.13.08-1.79,2.34,6.35,3.13a4.45,4.45,0,0,0,3.83,4.74,5.61,5.61,0,0,0,6-4.41,5.1,5.1,0,0,0-.38-3.37l6.66-4.89L392,176Z"/>
                    <path class="cls-83" d="M375.75,200.15l2.58,16.16v.23l-5.89-4.42L371,218.88l-.21-.17L355,206.66v-.09c.13-.83.29-1.52.48-2.32l.32-.1A68.76,68.76,0,0,1,375.75,200.15Z"/>
                    <polygon class="cls-84" points="392.08 224.29 391.62 226.28 391.69 226.44 387.1 228.11 385.44 235.38 385.34 235.41 381.6 236.87 381.05 239.28 378.91 238.98 379.46 236.57 376.51 234.14 376.55 233.96 378.16 226.86 374.64 224.08 374.77 223.94 375.23 221.95 380.48 225.94 378.78 233.4 380.9 235.07 383.59 234.06 385.29 226.61 392.08 224.29"/>
                    <path class="cls-85" d="M354.38,226.6l14.15,2.07-.23,1,.95,2.31.13.23-13.19,4.65-.06-.15a51.2,51.2,0,0,1-2.08-10.19Z"/>
                    <path class="cls-86" d="M370.39,234.81l2.16,5.43.14.32-8,12-.17-.16a46.75,46.75,0,0,1-7.45-13l.32-.1Z"/>
                    <path class="cls-87" d="M390.79,237.64l10.33,7.87.08.06a60.1,60.1,0,0,1-12.73,10.18l-.18.12,0-.24L386,242.44l.27-.29v.07Z"/>
                    <path class="cls-88" d="M396.42,166.76c30.66,4.26,50.37,30.64,43.95,58.8s-36.58,47.62-67.23,43.36-50.37-30.64-43.95-58.8S365.77,162.52,396.42,166.76ZM373.81,266c28.88,4,57.3-14.31,63.35-40.85s-12.51-51.41-41.41-55.41S338.46,184,332.4,210.59,344.92,262,373.83,266"/>
                    <path class="cls-89" d="M397.25,163.15c-32.88-4.56-65.1,16.22-72,46.42s14.18,58.39,47.06,63,65.09-16.22,72-46.41S430.11,167.72,397.25,163.15Zm43.12,62.41c-6.42,28.18-36.58,47.62-67.23,43.36s-50.37-30.64-43.95-58.8,36.58-47.6,67.23-43.36,50.37,30.64,43.95,58.8"/>
                    <path class="cls-90" d="M401.09,203.67l-9.46,14.25-.24.38,7.46-2.6-1.55,6.82,20.26-7.12.11,0,0-.09c.24-.79.42-1.55.58-2.31l-.3-.21A57.43,57.43,0,0,0,401.09,203.67Z"/>
                    <path class="cls-91" d="M396.78,225.63l-.9,3.73-.06.26,15.33,2h.1l.07-.08a76.23,76.23,0,0,0,5.41-13l-.39.15Z"/>
                    <path class="cls-92" d="M430.89,240.16l.65-1.07c.43-.72.85-1.45,1.25-2.19l.57-1.11a48.17,48.17,0,0,0,3.82-10.67,43.74,43.74,0,0,0-1.51-24.89c-.27-.73-.56-1.45-.86-2.17s-.62-1.42-1-2.11a43.7,43.7,0,0,0-2.28-4.07c-7.29-11.54-20-20-35.8-22.17a59.31,59.31,0,0,0-35.42,6.18c-.51.26-1,.53-1.52.83a57.81,57.81,0,0,0-10.4,7.35l-.94.85a55.41,55.41,0,0,0-3.92,4.05l-1.24,1.47c-.46.57-.91,1.16-1.35,1.74l-.39.53c-.28.38-.55.77-.83,1.16s-.56.82-.83,1.24-.62,1-.92,1.48c-.85,1.44-1.64,2.91-2.35,4.43a47.9,47.9,0,0,0-3.27,9.53,45.2,45.2,0,0,0-1.14,9.83,43.49,43.49,0,0,0,.76,8.29c.07.39.15.77.24,1.15a44.28,44.28,0,0,0,11.62,21.37c.27.29.55.57.83.83a47.13,47.13,0,0,0,3.59,3.18,50.14,50.14,0,0,0,14,7.87c.81.3,1.62.58,2.45.83a55.55,55.55,0,0,0,9.09,2,58.22,58.22,0,0,0,9.42.59c.9,0,1.78-.07,2.67-.13l1.32-.11a60.45,60.45,0,0,0,7.81-1.24c.86-.2,1.7-.42,2.54-.65a60.63,60.63,0,0,0,16.47-7.35c.72-.46,1.42-.94,2.12-1.43a56.53,56.53,0,0,0,6.82-5.73,55,55,0,0,0,4.25-4.64l.77-1Q429.56,242.28,430.89,240.16Zm-62.33-58.48,1.87-2.43L373,180.8l.13.11-1.82,2.36,6.34,3.1a4.45,4.45,0,0,0,3.83,4.74,5.61,5.61,0,0,0,6-4.41,5.1,5.1,0,0,0-.38-3.37l6.66-4.89L392,175.92l2.81-1.79,1.76,2.36.11.16L394,178.36l4.19,6.45a5.7,5.7,0,0,0-1.85,3.05,4.58,4.58,0,0,0,3.7,5.77,5.55,5.55,0,0,0,5.68-3.41L413,189l-.19-2.77,3.22-.48.42,2.82v.14l-3.16.5-7.82,11.19-.14-.07a63.54,63.54,0,0,0-15.27-4.06,69.24,69.24,0,0,0-17-.24l-.14,0-2.07-12.72-2.49-1.49.13-.15m29.66,20.93L386.49,220l-2.4.87L382,219.26l0,0-3.05-19.16h.3a68.22,68.22,0,0,1,18.62,2.48l.33.09M355,206.57c.13-.83.29-1.52.47-2.32l.32-.09a68,68,0,0,1,19.89-4l2.55,16.12,0,.26-5.86-4.41L371,218.88l-.21-.17L355,206.66v-.09m-1.25,17a69.83,69.83,0,0,1,.65-13.63l.3.24,15.33,11.74-.79,3.73-.07.31-15.37-2.27,0-.1m2.32,13.17a51.33,51.33,0,0,1-2.08-10v-.15h0l.32.05,13.26,1.92.91.14h0l-.23,1,1,2.3.09.25-13.19,4.65,0-.07,0-.08m8.56,15.83-.17-.16a46.89,46.89,0,0,1-7.45-13l.32-.09,13-4.55,2.17,5.41.13.34-8,12M385.22,258a59.88,59.88,0,0,1-10.29,3.6l-.06,0,0,0a41.93,41.93,0,0,1-8-6.68l-.08-.06.07-.08,7.35-10.95.11.36.65,1.59,7.14,1,1.05-1.06.19-.19,2,12.48-.1,0m.23-22.56-.1,0-3.73,1.46-.56,2.41-2.13-.3.55-2.41-3-2.43,0-.19,1.62-7.09-3.53-2.79.13-.13.46-2,5.25,4-1.7,7.46,2.12,1.66,2.69-1,1.7-7.46,6.79-2.32-.46,2,.07.16-4.59,1.66-1.66,7.27m3,20.36-.18.11,0-.23-2.21-13.2.27-.29v.07l4.47-4.55,10.32,7.87.09.06a60.72,60.72,0,0,1-12.74,10.18m14.81-12.43-.08.13-10.33-7.87.24-.23,1.9-1.91.24-1,14.15,1.87.34.05a72.37,72.37,0,0,1-6.46,9m8-11.73-.07.09h-.09l-15.33-2,.1-.27.86-3.73,19.58-7,.38-.14a75.56,75.56,0,0,1-5.41,13M418,214.1c-.1.39-.2.78-.31,1.17l0,.09-.11,0-20.27,7.12h0l1.56-6.82-7.46,2.6.23-.38,9.4-14.18,0-.07h0c.61.21,1.2.42,1.77.65l1.66.67,1,.45a55,55,0,0,1,12.39,7.29l.29.23c-.08.38-.17.76-.26,1.14"/>
                    <path class="cls-93" d="M382,219.25l2.07,1.63,2.4-.87,11.68-17.4-.35-.07a64.1,64.1,0,0,0-8.89-1.86,71.71,71.71,0,0,0-9.72-.66h-.29L382,219.2Z"/>
                    <path class="cls-94" d="M354.46,210l.31.22,15.3,11.75-.83,3.7v.32l-15.36-2.27,0-.1A70.5,70.5,0,0,1,354.46,210Z"/>
                    <path class="cls-95" d="M409.73,234.29a72.37,72.37,0,0,1-6.46,9l-.08.13-10.33-7.88.21-.24,1.93-1.9.24-1,14.15,1.88Z"/>
                    <path class="cls-96" d="M374.17,243.76l.12.34.63,1.6,7.14,1,1.05-1.09.19-.16,2,12.48-.11,0a59.82,59.82,0,0,1-10.29,3.59l-.06,0,0-.05a42.67,42.67,0,0,1-8-6.69l-.08-.05.07-.09Z"/>
                    <path class="cls-97" d="M443.85,201.66l2.17,7.89a50,50,0,0,1,.44,24.45c-6.88,30.2-39.11,51-72,46.41-23.66-3.29-41.2-18.81-46.61-38.51L325.71,234c5.41,19.7,23,35.22,46.61,38.51,32.86,4.55,65.09-16.22,72-46.41a50,50,0,0,0-.44-24.45"/>
                    </g>
                </svg>
                </div>

                <div>
                <p>Royal token price (NRT)</p>
                <h2 class="h1">$2.01 <span class="price down">3.56%</span></h2>
                <p class="tiny">0.00003091 <b>BTC</b><span class="price up">1.35%</span></p>
                <p class="tiny">0.00004224 <b>ETH</b><span class="price down">1.93%</span></p>

                <label>Smart Contracts:</label>


                <span class="input">
                <a href="https://bscscan.com/token/0x1b2f67679798c764f2c0c69dfb6bda8b30a094cf" target="_blank"><img src={binance} class="icon-exchange"/></a>
                <input type="text" id="contract" value="0x1b2f67679798c764f2c0c69dfb6bda8b30a094cf" readonly="readonly"/>
                <button class="copy" data-copytarget="#contract"></button>
                <button class="metamask"><img src="https://s2.coinmarketcap.com/static/cloud/img/metamask.png?_=f76b203"/></button>
                </span>

                <div class="buttons left">
                <a href="#two" class="btn outline">{t("buttons.Btn_Read")} </a>
                </div>
            </div>

                </div>
            </div>
        </section>

        </>
    )
};
