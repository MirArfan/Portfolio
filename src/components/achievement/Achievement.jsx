import React, { useState } from 'react'
import KgSchool from './KgSchool';
import PrimaryScholarship from './PrimaryScholarship';
import Ankur from './Ankur';
import Sports from './Sports';




const Achievement = () => {



  return (
    <section className="py-12 bg-gray-50">
        <KgSchool/>
        <PrimaryScholarship/>
        <Ankur/>
        <Sports/>
    </section>
  )
}

export default Achievement