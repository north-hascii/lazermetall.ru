import React from 'react';
import './Services.scss'

function Services(props) {
    return (<div className={'section-service'}>
            <div className={'section-service-title'}>
                Наши услуги
            </div>
            <div className={'section-service-items'}>
                <div className={'section-service-item'}>
                    <div className={'section-service-item-text'}>
                        Лазерная резка
                    </div>
                </div>

                <div className={'section-service-item'}>
                    <div className={'section-service-item-text'}>
                        Гибка металла
                    </div>
                </div>

                <div className={'section-service-item'}>
                    <div className={'section-service-item-text'}>
                        Проектирование металлоконструкций
                    </div>
                </div>

                <div className={'section-service-item'}>
                    <div className={'section-service-item-text'}>
                        Фрезерная обработка
                    </div>
                </div>

                <div className={'section-service-item'}>
                    <div className={'section-service-item-text'}>
                        Порошковая покраска
                    </div>
                </div>

                <div className={'section-service-item'}>
                    <div className={'section-service-item-text'}>
                        Проектирование металлоизделий
                    </div>
                </div>
            </div>
        </div>);
}

export default Services;