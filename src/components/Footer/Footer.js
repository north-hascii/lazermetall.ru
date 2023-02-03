import React from 'react';
import './Footer.scss';

function Footer(props) {
    return (
        <footer>
            <div className={'footer-container'}>
                <div className={'footer-left'}>
                    <img className={'header-left-logo'} src={'images/logo_light.svg'} alt={"logo"}/>
                </div>

                <div className={'footer-right'}>
                    <div className={'footer-right-address'}>
                        <div className={'footer-right-title'}>
                            Адрес
                        </div>
                        <div className={'footer-right-text1'}>
                            г. Ярославль, Промышленная 14В
                            Головной офис: г. Ярославль, проспект Фрунзе, д.3 (3-й этаж, офис 308)
                        </div>
                    </div>

                    <div className={'footer-right-contacts'}>
                        <div className={'footer-right-title'}>
                            Контакты
                        </div>
                        <div className={'footer-right-data'}>
                            <div className={'footer-right-text2'}>
                                glassfasad@list.ru
                            </div>
                            <div className={'footer-right-text2'}>
                                +7 (980) 652-00-02
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;