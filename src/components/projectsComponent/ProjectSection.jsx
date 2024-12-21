import React from 'react'
import SectionHeader from '../globalComponent/SectionHeader'
import FeaturedProjectCard from './FeaturedProjectCard'
import OthersProjectCard from './OthersProjectCard'
import PortfolioSection from './PortfolioSection'

const ProjectSection = () => {
    return (
        <div>
            <div id='project' className='flex flex-col items-center pb-[120px] pt-[120px]  bg-gray-100  '>
                <SectionHeader sectionHeading="Featured Project" />
                <PortfolioSection flexdir="flex-row-reverse" />
                <FeaturedProjectCard flexdir="flex-row" />
                

            </div>
            <div className='flex flex-col items-center pb-[120px] pt-[120px]  bg-gray-100  '>
                <SectionHeader sectionHeading="Other Project" />
                <OthersProjectCard/>
            </div>
        </div>
    )
}

export default ProjectSection