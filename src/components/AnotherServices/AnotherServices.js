import React from 'react';
import './AnotherServices.scss';

function AnotherServices(props) {
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
            <div className={'section-another-service-item-text'}>
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