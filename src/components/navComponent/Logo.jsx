import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/src/assets/Arfan-logo1.png';


const Logo = () => {
    return (
        <div>
            <NavLink to='/Portfolio/' className="flex items-center space-x-3 rtl:space-x-reverse">
                {/* <img 
                    src={logo}  // Replace with your actual logo path
                    className="h-[60px] w-[140px] object-contain" // Adjust height/width as needed
                    alt="Logo"
                /> */}
                <span className="text-2xl font-bold italic bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text tracking-wide transition duration-300 hover:opacity-80">
                    Mir Arfan Uddin
                </span>
            </NavLink>
        </div>
    )
}

export default Logo