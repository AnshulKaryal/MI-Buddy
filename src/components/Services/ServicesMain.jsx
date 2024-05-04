import React from 'react'
import ServicesMainSection from './ServicesMainSection';
import ServicesInfoSection from './ServicesInfoSection';
import ServicesProcess from './ServicesProcess';
import ServicesContactUs from './ServicesContactUs';
import Servicesfaq from './Servicesfaq';

const ServicesMain = () => {
  return (
    <div>
        <ServicesMainSection/>
        <ServicesInfoSection/>
        <ServicesProcess/>
        <ServicesContactUs/>
        <Servicesfaq/>
    </div>
  );
};

export default ServicesMain;