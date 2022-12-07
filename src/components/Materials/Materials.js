import React from 'react';
import './Materials.scss';

function Materials({objects}) {

  return (
    <div className={'section-materials'}>
      <div className={'section-materials-container'}>
        <div className={'section-materials-title'}>
          Обрабатываемые материалы
        </div>
        <div className={'section-materials-items'}>
          {objects.map((item, index) => {
            return <div className={'section-materials-item'}
                        key={index}
                        style={{
                          backgroundImage: `url(${item.src})`,
                        }}>
              <div className={'section-materials-item-text'}>
                {item.text}
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default Materials;