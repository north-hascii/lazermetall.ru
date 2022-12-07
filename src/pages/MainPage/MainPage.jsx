import React, {useEffect} from 'react';
import './MainPage.scss';
import Form from "../../components/Form/Form";
import SectionPreview from "../../components/SectionPreview/SectionPreview";
import Examples from "../../components/Examples/Examples";
import usePreloader from "../../hooks/usePreloader";

function MainPage() {
  const {showPreloader} = usePreloader()
  useEffect(() => {
    showPreloader()
  }, [])

  return (
    <div className={'main-page'}>
      <SectionPreview page={'main'}/>
      <div className={'section-description-container'}>
        <div className={'section-description-top'}>
          <div className={'text'}>
            ГлассФасад — выбор заказчиков, ценящих оперативность и безупречное качество! Наша команда с
            большим опытом в области обработки листового металла, производстве фасадных и навесных систем
            любого типа.
          </div>
          <div className={'text'}>
            На сегодня ГлассФасад — предприятие полного цикла с командой высококвалифицированных
            специалистов, собственным конструкторским бюро, производством с высокотехнологичным
            оборудованием площадью более 3000 квадратных метров, монтажным отделом и транспортной службой.
          </div>
          <div className={'text'}>
            Реализуя крупные и технически сложные проекты, мы выполняем запросы самых требовательных
            заказчиков. География выполненных проектов — Москва, Московская область и регионы ЦФО.
          </div>
        </div>
        <div className={'section-description-bottom'}>
          <div className={'section-description-bottom-left'}>
            <img src={'images/description_img.jpg'} alt={"description"}/>
          </div>
          <div className={'section-description-bottom-right'}>
            <div className={'section-description-item'}>
              <div className={'section-description-item-left'}>
                <img src={'images/description_tip.svg'} alt={'tip'}/>
              </div>
              <div className={'section-description-item-right'}>
                <div className={'section-description-item-right-title'}>
                  ВЫПОЛНЯЕМ ПОЛНЫЙ ЦИКЛ РАБОТ
                </div>

                <div className={'section-description-item-right-text'}>
                  От проектирования и производства до монтажа и сервисного обслуживания
                </div>
              </div>
            </div>

            <div className={'section-description-item'}>
              <div className={'section-description-item-left'}>
                <img src={'images/description_tip.svg'} alt={'tip'}/>
              </div>
              <div className={'section-description-item-right'}>
                <div className={'section-description-item-right-title'}>
                  ГАРАНТИРУЕМ 100% КАЧЕСТВО
                </div>

                <div className={'section-description-item-right-text'}>
                  Материалы, изготовление продукции и монтаж строго контролируется на каждом этапе
                  производства собственным отделом качества
                  и внутреннего контроля.
                </div>
              </div>
            </div>

            <div className={'section-description-item'}>
              <div className={'section-description-item-left'}>
                <img src={'images/description_tip.svg'} alt={'tip'}/>
              </div>
              <div className={'section-description-item-right'}>
                <div className={'section-description-item-right-title'}>
                  ВЫПОЛНЯЕМ ПОЛНЫЙ ЦИКЛ РАБОТ
                </div>

                <div className={'section-description-item-right-text'}>
                  Проектирование и изготовление продукции осуществляется в самые сжатые сроки. Готовая
                  продукция доставляется на строительные площадки 24/7, без выходных.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={'section-service'}>
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
      </div>

      <Examples folder={'examples_main'}/>
      <Form/>
    </div>
  );
}

export default MainPage;