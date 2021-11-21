import React, {useState, useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/nav.css';
import Logo from '../images/logo/logo.png';
export default function Header() {
    const [t, i18n] = useTranslation("global");
    const {language} = i18n ;

    const[swithToggled,setSwithToggled] = useState(false);

    const ToggleSwitch = () => {
        swithToggled ? setSwithToggled(false) : setSwithToggled(true);
    }

    let menuRef = useRef();

    useEffect(()=> {
        let handler = (event) => {
            if (!menuRef.current.contains(event.target)){
                setSwithToggled(false)
            }
        }

        document.addEventListener("mousedown", handler);
        return () =>{
            document.removeEventListener("mousedown", handler)
        }
    });

    return (
    <>



        {/* <div className="preloader">
            <div className="logo-icon"></div>
        </div> */}

        <header>
            <nav>
                <div className="navigation">
                    <div>
                        <a href="./" className="logo"><img src={Logo} /></a>

                        <div className="button-menu" ref={menuRef}>
                            <div onClick={ToggleSwitch} className="btn gold language proof"></div>
                            <ul id="button-menu" className={ swithToggled ? "button-menu-close show": "button-menu-close " }>
                                <li><a onClick={()=> i18n.changeLanguage("en")} className={language === "en" && "selected"}>English</a></li>
                                <li><a onClick={()=> i18n.changeLanguage("es")} className={language === "es" && "selected"}>Español</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* <div className="hamburguer">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> */}

                    <ul className="nav">
                        <li><a href='#one' className="active">{t('menu.Menu_Home')}</a></li>
                        <li><a href='#two'>{t('menu.Menu_About')}</a></li>
                        <li><a href='#three'>{t('menu.Menu_Token')}</a></li>
                        <li><a href='#four'>{t('menu.Menu_Gaming')}</a></li>
                        <li><a href='#five'>{t('menu.Menu_Market')}</a></li>
                        <li><a href='#six'>{t('menu.Menu_Road')}</a></li>
                        <li><a href='#' className="btn gold">{t('buttons.Btn_Register')}</a></li>
                        <li><a href='https://my.nftroyaltoken.com/' className="btn outline">{t('buttons.Btn_Login')}</a></li>
                    </ul>
                </div>
            </nav>
        </header>

    </>
    );
}
