import React from "react";

const AchievementsSection = () => {
  const achievements = [
    {
      contest: "Asia Dhaka Regional Site Online Preliminary Contest 2020",
      rank: "1151th",
      team: "IIUC_Bug Is FAT",
      link: "https://icpc.global/regionals/finder/Dhaka-Preliminary-2021/standings",
    },
    {
      contest: "Asia Dhaka Regional Site Online Preliminary Contest 2021",
      rank: "647th",
      team: "BandOfMisfits",
      link: "#",
    },
    {
      contest: "IIUC Intra-University Programming Contest Autumn 2022",
      rank: "40th",
      team: "Error_Found",
      link: "https://toph.co/contests/training/x2c4mne/standings",
    },
    {
      contest: "CSE FEST 2022 Intra Department Programming Contest",
      rank: "70th",
      team: "C191054_Arfan",
      link: "https://toph.co/contests/training/k64abul",
    },
    {
      contest: "IIUC Intra University Programming Contest (Senior) 2022",
      rank: "38th",
      team: "C191054_Arfan",
      link: "https://toph.co/contests/training/2hypxjc/standings",
    },
  ];

  return (
    <div id="achievements" className="flex flex-col items-center py-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-32">Achievements</h2>
      <hr className="h-[1px] w-[70%] bg-gray-900 border-0 mt-[10px] mb-[25px]" />
      <div className="w-[90%] md:w-[80%] lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <a
            key={index}
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 rounded-lg p-6 w-full flex flex-col text-left hover:bg-blue-50"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {achievement.contest}
            </h3>
            <p className="text-sm text-gray-700 mt-2">
              <strong>Global Rank:</strong> {achievement.rank}
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Team Name:</strong> {achievement.team}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
