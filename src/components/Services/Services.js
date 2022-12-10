import React from 'react';
import './Services.scss'
import {LASER_CUTTING_ROUTE, MAIN_ROUTE, MILLING_CUTTING_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";
import {movePageTop} from "../../utils/funcs";

function Services(props) {
    const navigate = useNavigate()

    const customNavigate = (route) => {
        movePageTop()
        navigate(route)
    }

    return (<div className={'section-service'}>
            <div className={'section-service-title'}>
                Наши услуги
            </div>
            <div className={'section-service-items'}>
                <div className={'section-service-item'}>
                    <div className={'section-service-item-text'} onClick={() => customNavigate(LASER_CUTTING_ROUTE)}>
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

                <div className={'section-service-item'} onClick={() => customNavigate(MILLING_CUTTING_ROUTE)}>
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