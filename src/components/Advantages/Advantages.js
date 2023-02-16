import React from 'react';
import './Advantages.scss';
import {Link} from "react-scroll";

function Advantages(props) {
    return (
        <div className={'section-advantages'}>
            <div className={'section-advantages-title'}>
                Наши преимущества
            </div>

            <div className={'section-advantages-list'}>
                <div className={'section-advantages-list-item'}>
                    <div className={'section-advantages-list-item-middleware'}>
                        <img src={'images/advantages/adv_tip.svg'} alt={'tip'}/>
                        <div className={'section-advantages-list-title'}>
                            Высокое качество
                        </div>
                        <div className={'section-advantages-list-text'}>
                            и эстетичность готовых изделий
                        </div>
                    </div>
                </div>
                <div className={'section-advantages-list-item'}>
                    <div className={'section-advantages-list-item-middleware'}>
                        <img src={'images/advantages/adv_hands.svg'} alt={'hands'}/>
                        <div className={'section-advantages-list-title'}>
                            Сохранение первоначальных свойств материала
                        </div>
                        <div className={'section-advantages-list-text'}>
                            за счёт правильной настройки оборудования
                        </div>
                    </div>
                </div>
                <div className={'section-advantages-list-item'}>
                    <div className={'section-advantages-list-item-middleware'}>
                        <img src={'images/advantages/adv_percent.svg'} alt={'percent'}/>
                        <div className={'section-advantages-list-title'}>
                            Экономичность расхода металла
                        </div>
                    </div>
                </div>
                <div className={'section-advantages-list-item'}>
                    <div className={'section-advantages-list-item-middleware'}>
                        <img src={'images/advantages/adv_money.svg'} alt={'money'}/>
                        <div className={'section-advantages-list-title'}>
                            Оптимальная цена
                        </div>
                        <div className={'section-advantages-list-text'}>
                            гибки и резки листового металла
                        </div>
                    </div>
                </div>
            </div>

            <div className={'section-advantages-nav'}>
                <Link className={'section-advantages-nav-item'} to={'section-materials'} smooth spy duration={750}>
                    Обрабатываемые материалы
                </Link>
                <Link className={'section-advantages-nav-item'} to={'price-list'} smooth spy duration={750}>
                    Цена
                </Link>
                <Link className={'section-advantages-nav-item'} to={'section-example'} smooth spy duration={750}>
                    Примеры работ
                </Link>
                <Link className={'section-advantages-nav-item'} to={'work-order'} smooth spy duration={750}>
                    Порядок работ
                </Link>
                <Link className={'section-advantages-nav-item'} to={'section-wishes'} smooth spy duration={750}>
                    Пожелания к чертежам
                </Link>
                <Link className={'section-advantages-nav-item'} to={'section-another-service'} smooth spy duration={750}>
                    Другие услуги компании
                </Link>
            </div>
        </div>

    );
}

export default Advantages;