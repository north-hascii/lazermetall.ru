import React from 'react';
import './Examples.scss';

function Examples({folder}) {
  return (
    <div id={'section-example'} className={'section-example'}>
      <div className={'section-example-container'}>
        <div className={'section-example-title'}>
          Примеры работ
        </div>
        <div className={'section-example-items'}>
          <img className={'section-example-item'} src={`images/${folder}/example1.jpg`} alt={'example'}/>
          <img className={'section-example-item'} src={`images/${folder}/example2.jpg`} alt={'example'}/>
          <img className={'section-example-item'} src={`images/${folder}/example3.jpg`} alt={'example'}/>
          <img className={'section-example-item'} src={`images/${folder}/example4.jpg`} alt={'example'}/>
          <img className={'section-example-item'} src={`images/${folder}/example5.jpg`} alt={'example'}/>
          <img className={'section-example-item'} src={`images/${folder}/example6.jpg`} alt={'example'}/>
          <img className={'section-example-item'} src={`images/${folder}/example7.jpg`} alt={'example'}/>
          <img className={'section-example-item'} src={`images/${folder}/example8.jpg`} alt={'example'}/>
          <img className={'section-example-item'} src={`images/${folder}/example9.jpg`} alt={'example'}/>
        </div>
      </div>
    </div>
  );
}

export default Examples;