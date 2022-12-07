import React from 'react';
import './SectionPreview.scss';

function SectionPreview({page}) {
  return (
    <div className={`section-preview-container ${page}`}>
      <div className={'section-preview'}>
        <div className={'section-preview-title'}>
          {page === 'main' && 'Лазерная и Фрезерная обработка листовых материалов'}
          {page === 'laser' && 'Лазерная резка'}
          {page === 'milling' && 'Фрезерная обработка'}
        </div>
        {page === 'laser' &&
          <div className={'section-preview-text'}>
            от 5,90 руб. м.
          </div>}
        {page === 'milling' &&
          <div className={'section-preview-text'}>
            от 16,00 руб. м.
          </div>
        }
        {page === 'laser' &&
          <div className={'section-preview-button'}>
            Заказать услугу
          </div>
        }
        {page === 'milling' &&
          <div className={'section-preview-button'}>
            Заказать услугу
          </div>
        }
      </div>
    </div>
  );
}

export default SectionPreview;