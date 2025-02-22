import React from 'react'
import primay_marks from '/src/assets/certificate/class-5-result-marks.jpg';



const PrimaryScholarship = () => {
  return (
    <section className="py-12 bg-gray-50 mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-20 text-gray-800">
        Government's Primary Scholarship (General)
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={primay_marks} // Replace with your certificate image
                alt="Primary Scholarship Certificate"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              প্রাথমিক শিক্ষা সমাপনী পরীক্ষা ২০০৯
              </h3>
              <p className="text-gray-600 mb-4">
                I was awarded the <strong>Primary Scholarship</strong> for my outstanding performance in the <strong>প্রাথমিক শিক্ষা সমাপনী পরীক্ষা</strong> held in 2009. This achievement was a significant milestone in my academic journey.
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Name:</strong> Mir Arfan Uddin
                </p>
                <p className="text-gray-700">
                  <strong>Roll Number:</strong> 2863
                </p>
                <p className="text-gray-700">
                  <strong>School:</strong> Kanchan Nagar Mohan Raja Reg. Primary School
                </p>
                <p className="text-gray-700">
                  <strong>Division & District:</strong> Chittagong Division, Chittagong District, Fatikchhari Upazila
                </p>
              </div>
              <p className="text-gray-600 mt-4">
                This scholarship was a testament to my hard work and dedication during my primary education. It motivated me to continue striving for excellence in my academic and professional life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrimaryScholarship