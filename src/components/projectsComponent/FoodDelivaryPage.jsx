
import React from 'react'
import github from '/src/assets/github.svg'
import shareicon from '/src/assets/share.svg'
const FoodDelivaryPage = (props) => {
  return (
    <div className={'w-[80%] '}>
      <h1 className={'text-2xl font-normal mb-2'}>Food Delivery</h1>

      <p className='text-sm font-normal'> A modern and sleek food delivery website designed using HTML <br /> and CSS. This website offers a seamless user experience with <br /> sections for navigation, restaurant listings, ordering instructions, <br />client testimonials, and newsletter subscription. The design is <br /> responsive, ensuring optimal viewing on all devices.</p>

      <hr className="h-[1.5px] my-[12px] bg-gray-900" />

      <div className=''>
        <ul className={'text-sm font-normal flex flex-row gap-2.5 mb-2 '}>
          <li className=''>HTML</li>
          <li> CSS</li>

        </ul>
        <div className={'flex flex-row  gap-1.5 text-end'}>
          <a href="https://github.com/MirArfan/Food-Delivery" target="_blank" rel="noopener noreferrer">

            <img className='w-[15px] h-[17px] cursor-pointer' src={github} alt="github icon" />
          </a>
          
          <img className='w-[15px] h-[16px] cursor-pointer' src={shareicon} alt="github icon" />
        </div>
      </div>
    </div>
  )
}

export default FoodDelivaryPage