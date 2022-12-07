import React from 'react';
import Header from "../../components/Header/Header";
import SectionPreview from "../../components/SectionPreview/SectionPreview";
import WorkOrder from "../../components/WorkOrder/WorkOrder";
import Faq from "../../components/Faq/Faq";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import Advantages from "../../components/Advantages/Advantages";

function MillingPage(props) {
  return (
    <div className={'laser-page'}>
      <Header/>

      <SectionPreview page={'milling'}/>

      <Advantages/>

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

      <WorkOrder/>

      <Faq/>

      <Form/>

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
                Фрезерная обработк
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

      <Footer/>
    </div>
  );
}

export default MillingPage;