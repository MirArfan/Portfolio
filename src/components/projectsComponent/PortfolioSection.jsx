import React from 'react'
import FeaturedProjectPicture from './FeaturedProjectPicture'
import Portfolio from './Portfolio';
import PortfolioPic from './PortfolioPic';

const PortfolioSection = (props) => {
    let aligndir = "text-start";
    let alignFlex='';
    if (props.flexdir === "flex-row-reverse") { aligndir = "text-end" ; alignFlex="justify-end"}
    return (
        <div className='flex gap-14'>
            <div className={'flex mt-[50px] justify-between w-[70vw] gap-6 items-center ' + props.flexdir}>
                <PortfolioPic />
                <Portfolio aligndir={aligndir} alignFlex={alignFlex} />
            </div>
        </div>
    )
}

export default PortfolioSection
