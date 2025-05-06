import React from 'react'
import FeaturedProjectPicture from './FeaturedProjectPicture'
import Juris_meet_detalis from './Juris_meet_detalis';

const FeaturedProjectCard = (props) => {
    let aligndir = "text-start";
    let alignFlex='';
    if (props.flexdir === "flex-row-reverse") { aligndir = "text-end" ; alignFlex="justify-end"}
    return (
        <div className='flex gap-14'>
            <div className={'flex mt-[50px] justify-between w-[70vw] gap-6 items-center ' + props.flexdir}>
                <FeaturedProjectPicture />
                <Juris_meet_detalis aligndir={aligndir} alignFlex={alignFlex} />
            </div>
        </div>
    )
}

export default FeaturedProjectCard