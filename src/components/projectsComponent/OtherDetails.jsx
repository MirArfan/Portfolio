import React from 'react'
import github from '/src/assets/github.svg'
import shareicon from '/src/assets/share.svg'
const OtherDetails = (props) => {
  return (
    <div className={'w-[80%] '}>
      <h1 className={'text-2xl font-normal mb-2'}>Amazon homepage</h1>

      <p className='text-sm font-normal'> A responsive replica of Amazon's homepage using HTML and CSS.<br /> Mimics the layout and design  elements of the original, including <br /> the header with search bar and navigation, featured products, and <br /> footer links. </p>

      <hr className="h-[1.5px] my-[12px] bg-gray-900" />

      <div className=''>
        <ul className={'text-sm font-normal flex flex-row gap-2.5 mb-2 '}>
          <li className=''>HTML</li>
          <li> CSS</li>

        </ul>
        <div className={'flex flex-row  gap-1.5 text-end'}>
          <a href="https://github.com/MirArfan/HTML-CSS-project/tree/main/Amazon%20web%20pages" target="_blank" rel="noopener noreferrer">

            <img className='w-[15px] h-[17px] cursor-pointer' src={github} alt="github icon" />
          </a>

          <img className='w-[15px] h-[16px] cursor-pointer' src={shareicon} alt="github icon" />
        </div>
      </div>
    </div>
  )
}

export default OtherDetails