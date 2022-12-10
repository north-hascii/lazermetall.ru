import React from 'react';
import './AnotherServices.scss';
import {useNavigate} from "react-router-dom";
import {movePageTop} from "../../utils/funcs";
import {MILLING_CUTTING_ROUTE} from "../../utils/consts";

function AnotherServices(props) {
  const navigate = useNavigate()

  const customNavigate = (route) => {
    movePageTop()
    navigate(route)
  }
  return (
    <div className={'section-another-service'}>
      <div className={'section-another-service-container'}>
        <div className={'section-another-service-title'}>
          Другие услуги компании
        </div>
        <div className={'section-another-service-list'}>
          <div className={'section-another-service-item'}>
            <div className={'section-another-service-item-text'}>
              Гибка металла
            </div>
          </div>

          <div className={'section-another-service-item'}>
            <div className={'section-another-service-item-text'} onClick={() => customNavigate(MILLING_CUTTING_ROUTE)}>
              Фрезерная обработка
            </div>
          </div>

          <div className={'section-another-service-item'}>
            <div className={'section-another-service-item-text'}>
              Порошковая покраска
            </div>
          </div>

          <div className={'section-another-service-item'}>
            <div className={'section-another-service-item-text'}>
              Проектирование металлоизделий
            </div>
          </div>

          <div className={'section-another-service-item'}>
            <div className={'section-another-service-item-text'}>
              Проектирование металлоконструкций
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnotherServices;