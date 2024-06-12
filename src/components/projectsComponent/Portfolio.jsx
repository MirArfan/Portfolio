import React from 'react'
import github from '/src/assets/github.svg'
import shareicon from '/src/assets/share.svg'

const Portfolio = (props) => {
  return (
    <div className={'w-[50%] ' + props.aligndir}>

      <h1 className={'text-3xl font-normal mb-2 '}>Things App</h1>
      <p className='text-base font-normal '> This portfolio website, built with React and styled using Tailwind CSS, elegantly presents the owner's skills, projects, experiences, and contact information. Seamlessly divided into distinct sections, it offers visitors a comprehensive overview while showcasing the creator's creativity and professionalism. </p>

      <hr className="h-[1.5px] my-[12px] bg-gray-900 " />

      <div className=''>
        <ul className={'text-sm font-normal flex flex-row gap-2.5 mb-2  ' + props.alignFlex}>
        
          <li>JS</li>
          <li>React</li>
          <li>Tailwind CSS</li>
        </ul>
        <div className={'flex flex-row  gap-1.5 text-end  ' + props.alignFlex}>
        <a href="https://github.com/MirArfan/Portfolio" target="_blank" rel="noopener noreferrer">
            <img className='w-[15px] h-[17px] cursor-pointer' src={github} alt="github icon" />
          </a>
          <img className='w-[15px] h-[16px] cursor-pointer ' src={shareicon} alt="github icon" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio