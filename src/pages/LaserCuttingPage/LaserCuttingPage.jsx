import React from 'react';
import './LaserCuttingPage.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WorkOrder from "../../components/WorkOrder/WorkOrder";


function LaserCuttingPage(props) {
  return (
    <div className={'laser-page'}>
      <Header/>

      <div className={'section-preview-container'}>
        <div className={'section-preview'}>
          <div className={'section-preview-title'}>
            Лазерная резка
          </div>
          <div className={'section-preview-text'}>
            от 5,90 руб. м.
          </div>
          <div className={'section-preview-button'}>
            Заказать услугу
          </div>
        </div>
      </div>

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

      <div className={'section-materials'}>
        <div className={'section-materials-container'}>
          <div className={'section-materials-title'}>
            Обрабатываемые материалы
          </div>
          <div className={'section-materials-items'}>
            <div className={'section-materials-item'}>
              <div className={'section-materials-item-text'}>
                Алюминий
              </div>
            </div>

            <div className={'section-materials-item'}>
              <div className={'section-materials-item-text'}>
                Нержавейка
              </div>
            </div>

            <div className={'section-materials-item'}>
              <div className={'section-materials-item-text'}>
                Латунь
              </div>
            </div>

            <div className={'section-materials-item'}>
              <div className={'section-materials-item-text'}>
                Медь
              </div>
            </div>

            <div className={'section-materials-item'}>
              <div className={'section-materials-item-text'}>
                Углеродистая сталь
              </div>
            </div>

            <div className={'section-materials-item'}>
              <div className={'section-materials-item-text'}>
                Оцинкованная сталь
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/*  Здест будет табличка*/}
      </div>

      <div className={'section-example'}>
        <div className={'section-example-container'}>
          <div className={'section-example-title'}>
            Примеры работ
          </div>
          <div className={'section-example-items'}>
            <div className={'section-example-item'}/>
            <div className={'section-example-item'}/>
            <div className={'section-example-item'}/>
            <div className={'section-example-item'}/>
            <div className={'section-example-item'}/>
            <div className={'section-example-item'}/>
            <div className={'section-example-item'}/>
            <div className={'section-example-item'}/>
            <div className={'section-example-item'}/>
          </div>
        </div>

      </div>

      <div className={'section-wishes'}>
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
                <div className={'section-advantages-list-item-text'}>

                </div>
              </div>

              <div className={'section-wishes-list-item'}>
                <div className={'section-wishes-list-item-middleware'}>

                  <div className={'section-wishes-list-item-num'}>
                    2
                  </div>
                  <div className={'section-advantages-list-item-text'}>

                  </div>
                </div>
              </div>
              <div className={'section-wishes-list-item'}>
                <div className={'section-wishes-list-item-middleware'}>

                  <div className={'section-wishes-list-item-num'}>
                    3
                  </div>
                  <div className={'section-advantages-list-item-text'}>

                  </div>
                </div>
              </div>
              <div className={'section-wishes-list-item'}>
                <div className={'section-wishes-list-item-middleware'}>

                  <div className={'section-wishes-list-item-num'}>
                    4
                  </div>
                  <div className={'section-advantages-list-item-text'}>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WorkOrder/>

      <Footer/>
    </div>
  );
}

export default LaserCuttingPage;