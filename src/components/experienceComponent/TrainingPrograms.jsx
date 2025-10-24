import React from 'react';
import ExperienceCardTraining from './ExperienceCardTraining';
import SectionHeader from '../globalComponent/SectionHeader';

const TrainingPrograms = () => {
  const springRainDetails = [
    "Successfully completed a 3-month full-stack training focused on JavaScript, Node.js, React.js, and DynamoDB.",
    "Learned version control and collaboration through Git and ClickUp.",
    "Earned a professional certificate emphasizing self-paced learning and web development expertise."
  ];

  const innovXDetails = [
    "Completed a 3-month intensive full-stack training at Business Automation Ltd.",
    "Developed hands-on projects using PHP, Laravel, MySQL, and JavaScript.",
    "Gained exposure to SQA fundamentals and modern development workflow."
  ];

  return (
    <div className="flex flex-col items-center mt-20">
      {/* <h2 className="text-4xl   mb-10">Training Programs</h2> */}
      <SectionHeader sectionHeading="Training Programs"/>

      <ExperienceCardTraining
        flexdir="flex-row"
        title="Career Development Program"
        company="Spring Rain Pvt Ltd"
        duration="February 2024 - June 2024"
        details={springRainDetails}
        link="https://drive.google.com/drive/u/3/folders/1B11ZrGtezbvC0R3yDfUvbS7j7_Nya5t0"
      />

      <ExperienceCardTraining
        flexdir="flex-row-reverse"
        title="Next-Gen InnovX Developer Training Program"
        company="Business Automation Ltd"
        duration="July 2025 - October 2025"
        details={innovXDetails}
        link="https://drive.google.com/drive/u/3/folders/1B11ZrGtezbvC0R3yDfUvbS7j7_Nya5t0"
      />
    </div>
  );
};

export default TrainingPrograms;
