import React from 'react'
import AboutHeader from '../globalComponent/SectionHeader'
import AboutDetais from './AboutDetais'
import AboutPicture from './AboutPicture'
import Skill from './Skill'
import Journey from './Journey'
import Hobbies from './Hobbies'

const AboutSection = () => {
    return (
        <section id='about' className="flex flex-col items-center pt-[120px] pb-[120px]  bg-gray-100 " >
            <AboutHeader sectionHeading="About me" />
            <div className=" flex justify-between container w-[70%] flex-row items-center mt-[50px] ">

                <AboutDetais />
                <AboutPicture />
            </div>
            <div className="flex flex-col items-center pt-[120px] pb-[120px]  bg-gray-100 " >
                <Skill/>
            </div>
            {/* <Journey/> */}
            {/* <Hobbies/> */}
        </section >
    )
}

export default AboutSection