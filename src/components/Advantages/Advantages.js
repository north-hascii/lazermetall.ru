import React from 'react';
import './Advantages.scss';

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
        <div className={'section-advantages-nav-item'}>
          Обрабатываемые материалы
        </div>
        <div className={'section-advantages-nav-item'}>
          Цена
        </div>
        <div className={'section-advantages-nav-item'}>
          Примеры работ
        </div>
        <div className={'section-advantages-nav-item'}>
          Порядок работ
        </div>
        <div className={'section-advantages-nav-item'}>
          Пожелания к чертежам
        </div>
        <div className={'section-advantages-nav-item'}>
          Другие услуги компании
        </div>
      </div>
    </div>

  );
}

export default Advantages;