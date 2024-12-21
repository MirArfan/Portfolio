import React from 'react'
import github from '/src/assets/github.svg'
import shareicon from '/src/assets/share.svg'

const Portfolio = (props) => {
  return (
    <div className={'w-[50%] '}>

      <h1 className={'text-3xl font-normal mb-2 '}>Food Ordering App</h1>
      <p className='text-base font-normal '> The Food Ordering app is a full-stack platform for browsing, ordering, and managing food items. It includes user authentication, a shopping cart, secure Stripe payments, and order tracking. An admin panel allows management of food items and orders, with status updates. The app provides a responsive, user-friendly interface for seamless online food delivery.</p>

      <hr className="h-[1.5px] my-[12px] bg-gray-900 " />

      <div className=''>
        <ul className={'text-sm font-normal flex flex-row gap-2.5 mb-2  ' + props.alignFlex}>
        
          <li>JS</li>
          <li>React</li>
          <li>Tailwind CSS</li>
        </ul>
        <div className={'flex flex-row  gap-1.5 text-end  ' + props.alignFlex}>
        <a href="https://github.com/MirArfan/foods-delivery" target="_blank" rel="noopener noreferrer">
            <img className='w-[15px] h-[17px] cursor-pointer' src={github} alt="github icon" />
          </a>
          <img className='w-[15px] h-[16px] cursor-pointer ' src={shareicon} alt="github icon" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio