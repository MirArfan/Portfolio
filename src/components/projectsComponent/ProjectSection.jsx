import React from 'react'
import SectionHeader from '../globalComponent/SectionHeader'
import FeaturedProjectCard from './FeaturedProjectCard'
import OthersProjectCard from './OthersProjectCard'
import PortfolioSection from './PortfolioSection'
import TaskManagementProject from './TaskManagementProject'

const ProjectSection = () => {
    return (
        <div>
            <div id='project' className='flex flex-col items-center pb-[120px] pt-[120px]  bg-gray-100  '>
                <SectionHeader sectionHeading="Featured Project" />
                <FeaturedProjectCard flexdir="flex-row" />
                <PortfolioSection flexdir="flex-row-reverse" />
            </div>

            <div className='flex flex-col items-center pb-[120px] pt-[120px]  bg-gray-100'>
                <SectionHeader sectionHeading="AI Vibe Project" />
                <TaskManagementProject />
            </div>

            <div className='flex flex-col items-center  pb-[120px] pt-[120px]  bg-gray-100  '>
                <SectionHeader sectionHeading="Other Project" />
                <OthersProjectCard />
            </div>


        </div>
    )
}

export default ProjectSection