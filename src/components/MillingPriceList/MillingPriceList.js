import React from 'react';
import './MillingPriceList.scss'

function MillingPriceList(props) {
    const rows = [{
        cells: [['Наименование материала'], ['Толщина материала'], ['Стоимость пог/м. (руб.)']]
    }, {
        cells: [['ПЛАСТИК ПВХ'], ['1-10 мм.'], ['16 руб.']]
    }, {
        cells: [['ОРГСТЕКЛО'], ['1-4 мм.', '5-6 мм.', '8-10 мм.'], ['16 руб.', '32 руб.', '56 руб.']]
    }, {
        cells: [['МОНОЛИТНЫЙ ПОЛИКАРБОНАТ'], ['1-3 мм.', '4-6 мм.', '8-10 мм.'], ['22 руб.', '54 руб.', '70 руб.']]
    }, {
        cells: [['КОМПОЗИТ'], ['3-4 мм.'], ['23 руб.']]
    }, {
        cells: [['ПОЛИСТИРОЛ'], ['1-4 мм.', '5-6 мм.'], ['16 руб.', '32 руб.']]
    }, {
        cells: [['АЛЮМИНИЙ'], ['1 мм.', '2 мм.', '3 мм.'], ['16 руб.', '25 руб.', '34 руб.']]
    }, {
        cells: [['ФАНЕРА'], ['3-5 мм.', '5-12 мм.', '13-18 мм.'], ['16 руб.', '29 руб.', '52 руб.']]
    }, {
        cells: [['ДСП, МДФ'], ['8-12 мм.', '13-18 мм.', '19-25 мм.'], ['29 руб.', '56 руб.', '65 руб.']]
    }, {
        cells: [['ПЕНОКАРТОН'], ['1-10 мм.'], ['14 руб.']]
    }, {
        cells: [['ГРАВИРОВКА'], [''], ['900 руб/час']]
    },]
    return (<div className={'MillingPriceList-container'}>
        <div className={'MillingPriceList-title'}>
            цены
        </div>
        <div className={'MillingPriceList-subtitle'}>
            Цена на услуги фрезерной резки от 16р./м.п
        </div>
        <div className={'MillingPriceList-subtext'}>
            Возможно срочное исполнение заказа на резку металла в течение 1-2х дней - при наличии материала на складе и
            до 5х дней - при необходимости его закупки. Наценка за срочность исполнения заказа - 100%.
        </div>
        <div className={'MillingPriceList-table'}>
            {rows.map((row, rowIndex) => {
                return <div className={`MillingPriceList-table-row ${rowIndex % 2 === 0 && 'grey'}`} key={rowIndex}>
                    {row.cells.map((cell, cellIndex) => {
                        return <div className={'MillingPriceList-table-row-cell'} key={cellIndex}>
                            {cell.map((cellItem, cellItemIndex) => {
                                return <div
                                    className={`MillingPriceList-table-row-cell-item ${rowIndex > 0 && cellIndex > 0 && cell.length > 1 && 'columns'}`}
                                    key={cellItemIndex}>
                                    {cellItem}
                                </div>
                            })}
                        </div>
                    })}
                </div>
            })}
        </div>

        <div className={'MillingPriceList-disclaimer'}>
            *Указаны ориентировочные цены на работу за погонный метр БЕЗ учета НДС. Цена за метр зависит от общей длины
            реза в заказе. Цены указаны для тиражей свыше 3000 м. Количество врезок и особенности конфигурации деталей
            учитываются отдельно.
        </div>
    </div>);
}

export default MillingPriceList;