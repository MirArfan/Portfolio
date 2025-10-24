import React from 'react';

const TrainingSummary = ({ aligndir, title, company, duration, link }) => {
  return (
    <div className="w-[15vw] flex flex-col justify-center">
      {/* Title as clickable link */}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-[24px] font-3xl  hover:text-indigo-800 transition duration-200 ${aligndir}`}
        >
          {title}
        </a>
      ) : (
        <p className={`text-[24px] font-semibold text-indigo-600 ${aligndir}`}>{title}</p>
      )}
      <p className={`text-[16px] text-gray-700 ${aligndir}`}>{company}</p>
      <hr className="h-[1px] w-full bg-gray-900 border-0 mt-[10px] mb-[12px]" />
      <p className={`text-[14px] text-gray-600 ${aligndir}`}>{duration}</p>
    </div>
  );
};

export default TrainingSummary;
