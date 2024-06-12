import React from 'react'
import github from '/src/assets/github.svg'
import shareicon from '/src/assets/share.svg'
const SimpleDomProject = (props) => {
  return (
    <div className={'w-[80%] '}>
      <h1 className={'text-2xl font-normal mb-2'}>Simple Dom Project</h1>

      <p className='text-sm font-normal'>My DOM project is a dynamic web application showcasing <br /> various functionalities powered by JavaScript, HTML, and CSS. <br /> It includes features such as an age calculator, basic calculator,<br /> music player, notes app, etc This project highlights the versatility <br /> of the Document Object Model (DOM) while providing users with <br /> a seamless and engaging experience.</p>

      <hr className="h-[1.5px] my-[12px] bg-gray-900" />

      <div className=''>
        <ul className={'text-sm font-normal flex flex-row gap-2.5 mb-2 '}>
          <li className=''>HTML</li>
          <li> CSS</li>
          <li>JS</li>

        </ul>
        <div className={'flex flex-row  gap-1.5 text-end'}>
          <a href="https://github.com/MirArfan/Dom-projects" target="_blank" rel="noopener noreferrer">

            <img className='w-[15px] h-[17px] cursor-pointer' src={github} alt="github icon" />
          </a>
          
          <img className='w-[15px] h-[16px] cursor-pointer' src={shareicon} alt="github icon" />
        </div>
      </div>
    </div>
  )
}

export default SimpleDomProject

