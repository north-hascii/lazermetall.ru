import React from 'react';
import './LaserPriceList.scss'

function LaserPriceList(props) {
    const rows = [{
        cells: ['Толщина,мм', 'Лазерная\n' + 'резка черной стали, руб./м', 'Лазерная резка оцинкованной стали, руб./м', 'Лазерная резка нержавеющей стали, руб./м', 'Лазерная резка алюминия, руб./м', 'Лазерная резка меди, руб./м', 'Лазерная резка латуни, руб./м', 'Лазерная резка титана, руб./м',]
    }, {
        cells: ['1', '5,90 руб.', '6,79 руб.', '8,98 руб.', '10,80 руб.', '19,50 руб.', '37,80 руб.', '54,00 руб.',]
    }, {
        cells: ['1,2', '6,50 руб.', '7,48 руб.', '9,31 руб.', '11,20 руб.', '–', '–', '–',]
    }, {
        cells: ['1,5', '8,80 руб.', '10,12 руб.', '10,23 руб.', '12,30 руб.', '30 руб.', '59,40 руб.', '65 руб.',]
    }, {
        cells: ['1,8', '9,70 руб.', '11,16 руб.', '11,31 руб.', '13,60 руб.', '–', '–', '–',]
    }, {
        cells: ['2', '10,20 руб.', '11,73 руб.', '14,97 руб.', '18 руб.', '55,50 руб.', '75,60 руб.', '76,00 руб.',]
    }, {
        cells: ['2,5', '12,30 руб.', '14,15 руб.', '17,96 руб.', '21,60 руб.', '72,15 руб.', '86,40 руб.', '–',]
    }, {
        cells: ['3', '14,80 руб.', '17,02 руб.', '19,36 руб.', '23,28 руб.', '93,80 руб.', '91,80 руб.', '86,40 руб.',]
    }, {
        cells: ['4', '19,24 руб.', '22,13 руб.', '25,17 руб.', '–', '–', '–', '–',]
    }, {
        cells: ['5', '25,01 руб.', '28,76 руб.', '35,23 руб.', '–', '–', '–', '–',]
    }, {
        cells: ['6', '32,52 руб.', '37,39 руб.',  '–', '–', '–', '–', '–',]
    }, {
        cells: ['7', '42,27 руб.', '48,61 руб.',  '–', '–', '–', '–', '–',]
    }, {
        cells: ['8', '54,95 руб.', '63,19 руб.',  '–', '–', '–', '–', '–',]
    },]

    return (<div id={'price-list'} className={'LaserPriceList-container'}>
        <div className={'LaserPriceList-title'}>
            цены
        </div>
        <div className={'LaserPriceList-subtitle'}>
            Цена на услуги резки металла от 5,9 руб./м.п.
        </div>
        <div className={'LaserPriceList-subtext'}>
            Возможно срочное исполнение заказа на резку металла в течение 1-2х дней - при наличии материала на
            складе и до 5х дней - при необходимости его закупки. Наценка за срочность исполнения заказа - 100%.
        </div>
        <div className={'LaserPriceList-table'}>
            {rows.map((row, index) => {
                return <div className={`LaserPriceList-table-row ${index % 2 === 0 && 'grey'}`} key={index}>
                    {row.cells.map((cell, index) => {
                        return <div className={'LaserPriceList-table-row-cell'} key={index}>
                            {cell}
                        </div>
                    })}
                </div>
            })}
        </div>

        <div className={'LaserPriceList-disclaimer'}>
            *Указаны ориентировочные цены на работу за погонный метр БЕЗ учета НДС. Цена за метр зависит от общей длины реза в заказе. Цены указаны для тиражей свыше 3000 м. Количество врезок и особенности конфигурации деталей учитываются отдельно.
        </div>
    </div>);
}

export default LaserPriceList;