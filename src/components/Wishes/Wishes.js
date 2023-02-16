import React from 'react';
import './Wishes.scss';

function Wishes(props) {
  return (
    <div id={'section-wishes'} className={'section-wishes'}>
      <div className={'section-wishes-container'}>
        <div className={'section-wishes-title'}>
          Пожелания к чертежам, предоставляемым заказчиком
        </div>
        <div className={'section-wishes-list'}>

          <div className={'section-wishes-list-item'}>
            <div className={'section-wishes-list-item-middleware'}>
              <div className={'section-wishes-list-item-num'}>
                1
              </div>
              <div className={'section-wishes-list-item-text'}>
                Файлы в формате DWG, DXF, CDR.
              </div>
            </div>
          </div>

          <div className={'section-wishes-list-item'}>
            <div className={'section-wishes-list-item-middleware'}>
              <div className={'section-wishes-list-item-num'}>
                2
              </div>
              <div className={'section-wishes-list-item-text'}>
                Масштаб файлов
                в чертеже 1:1.
              </div>
            </div>
          </div>

          <div className={'section-wishes-list-item'}>
            <div className={'section-wishes-list-item-middleware'}>
              <div className={'section-wishes-list-item-num'}>
                3
              </div>
              <div className={'section-wishes-list-item-text'}>
                Все кривые должны быть замкнуты.
              </div>
            </div>
          </div>
          <div className={'section-wishes-list-item'}>
            <div className={'section-wishes-list-item-middleware'}>
              <div className={'section-wishes-list-item-num'}>
                4
              </div>
              <div className={'section-wishes-list-item-text'}>
                Чертежи деталей содержат только полилинии, отрезки и дуги.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishes;