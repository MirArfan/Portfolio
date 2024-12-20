import React from "react";

const AchievementsSection = () => {
  const achievements = [
    {
      contest: "Asia Dhaka Regional Site Online Preliminary Contest 2020",
      rank: "1151th",
      team: "IIUC_Bug Is FAT",
      link: "https://example.com/contest/2020", // Replace with the actual contest link
    },
    {
      contest: "Asia Dhaka Regional Site Online Preliminary Contest 2021",
      rank: "647th",
      team: "BandOfMisfits",
      link: "https://example.com/contest/2021", // Replace with the actual contest link
    },
    {
      contest: "IIUC Intra-University Programming Contest Autumn 2022",
      rank: "40th",
      team: "Error_Found",
      link: "https://example.com/contest/2022", // Replace with the actual contest link
    },
  ];

  return (
    <div id="achievements" className="flex flex-col items-center py-12 bg-white-50">
      <h2 className="text-3xl font-bold text-back-800 mb-6 mt-32">Achievements</h2>
      <hr className="h-[1px] w-[70%] bg-gray-900 border-0 dark:bg-gray-900 mt-[10px] mb-[25px]" />
      <div className="w-[70%] flex flex-row items-center space-x-6">
        {achievements.map((achievement, index) => (
          <a
            key={index}
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-lg rounded-lg p-6 w-full flex flex-col text-left hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {achievement.contest}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Global Rank:</strong> {achievement.rank}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Team Name:</strong> {achievement.team}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
