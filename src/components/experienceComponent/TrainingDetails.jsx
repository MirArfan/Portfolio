import React from 'react';

const TrainingDetails = ({ details }) => {
  return (
    <div className="w-[75%]">
      <ul className="list-disc pl-5 space-y-2">
        {details.map((line, index) => (
          <li key={index} className="text-[17px] text-justify text-gray-800 leading-relaxed">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingDetails;
