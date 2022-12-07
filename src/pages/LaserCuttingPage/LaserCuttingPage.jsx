import React from 'react';
import './LaserCuttingPage.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WorkOrder from "../../components/WorkOrder/WorkOrder";
import Faq from "../../components/Faq/Faq";
import Form from "../../components/Form/Form";
import SectionPreview from "../../components/SectionPreview/SectionPreview";
import Advantages from "../../components/Advantages/Advantages";
import Examples from "../../components/Examples/Examples";
import Materials from "../../components/Materials/Materials";
import LaserPriceList from "../../components/LaserPriceList/LaserPriceList";
import Wishes from "../../components/Wishes/Wishes";
import AnotherServices from "../../components/AnotherServices/AnotherServices";
import usePreloader from "../../hooks/usePreloader";
import {useEffect} from "@types/react";


function LaserCuttingPage(props) {
  const materials = [{
    text: 'АЛЮМИНИЙ',
    src: 'images/materials_laser/aluminium.jpg'
  }, {
    text: 'НЕРЖАВЕЙКА',
    src: 'images/materials_laser/stainless_steel.jpg'
  }, {
    text: 'ЛАТУНЬ',
    src: 'images/materials_laser/brass.jpg'
  }, {
    text: 'МЕДЬ',
    src: 'images/materials_laser/copper.jpg'
  }, {
    text: 'УГЛЕРОДИСТАЯ СТАЛЬ',
    src: 'images/materials_laser/carbon_steel.jpg'
  }, {
    text: 'ОЦИНКОВАННАЯ СТАЛЬ',
    src: 'images/materials_laser/galvanized_steel.jpg'
  },]

  const questions = [{
    title: 'Как сделать заказ?',
    text: 'Для оформления заказа свяжитесь с нашим менеджером по телефону +7 (4852) 64-11-12. Либо вы можете сразу присылать заявку по электронной почте с указанием контактных данных.В теле письма прикрепите DXF файлы Ваших деталей для резки.В случае отсутствия развёрток, мы поможем Вам их сделать (услуга оценивается в зависимости от сложности).',
  }, {
    title: 'Может ли лазер работать с нестандартными и сложными деталями?',
    text: 'Да, это одно из преимуществ лазерной резки. Это достигается благодаря управлению программным методом в автоматическом режиме.',
  }, {
    title: 'При резке обгорает край изделий?',
    text: 'Обгорание действительно есть из-за плавки металла и выдува расплава сжатыми газами, \n' + 'но, т.к. процесс резки очень быстрый, то тепловое воздействие на зону реза минимальное.',
  }, {
    title: 'Какое расширение файла необходимо для программы станка?',
    text: 'Подойдут файлы из Авто-КАДа, имеющие расширения .dxf, dwg. Однако, мы принимаем и обычные чертежи.Некоторые станки читают файлы из CorelDraw.',
  }, {
    title: 'У меня нет DXF файлов, только чертежи.',
    text: 'Даже если есть только эскиз, то мы можем Вам сделать из него чертеж и затем преобразовать файл для резки и гибки.Оформление конструкторской документации зависит от масштаба технического задания.',
  }, {
    title: 'Как режут металл лазером?',
    text: 'В процессе резки, под воздействием лазерного луча материал разрезаемого участка плавится, возгорается, испаряется или выдувается струей газа.',
  },]

  const {showPreloader} = usePreloader()
  useEffect(() => {
    showPreloader()
  }, [])
  return (
    <div className={'laser-page'}>

      <SectionPreview page={'laser'}/>

      <Advantages/>

      <Materials objects={materials}/>

      <LaserPriceList/>

      <Examples folder={'examples_laser'}/>

      <Wishes/>

      <WorkOrder/>

      <Faq data={questions}/>

      <Form/>

      <AnotherServices/>

    </div>
  );
}

export default LaserCuttingPage;