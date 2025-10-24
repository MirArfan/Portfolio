import React from 'react';
import TrainingSummary from './TrainingSummary';
import TrainingDetails from './TrainingDetails';


const ExperienceCardTraining = ({ flexdir, title, company, duration, details, link }) => {
  let aligndir = "text-end";
  if (flexdir === "flex-row-reverse") aligndir = "text-start";

  return (
    <div className={`flex mt-[50px] justify-between w-[70vw] ${flexdir}`}>
      <TrainingSummary aligndir={aligndir} title={title} company={company} duration={duration} link={link}/>
      <div className="w-[1px] bg-gray-800" />
      <TrainingDetails details={details} />
    </div>
  );
};

export default ExperienceCardTraining;
