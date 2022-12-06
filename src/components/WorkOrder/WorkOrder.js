import React from 'react';
import './WorkOrder.scss'

function WorkOrder() {
    const data = [{text: 'Вы присылаете нам чертежи или файлы раскроя.'}, {text: 'Мы считаем стоимость вашего заказа.'}, {text: 'Проектируем и подготавливаем к производству.'}, {text: 'Производим ваше изделие.'}, {text: 'Отгружаем готовое изделие.'}]
    return (<div className={'work-order'}>
        <div className={'work-order-container'}>
            <div className={'work-order-title'}>
                Порядок работ
            </div>
            <div className={'work-order-items'}>
                {data.map((item, index) => {
                    return <div className={'work-order-item'} key={index}>
                        <div className={'work-order-circle'}>
                            <div className={'work-order-number'}>
                                {index + 1}
                            </div>
                        </div>
                        <div className={'work-order-item-text'}>
                            {item.text}
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>);
}

export default WorkOrder;