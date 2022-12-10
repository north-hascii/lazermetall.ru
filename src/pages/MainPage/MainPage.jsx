import React from 'react';
import './MainPage.scss';
import SectionPreview from "../../components/SectionPreview/SectionPreview";
import SectionDescription from "../../components/SectionDescription/SectionDescription";
import Services from "../../components/Services/Services";
import Examples from "../../components/Examples/Examples";
import Form from "../../components/Form/Form";

function MainPage(props) {
    return (<div className={'main-page'}>
        <SectionPreview page={'main'}/>

        <SectionDescription/>

        <Services/>

        <Examples folder={'examples_main'}/>

        <Form/>
    </div>);
}

export default MainPage;