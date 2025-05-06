import React from 'react'
import github from '/src/assets/github.svg'
import shareicon from '/src/assets/share.svg'

const Juris_meet_detalis = (props) => {
  return (
    <div className={'w-[50%] ' + props.aligndir}>

      <h1 className="text-3xl font-normal mb-2">Juris Meet</h1>

      <p className="text-base font-normal">
        Juris Meet is a full-stack lawyer appointment system designed for streamlined legal consultations. It features three-level user authentication (Client, Lawyer, Admin), allowing secure role-based access and functionality. Real-time dashboards provide up-to-date appointment and earnings data. The system also integrates bKash online payments through SSLCommerz to securely handle appointment fees. An intuitive Admin Panel enables lawyer management, earnings monitoring, and efficient appointment control.
      </p>

      <hr className="h-[1.5px] my-[12px] bg-gray-900" />

      <div className="">
        <ul className={'text-sm font-normal flex flex-row gap-2.5 mb-2 ' + props.alignFlex}>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Axios</li>
          <li>SSLCommerz</li>
        </ul>
        <div className={'flex flex-row gap-1.5 text-end ' + props.alignFlex}>
          <a href="https://github.com/MirArfan/Juris_Meet" target="_blank" rel="noopener noreferrer">
            <img className='w-[15px] h-[17px] cursor-pointer' src={github} alt="github icon" />
          </a>
          <img className='w-[15px] h-[16px] cursor-pointer' src={shareicon} alt="share icon" />
        </div>
      </div>
    </div>
  )
}

export default Juris_meet_detalis
