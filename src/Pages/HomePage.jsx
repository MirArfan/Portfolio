import React from 'react'
import Hero from '../components/heroComponent/Hero'
import AboutSection from '../components/aboutComponent/AboutSection'
import ExperienceCard from '../components/experienceComponent/ExperienceCard'
import ExperienceSection from '../components/experienceComponent/ExperienceSection'
import ProjectSection from '../components/projectsComponent/ProjectSection'
import ContactSection from '../components/contactComponent/ContactSection'
import FooterSection from '../components/footerComponent/FooterSection'
import NavBar from '../components/navComponent/NavBar'
import ApiCall from '../components/patchData/ApiCall'
import QuoteData from '../components/patchData/QuoteData'

const HomePage = () => {
  return (
    <div>
        <NavBar/>
        
        <Hero/>
        <QuoteData/>
        <AboutSection/>
        <ExperienceSection/>
        <ProjectSection/>
        <ContactSection/>
        <FooterSection/>
    </div>
  )
}

export default HomePage