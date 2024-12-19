import React from 'react';
import ExperienceDetailsSpringRain from './ExperienceDetailsSpringRain';
import ExperienceSummarySpringRain from './ExperienceSummarySprintRain';

const ExperienceCardFullStack = (props) => {
    let aligndir = "text-end";
    if (props.flexdir === "flex-row-reverse") { aligndir = "text-start" }

    return (
        <div className={'flex mt-[50px] justify-between w-[70vw] ' + props.flexdir}>
            <ExperienceSummarySpringRain aligndir={aligndir} />
            <div className="w-[1px] bg-gray-800" />
            <ExperienceDetailsSpringRain />
        </div>
    );
};

export default ExperienceCardFullStack;
