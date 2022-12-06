import React from 'react';
import './Header.scss';

function Header() {
    return (
        <header>
            <div className={'header-container'}>
                    <div className={'header-left'}>
                        <img className={'header-logo'} src={'images/logo.svg'} alt={"logo"}/>
                        <div className={'header-menu-item'}>
                            Главная
                        </div>
                        <div className={'header-menu-item'}>
                            Лазерная резка
                        </div>
                        <div className={'header-menu-item'}>
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