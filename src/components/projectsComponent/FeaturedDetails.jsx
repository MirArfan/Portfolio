import React from 'react'
import github from '/src/assets/github.svg'
import shareicon from '/src/assets/share.svg'

const FeaturedDetails = (props) => {
  return (
    <div className={'w-[50%] ' + props.aligndir}>

      <h1 className={'text-3xl font-normal mb-2 '}>Things app</h1>
      <p className='text-base font-normal '> The Things app is a to-do list and task management tool designed to enhance productivity. It allows users to create, edit, update, and delete tasks effortlessly. The app supports organization through tagging and the creation of subtasks, making task categorization and management straightforward. Additionally, Things enables effective time management by allowing users to schedule tasks with deadlines, manage upcoming and daily tasks, and utilize a trash section for removed items. </p>

      <hr className="h-[1.5px] my-[12px] bg-gray-900 " />

      <div className=''>
        <ul className={'text-sm font-normal flex flex-row gap-2.5 mb-2  ' + props.alignFlex}>
          <li>JS</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>things</li>
        </ul>
        <div className={'flex flex-row  gap-1.5 text-end  ' + props.alignFlex}>
        <a href="https://github.com/MirArfan/Things-clone" target="_blank" rel="noopener noreferrer">
            <img className='w-[15px] h-[17px] cursor-pointer' src={github} alt="github icon" />
          </a>
          <img className='w-[15px] h-[16px] cursor-pointer ' src={shareicon} alt="github icon" />
        </div>
      </div>
    </div>
  )
}

export default FeaturedDetails