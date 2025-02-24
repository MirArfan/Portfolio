import React, { useState } from 'react'
import class_1_certicicate from '/src/assets/certificate/class-1-certificate.jpg';
import class_1_price from '/src/assets/certificate/class-1.jpg';
import class_2_certicicate from '/src/assets/certificate/class-2-certificate.jpg';
import class_2_price from '/src/assets/certificate/class-2.jpg';
import class_3_certicicate from '/src/assets/certificate/class-3-certificate.jpg';
// import class_1_price from '/src/assets/certificate/class-1.jpg';
import class_5_certicicate from '/src/assets/certificate/class-5-certificate.jpg';
import class_5_price from '/src/assets/certificate/class-5.jpg';
import class_5_psc_marks from '/src/assets/certificate/class-5-result-marks.jpg';



const achievements = [
    {
      title: "KAF Gold Medal Scholarship (Class 1)",
      description: "Awarded by Kindergarten Association Fatickchari for outstanding performance in the scholarship exam.",
      grade: "General-grade",
      date: "2005",
      certificate: class_1_certicicate, // Replace with your certificate image
      prize: class_1_price, // Replace with your prize image
    },
    {
      title: "KAF Gold Medal Scholarship (Class 2)",
      description: "Awarded by Kindergarten Association Fatickchari for achieving General-grade in the scholarship exam.",
      grade: "General-grade",
      date: "2006",
      certificate: class_2_certicicate, // Replace with your certificate image
      prize: class_2_price, // Replace with your prize image
    },
    {
      title: "KAF Gold Medal Scholarship (Class 3)",
      description: "Awarded by Kindergarten Association Fatickchari for outstanding performance in the scholarship exam.",
      grade: "General-grade",
      date: "2007",
      certificate: class_3_certicicate, // Replace with your certificate image
      prize: "/path-to-class3-prize.jpg", // Replace with your prize image
    },
    {
      title: "KAF Gold Medal Scholarship (Class 5)",
      description: "Awarded by Kindergarten Association Fatickchari for achieving Talent-grade in the scholarship exam.",
      grade: "Talent",
      date: "2009",
      certificate: class_5_certicicate, // Replace with your certificate image
      prize: class_5_price, // Replace with your prize image
    },
  ];





const KgSchool = () => {

     const [selectedImage, setSelectedImage] = useState(null);
    
      const openImage = (image) => {
        setSelectedImage(image);
      };
    
      const closeImage = () => {
        setSelectedImage(null);
      };



  return (
    <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-12 px-6 rounded-xl shadow-lg">
      <div className="container mx-auto px-40 mt-32">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
      Celebrating Milestones: KAF Gold Medal Scholarship
    </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className=" hover:shadow-xl duration-300 text-center  bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-600 cursor-pointer transition-transform">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{achievement.title}</h3>
              <p className="text-gray-600 mb-4">{achievement.description}</p>
              <p className="text-gray-600"><strong>Grade:</strong><span className='text-blue-700 font-semibold'> {achievement.grade}</span></p>
              <p className="text-gray-600"><strong>Date:</strong> {achievement.date}</p>
              <div className="mt-4">
                <img
                  src={achievement.certificate}
                  alt={`Certificate for ${achievement.title}`}
                  className="w-full h-48 object-cover rounded-lg mb-2 cursor-pointer"
                  onClick={() => openImage(achievement.certificate)}
                />
                <img
                  src={achievement.prize}
                  alt={`Prize for ${achievement.title}`}
                  className="w-full h-48 object-cover rounded-lg cursor-pointer"
                  onClick={() => openImage(achievement.prize)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full-Size Image */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeImage}>
            <div className="relative max-w-4xl w-full p-4">
              <img
                src={selectedImage}
                alt="Full Size"
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                onClick={closeImage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default KgSchool