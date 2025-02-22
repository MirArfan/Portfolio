import React, { useState } from 'react'
import footbool from '/src/assets/football-man-of-the-match.jpg';
import cricket from '/src/assets/school-runer-up.jpg';


const Sports = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Function to open the modal with the selected image
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };
  return (
    <section className="bg-gradient-to-r from-green-100 to-blue-100 py-12 px-6 rounded-xl shadow-lg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          🏏⚽ Sports Achievements
        </h2>

        {/* School Tournament Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* School Tournament Image */}
          <div
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600 cursor-pointer transition-transform"
            onClick={() => openModal(cricket)} // Replace with your image path
          >
            <img
              src={cricket} // Replace with your image path
              alt="School Cricket Tournament"
              className="rounded-lg shadow-sm w-full"
            />
            <p className="text-center text-gray-600 mt-2">
              Runner-up in School Cricket Tournament (2014)
            </p>
          </div>

          {/* School Tournament Details */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-600">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Annual Sports Team Captain
            </h3>

            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-medium">Organization:</span> Kanchan Nagar Multilateral High School
              </p>
              <p>
                <span className="font-medium">Duration:</span> School Years
              </p>
              <p>
                <span className="font-medium">Achievements:</span>
                <ul className="list-disc list-inside mt-2">
                  <li>Led the team to the runner-up position in the school cricket tournament final.</li>
                  <li>Supported and motivated participants in various school competitions.</li>
                </ul>
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                About My Role:
              </h4>
              <p className="text-gray-600">
                As the Sports Team Captain, I was responsible for leading and inspiring my team, strategizing for matches, and ensuring fair play. My leadership helped the team achieve significant milestones, including reaching the finals in cricket.
              </p>
            </div>
          </div>
        </div>

        {/* External Tournament Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* External Tournament Image */}
          <div
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600 cursor-pointer transition-transform order-1"
            onClick={() => openModal(footbool)} // Replace with your image path
          >
            <img
              src={footbool} // Replace with your image path
              alt="প্রভাতী সকার লীগ Football Tournament"
              className="rounded-lg shadow-sm w-full"
            />
            <p className="text-center text-gray-600 mt-2">
              Man of the Match - প্রভাতী সকার লীগ (2014)
            </p>
          </div>

          {/* External Tournament Details */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Football Tournament Achievement
            </h3>

            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-medium">Tournament:</span> প্রভাতী সকার লীগ
              </p>
              <p>
                <span className="font-medium">Achievement:</span> Awarded <strong>Man of the Match</strong> for outstanding performance.
              </p>
              <p>
                <span className="font-medium">Year:</span> 2014
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                About the Tournament:
              </h4>
              <p className="text-gray-600">
                প্রভাতী সকার লীগ was a competitive football tournament where I showcased my skills and teamwork. Being awarded <strong>Man of the Match</strong> was a proud moment and a testament to my dedication to the sport.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Full-Size Image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Full Size"
              className="rounded-lg w-full h-auto"
            />
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
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
    </section>
  )
}

export default Sports