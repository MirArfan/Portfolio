import React from 'react'

const ExperienceDetails = () => {
    const data = ['Developed and customized WordPress websites using Elementor,.','Managed interactive forms with WPForms and Bit Form.','Developed and maintained e-learning platforms using Tutor LMS, ensuring seamless course delivery and management.'];

    return (
        <div className=' w-[75%]'>
            <ul >
                {
                    data.map((line, index) => 
                    (<li key={index} className='list-disc text-[17px] text-justify'>{line}</li>))
                }
            </ul>
        </div>
    )
}

export default ExperienceDetails