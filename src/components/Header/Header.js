import React from 'react';
import './Header.scss';
import {useNavigate} from "react-router-dom";
import {Link} from "react-scroll";

import {LASER_CUTTING_ROUTE, MAIN_ROUTE, MILLING_CUTTING_ROUTE} from "../../utils/consts";

function Header() {
    const navigate = useNavigate()

    function toggleBurger() {
        document.getElementById('nav-toggle').classList.toggle('active')
        document.getElementById('header-container').classList.toggle('open')
    }

    function closeMenu() {
        document.getElementById('nav-toggle').classList.remove('active')
        document.getElementById('header-container').classList.remove('open')
    }

    const closeAndNavigate = (route) => {
        closeMenu()
        navigate(route)
    }


    return (<header>
            <img className={'header-logo'} src={'images/logo_dark.svg'} alt={"logo"}
                 onClick={() => navigate(MAIN_ROUTE)}/>
            <div id={'header-container'} className={'header-container'}>
                <div className={'header-left'}>
                    <div className={'header-menu-item'} onClick={() => closeAndNavigate(MAIN_ROUTE)}>
                        Главная
                    </div>
                    <div className={'header-menu-item'} onClick={() => closeAndNavigate(LASER_CUTTING_ROUTE)}>
                        Лазерная резка
                    </div>
                    <div className={'header-menu-item'} onClick={() => closeAndNavigate(MILLING_CUTTING_ROUTE)}>
                        Фрезерная резка
                    </div>
                </div>
                <div className={'header-right'}>
                    <div className={'header-mail'}>
                        glassfasad@list.ru
                    </div>
                    <div className={'header-phone'}>
                        +7 (4852) 64-11-12
                    </div>
                    <Link to={'callback-form'} smooth spy duration={750} onClick={() => closeMenu()}>
                        <div className={'header-button-call'}>
                            Заказать звонок
                        </div>
                    </Link>
                </div>
            </div>
            <div id="nav-toggle" onClick={(e) => toggleBurger(e)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>);
}

export default Header;