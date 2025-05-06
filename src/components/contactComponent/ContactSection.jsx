import React, { useState } from 'react';
import github from '/src/assets/github.svg';
import shareicon from '/src/assets/share.svg';
import linkedin from '/src/assets/linkedin.png';
import emailIcon from '/src/assets/gmail.png';
import youtube from '/src/assets/youtube.png';
import SectionHeader from '../globalComponent/SectionHeader';
import ContactForm from './ContactForm';

const ContactSection = () => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    return (
        <div id="contact" className="flex flex-col items-center pb-[120px] pt-[120px] bg-white">
            <SectionHeader sectionHeading="Contact" />

            <div className="text-center w-[90%] md:w-[60%] lg:w-[35%]">
                <p className="mt-16 text-base font-normal text-gray-800">
                    I am currently seeking employment, and I would appreciate it if you could contact me with any available job opportunities.
                </p>

                <button
                    onClick={toggle}
                    className="text-base font-normal border-2 border-gray-600 rounded-md py-2 px-4 mt-12 hover:bg-gray-800 hover:text-white transition"
                >
                    Write Message
                </button>

                {show && <ContactForm />}

                <div className="flex flex-wrap justify-center gap-4 mt-20">
                    <a href="mir.arfan.iiuc9@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img className="w-6 h-6 hover:scale-110 transition" src={emailIcon} alt="Email" />
                    </a>
                    <a href="https://github.com/MirArfan" target="_blank" rel="noopener noreferrer">
                        <img className="w-6 h-6 hover:scale-110 transition" src={github} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/mir-arfan-uddin/" target="_blank" rel="noopener noreferrer">
                        <img className="w-6 h-6 hover:scale-110 transition" src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://www.youtube.com/@mirrahat9375" target="_blank" rel="noopener noreferrer">
                        <img className="w-6 h-6 hover:scale-110 transition" src={youtube} alt="YouTube" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
