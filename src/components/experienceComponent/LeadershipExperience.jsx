import React from "react";

const LeadershipExperience = () => {
  const experiences = [
    {
      title: "Assistant IT Secretary",
      organization: "Fatikchhari Forum, IIUC",
      organizationLink: "https://web.facebook.com/fatickchariforumiiuc",
      duration: "2022 - 2023",
      contributions: [
        "Actively supported the organization and coordination of major forum events such as sports day, annual picnic, and Iftar gatherings, ensuring seamless event flow and high participant engagement",
        "Managed technical and on-site logistics during events, contributing to efficient setup, smooth operation, and a positive experience for all attendees.",
      ],
    },
    {
      title: "Annual Sports Team Captain",
      organization: "Kanchan Nagar Multilateral High School",
      duration: "School",
      contributions: [
        "Served as captain for the school's annual sports event, which included activities such as drawing, singing, debate, race, long jump, cricket tournament, drama, and cycle race.",
        "Led the team to the runner-up position in the cricket tournament final and supported other participants in various competitions.",
        "Fostered teamwork and a spirit of sportsmanship across a diverse range of events, encouraging active participation and collaboration.",
      ],
    },
  ];

  return (
    <div id="leadership-experience" className="flex flex-col items-center py-12 mt-[100px] w-[70%]">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Leadership Experience</h2>
      <hr className="h-[1px] w-full bg-gray-900 border-0 dark:bg-gray-900 mt-[10px] mb-[25px]" />

      <div className="w-full flex flex-col lg:flex-row lg:space-x-8 space-y-6 lg:space-y-0 items-stretch">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col flex-1 text-left hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800">{experience.title}</h3>
            <p className="text-[18px] text-gray-600 mt-1">
              <strong>Organization:</strong>{" "}
              {experience.organizationLink ? (
                <a
                  href={experience.organizationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {experience.organization}
                </a>
              ) : (
                experience.organization
              )}
            </p>
            <p className="text-[16px] text-gray-600 mt-1">
              <strong>Duration:</strong> {experience.duration}
            </p>
            <ul className="list-disc mt-4 pl-5 space-y-2">
              {experience.contributions.map((contribution, idx) => (
                <li key={idx} className="text-[16px] text-gray-600">
                  {contribution}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipExperience;
