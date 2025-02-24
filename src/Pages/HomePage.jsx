import React from 'react'
import Hero from '../components/heroComponent/Hero'
import AboutSection from '../components/aboutComponent/AboutSection'
import ExperienceSection from '../components/experienceComponent/ExperienceSection'
import ProjectSection from '../components/projectsComponent/ProjectSection'
import ContactSection from '../components/contactComponent/ContactSection'
import FooterSection from '../components/footerComponent/FooterSection'
import NavBar from '../components/navComponent/NavBar'
import ApiCall from '../components/patchData/ApiCall'
import QuoteData from '../components/patchData/QuoteData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from '../components/ErrorComponent/errorPage'
import Achievement from '../components/achievement/achievement'

const HomePage = () => {
  return (
    <div>

        <BrowserRouter>
        <NavBar/>

          <Routes>
              <Route path='/Portfolio/' index element={<><Hero/></> } />
              {/* <Route path='/Portfolio' index element={<QuoteData/>} /> */}
              <Route path='/Portfolio/about' element={<AboutSection/>} />
              <Route path='/Portfolio/experience' element={<ExperienceSection/>} />
              <Route path='/Portfolio/project' element={<ProjectSection/>} />
              {/* <Route path='/Portfolio/achievement' element={<Achievement/>} /> */}
              <Route path='/Portfolio/contact' element={<ContactSection/>} />
              <Route path='*' element={<ErrorPage/> } />
          </Routes>
          <FooterSection/>
        </BrowserRouter>
    </div>
  )
}

export default HomePage