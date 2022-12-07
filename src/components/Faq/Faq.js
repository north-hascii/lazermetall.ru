import React from 'react';
import './Faq.scss'

function Faq({data}) {
    const toggleFaqItem = (index) => {
        let items = document.querySelectorAll(".faq-item");

        items[index].classList.toggle("active");
    }
    return (<div className={'faq-container'}>
        <div className={'faq-header'}>
            частые вопросы
        </div>
        <div className={'faq-items'}>
            {data.map((item, index) => {
                return <div className={'faq-item'} key={index} onClick={() => toggleFaqItem(index)}>
                    <div className={'faq-item-top'}>
                        <div className={'faq-item-title'}>
                            {item.title}
                        </div>
                        <img src={'images/faq/toggle.svg'} alt={'toggle'}/>
                    </div>
                    <div className={'faq-item-bottom'}>
                        <div className={'faq-item-text'}>
                            {item.text}
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>);
}

export default Faq;