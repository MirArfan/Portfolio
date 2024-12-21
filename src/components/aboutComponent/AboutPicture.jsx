import React from 'react'
import aboutpic from '/src/assets/MirArfan.jpeg';

// const aboutimage= 'Personal_Portfolio/Portfolio/src/assets/Aboutme.jpeg';
// const aboutimage = require('../Aboutme');
const AboutPicture = () => {
    return (
        <div className='w-[450px]'>
            <img src={aboutpic} alt="picture"  className='h-[350px] w-[480px] rounded-md'/>
        </div>
    )
}

export default AboutPicture