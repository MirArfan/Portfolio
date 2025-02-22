import React, { useState } from 'react'
import onkur_certificate from '/src/assets/certificate/onkur-certificate.jpg';
import onkur_price from '/src/assets/certificate/onkur.jpg';



const Ankur = () => {

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
    <section className="bg-blue-50 py-12 px-6 rounded-xl shadow-lg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 mt-16">
        Celebrating First Place in the 2014 Quiz Competition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Certificate and Price Images */}
          <div className="flex flex-col space-y-6">
            {/* Certificate Image */}
            <div
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-600 cursor-pointer transition-transform"
              onClick={() => openModal(onkur_certificate)} // Replace with your certificate image path
            >
              <img
                src={onkur_certificate} // Replace with your certificate image path
                alt="Ankur Certificate"
                className="rounded-lg shadow-sm w-full"
              />
            </div>
          </div>

          {/* Certificate Details */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-600">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              Awarded by: Ankur (Social, Cultural, Educational & Sports Organization)
            </h3>

            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-medium">Recipient:</span> Mir Arfan Uddin
              </p>
              <p>
                <span className="font-medium">Father's Name:</span> Mir Shahidullah
              </p>
              <p>
                <span className="font-medium">Mother's Name:</span> Rokeya Begum
              </p>
              <p>
                <span className="font-medium">School:</span> Kanchan Nagar Multilateral High School
              </p>
              <p>
                <span className="font-medium">Achievement:</span> Secured 1st Position in the Quiz Competition held in 2014.
              </p>
             
            </div>

            <div className="mt-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                About Ankur:
              </h4>
              <p className="text-gray-600">
                Ankur, established in 2011, is a local organization dedicated to fostering talent, moral values, and social welfare. Their mission is to promote humanity, justice, and resistance against injustice through cultural, educational, and sports activities.
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

export default Ankur