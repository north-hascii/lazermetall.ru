import React from 'react';
import './MillingPage.scss';
import Header from "../../components/Header/Header";
import SectionPreview from "../../components/SectionPreview/SectionPreview";
import WorkOrder from "../../components/WorkOrder/WorkOrder";
import Faq from "../../components/Faq/Faq";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import Advantages from "../../components/Advantages/Advantages";
import Examples from "../../components/Examples/Examples";
import Materials from "../../components/Materials/Materials";
import MillingPriceList from "../../components/MillingPriceList/MillingPriceList";
import Wishes from "../../components/Wishes/Wishes";
import AnotherServices from "../../components/AnotherServices/AnotherServices";

function MillingPage(props) {
  const materials = [{
    text: 'платик пвх',
    src: 'images/materials_milling/plastic.jpg'
  }, {
    text: 'оргстекло',
    src: 'images/materials_milling/plexiglass.jpg'
  }, {
    text: 'монолитный поликарбонат',
    src: 'images/materials_milling/carbonate.jpg'
  }, {
    text: 'композит',
    src: 'images/materials_milling/composite.jpg'
  }, {
    text: 'полистирол',
    src: 'images/materials_milling/polystyrene.jpg'
  }, {
    text: 'Алюминий',
    src: 'images/materials_milling/aluminium.jpg'
  }, {
    text: 'фанера',
    src: 'images/materials_milling/plywood.jpg'
  }, {
    text: 'дсп, мдф',
    src: 'images/materials_milling/chipboard.jpg'
  }, {
    text: 'пенокартон',
    src: 'images/materials_milling/foam_board.jpg'
  },]

  const questions = [{
    title: 'Как сделать заказ?',
    text: 'Для оформления заказа свяжитесь с нашим менеджером по телефону +7 (4852) 64-11-12. Либо вы можете сразу присылать заявку по электронной почте с указанием контактных данных.В теле письма прикрепите DXF файлы Ваших деталей для резки.В случае отсутствия развёрток, мы поможем Вам их сделать (услуга оценивается в зависимости от сложности).',
  }, {
    title: 'Может ли фрезер работать с нестандартными и сложными деталями?',
    text: 'Да, это одно из преимуществ фрезерной обработки. Это достигается благодаря управлению программным методом в автоматическом режиме.',
  }, {
    title: 'Какое расширение файла необходимо для программы станка?',
    text: 'Подойдут файлы из Авто-КАДа, имеющие расширения .dxf, dwg. Однако, мы принимаем и обычные чертежи.Некоторые станки читают файлы из CorelDraw.',
  }, {
    title: 'У меня нет DXF файлов, только чертежи.',
    text: 'Даже если есть только эскиз, то мы можем Вам сделать из него чертеж и затем преобразовать файл для резки и гибки.Оформление конструкторской документации зависит от масштаба технического задания.',
  },]


  return (
    <div className={'laser-page'}>
      <Header/>

      <SectionPreview page={'milling'}/>

      <Advantages/>

      <Materials objects={materials}/>

      <MillingPriceList/>

      <Examples folder={'examples_milling'}/>

      <Wishes/>

      <WorkOrder/>

      <Faq data={questions}/>

      <Form/>

      <AnotherServices/>

      <Footer/>
    </div>
  );
}

export default MillingPage;