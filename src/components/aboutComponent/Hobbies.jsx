import React from 'react'
import cricket_team from '/src/assets/provati-club-2015-cricket.jpg';
import { FaFutbol, FaTableTennis, FaCamera } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";

const hobbies = [
  {
    id: 1,
    name: "Cricket",
    icon: <MdSportsCricket size={40} className="text-blue-500" />, 
    description: " Cricket is my favorite sport. I enjoy both playing and watching matches, and it teaches me teamwork and strategy."
  },
  {
    id: 2,
    name: "Football",
    icon: <FaFutbol size={40} className="text-green-500" />, 
    description: "I love playing football with friends. It’s a great way to stay active and build camaraderie." 
  },
  {
    id: 3,
    name: "Table Tennis",
    icon: <FaTableTennis size={40} className="text-red-500" />, 
    description: "Table Tennis helps me stay active and improve reflexes." 
  },
  {
    id: 4,
    name: "Photography",
    icon: <FaCamera size={40} className="text-violet-500" />, 
    description: "I have a passion for photography, especially capturing landscapes and candid moments." 
  }
];

const images = [
  "/src/assets/sky_with_clouds.jpeg",
  "/src/assets/IMG_20200129_152354.jpg",
  "/src/assets/kid.jpg",
  "/src/assets/pond_flowers.jpg",
  "/src/assets/rainny_day_at_university.jpg",
  "/src/assets/rivers.jpg",
  "/src/assets/treess_with_pond.jpg",
  "/src/assets/water_with_glass.jpg",
  "/src/assets/a_beautiful_home.jpg",
  "/src/assets/a_flower_with_green_background.jpg",
  "/src/assets/drops1.jpg",
  "/src/assets/drops2.jpg",
  "/src/assets/flower_with_sun.jpg",
];


const Hobbies = () => {
  return (
    <div className="container mx-6 p-6 ml-32 mr-32">
      {/* Hobbies Section */}
      
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Hobbies & Interests</h2>
      <div className="grid md:grid-cols-2 gap-6 px-32">
        {hobbies.map((hobby) => (
          <div
            key={hobby.id}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform"
          >
            {hobby.icon}
            <h3 className="text-xl font-semibold mt-2">{hobby.name}</h3>
            <p className="text-gray-600 text-center mt-2">{hobby.description}</p>
          </div>
        ))}
      </div>

      {/* Photography Section */}
      {/* <div className="py-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">📸 Photography</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto grid-flow-row-dense">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto object-cover row-span-2  "
              />
            </div>
          ))}
        </div>
      </div>
    </div> */}
      
    </div>
  )
}

export default Hobbies