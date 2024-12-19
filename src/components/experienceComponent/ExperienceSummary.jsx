import React from 'react'

const ExperienceSummary = (props) => {
    return (
        <div className=' w-[13vw] flex flex-col  justify-center'>
            <p className={'text-[24px] ' + props.aligndir}>Software Engineer Intern (Wordpress)</p>
            <p className={'text-[16px] ' + props.aligndir}>Growthly IT</p>
            <hr className="h-[1px] w-full bg-gray-900 border-0 dark:bg-gray-900 mt-[10px] mb-[12px]" />
            <p className={'text-[14px] ' + props.aligndir} >Nov 2024 - Present</p>
        </div>
    )
}

export default ExperienceSummary