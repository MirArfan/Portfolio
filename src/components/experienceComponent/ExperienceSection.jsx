import React from 'react'
import ExperienceCard from './ExperienceCard'
import SectionHeader from '../globalComponent/SectionHeader'
import ExperienceCardFullStack from './ExperienceCardSpringRain'
import ExperienceCardCompetitive from './ExperienceCardCompetitive'
import AchievementsSection from './AchievementsSection'
import LeadershipExperience from './LeadershipExperience'
const ExperienceSection = () => {
  return (
    <div id='experience' className='flex flex-col items-center pb-[120px] pt-[120px] '>
        <SectionHeader sectionHeading="Experience"/>
        <ExperienceCard flexdir="flex-row" />
        {/* <ExperienceCard flexdir="flex-row-reverse" /> */}
        <ExperienceCardFullStack flexdir="flex-row-reverse" />
        <ExperienceCardCompetitive flexdir="flex-row" />
        <AchievementsSection />
        <LeadershipExperience/>
    </div>
  )
}

export default ExperienceSection