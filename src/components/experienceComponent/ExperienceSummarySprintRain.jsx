import React from 'react';

const ExperienceSummarySpringRain = (props) => {
    return (
        <div className='w-[15vw] flex flex-col justify-center'>
            <p className={'text-[24px] ' + props.aligndir}>Career Development Program</p>
            <p className={'text-[16px] ' + props.aligndir}>Spring Rain Pvt Ltd </p>
            <hr className="h-[1px] w-full bg-gray-900 border-0 dark:bg-gray-900 mt-[10px] mb-[12px]" />
            <p className={'text-[14px] ' + props.aligndir}>February 2024 - July 2024</p>
        </div>
    );
};

export default ExperienceSummarySpringRain;
