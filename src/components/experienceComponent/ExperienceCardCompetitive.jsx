import React from 'react';
import codeforcesLogo from "../../assets/2944796.png";
import leetcodeLogo from "../../assets/leetcode.png";
import codechefLogo from "../../assets/codechef.png";
import codingninjaslogo from "../../assets/codingninjas.png";
const ExperienceCardCompetitive = (props) => {
    let aligndir = "text";
    if (props.flexdir === "flex-row-reverse") { aligndir = "text-center" }

    return (
        <div className={'flex mt-[150px] justify-between w-[70vw] ' + props.flexdir}>
            {/* Experience Summary */}
            <div className='w-[100%] sm:w-[100%] flex flex-col justify-center'>
                <p className={'text-[30px] font-semibold text-center ' + aligndir}>Competitive Programmer</p>
                <hr className="h-[1px] w-full bg-gray-900 border-0 dark:bg-gray-900 mt-[10px] mb-[12px]" />
                {/* <p className={'text-[16px] font-medium ' + aligndir}>Achievements:</p> */}
                <ul className="list-disc text-[17px] mt-3 mb-10">
                    <li>Solved over 1300+ competitive programming problems on platforms like Codeforces, LightOJ, CodeNinjas, AtCoder, and more.</li>
                    <li>Participated in numerous programming contests on platforms such as Codeforces, LeetCode, CodeChef, and HackerRank to enhance problem-solving skills.</li>
                </ul>
          

            {/* Experience Details */}
            <div className="w-[100%] sm:w-[100%] mt-6 sm:mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
                    {/* Codeforces */}
                    <div className="flex flex-col items-center">
                        <a href="https://codeforces.com/profile/Raahaat" target="_blank" rel="noopener noreferrer">
                            <img src={codeforcesLogo} alt="Codeforces" className="w-[50px] h-[50px]" />
                            
                        </a>
                        <span className="mt-2 text-[16px]">Raahaat</span>
                        <ul className="list-none mt-2 text-[14px] text-center">
                            <li><strong>Max Rating:</strong> 953</li>
                            <li><strong>Contests:</strong> 36+</li>
                            <li><strong>Problems Solved:</strong> 860+</li>
                        </ul>
                    </div>
                    {/* LeetCode */}
                    <div className="flex flex-col items-center">
                        <a href="https://leetcode.com/u/raahaat/" target="_blank" rel="noopener noreferrer">
                            <img src={leetcodeLogo} alt="LeetCode" className="w-[50px] h-[50px]" />
                        </a>
                        <span className="mt-2 text-[16px]">Raahaat</span>
                        <ul className="list-none mt-2 text-[14px] text-center">
                            <li><strong>Max Rating:</strong> 1630</li>
                            <li><strong>Contests:</strong> 07+</li>
                            <li><strong>Problems Solved:</strong> 160+</li>
                        </ul>
                    </div>
                    {/* CodeChef */}
                    <div className="flex flex-col items-center">
                        <a href="https://www.codechef.com/users/raahaat" target="_blank" rel="noopener noreferrer">
                            <img src={codechefLogo} alt="CodeChef" className="w-[50px] h-[50px]" />
                        </a>
                        <span className="mt-2 text-[16px]">Raahaat</span>
                        <ul className="list-none mt-2 text-[14px] text-center">
                            <li><strong>Max Rating:</strong>1438 (2*)</li>
                            <li><strong>Contests:</strong> 18+</li>
                            <li><strong>Problems Solved:</strong> 60+</li>
                        </ul>
                    </div>

                     {/* coding ninjas */}
                     <div className="flex flex-col items-center">
                        <a href="https://www.naukri.com/code360/profile/b9169ac9-37b4-413f-946a-0c076823388f" target="_blank" rel="noopener noreferrer">
                            <img src={codingninjaslogo} alt="CodeChef" className="w-[50px] h-[50px]" />
                        </a>
                        <span className="mt-2 text-[16px]">Raahaat</span>
                        <ul className="list-none mt-2 text-[14px] text-center">
                            {/* <li><strong>Max Rating:</strong>1438 (2*)</li> */}
                            <li><strong>Contests:</strong> 0</li>
                            <li><strong>Problems Solved:</strong> 135+</li>
                        </ul>
                    </div>
                    
                   
                </div>
            </div>
            </div>
        </div>
    );
};

export default ExperienceCardCompetitive;
