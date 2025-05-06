import React from 'react'

const ExperienceDetails = () => {
    const data = ['Designed and customized dynamic websites using Elementor and integrated WooCommerce for e-commerce functionality.','Managed interactive forms with WPForms and Bit Form.','Developed and maintained e-learning platforms using Tutor LMS, ensuring seamless course delivery and management.'];

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