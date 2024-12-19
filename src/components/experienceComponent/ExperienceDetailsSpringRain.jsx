import React from 'react';

const ExperienceDetailsSpringRain = () => {
    const data = [
        "Gained hands-on experience with modern web technologies, including JavaScript, Node.js, React.js, and DynamoDB, through a structured 3-month program.",
        "Enhanced project management and collaboration skills using tools like Git for version control and ClickUp for task management.",
        "Successfully completed the program with a focus on self-paced learning, earning a certificate of achievement for web development expertise."
    ];

    return (
        <div className='w-[75%]'>
            <ul>
                {
                    data.map((line, index) => 
                    (<li key={index} className='list-disc text-[17px] text-justify'>{line}</li>))
                }
            </ul>
        </div>
    );
};

export default ExperienceDetailsSpringRain;
