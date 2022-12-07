import React from 'react';
import './Header.scss';
import {LASER_CUTTING_ROUTE, MAIN_ROUTE, MILLING_CUTTING_ROUTE} from "../../utils/consts";
import usePreloader from "../../hooks/usePreloader";

function Header() {
    const {navigateToWithPreloader} = usePreloader()
    return (
        <header>
            <div className={'header-container'}>
                <div className={'header-left'}>
                    <img className={'header-logo'} src={'images/logo_dark.svg'} alt={"logo"}
                         onClick={() => navigateToWithPreloader(MAIN_ROUTE)}/>
                    <div className={'header-menu-item'} onClick={() => navigateToWithPreloader(MAIN_ROUTE)}>
                        Главная
                    </div>
                    <div className={'header-menu-item'} onClick={() => navigateToWithPreloader(LASER_CUTTING_ROUTE)}>
                        Лазерная резка
                    </div>
                    <div className={'header-menu-item'} onClick={() => navigateToWithPreloader(MILLING_CUTTING_ROUTE)}>
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
                    <div className={'header-button-call'}>
                        Заказать звонок
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;