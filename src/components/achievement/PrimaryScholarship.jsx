import React from 'react';
import primay_marks from '/src/assets/certificate/class-5-result-marks.jpg';

const PrimaryScholarship = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-12 px-6 rounded-xl shadow-lg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          🏆 Government's Primary Scholarship (General)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image Section */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-600 cursor-pointer transition-transform">
            <img
              src={primay_marks} // Replace with your certificate image
              alt="Primary Scholarship Certificate"
              className="rounded-lg shadow-sm w-full"
            />
            <p className="text-center text-gray-600 mt-2">
              প্রাথমিক শিক্ষা সমাপনী পরীক্ষা ২০০৯
            </p>
          </div>

          {/* Details Section */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-600">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              প্রাথমিক শিক্ষা সমাপনী পরীক্ষা ২০০৯
            </h3>

            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-medium">Name:</span> Mir Arfan Uddin
              </p>
              <p>
                <span className="font-medium">Roll Number:</span> 2863
              </p>
              <p>
                <span className="font-medium">School:</span> Kanchan Nagar Mohan Raja Reg. Primary School
              </p>
              <p>
                <span className="font-medium">Division & District:</span> Chittagong Division, Chittagong District, Fatikchhari Upazila
              </p>
              <p>
                <span className="font-medium">Achievement:</span> Awarded the <strong>Primary Scholarship</strong> for outstanding performance in the প্রাথমিক শিক্ষা সমাপনী পরীক্ষা held in 2009.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                About the Achievement:
              </h4>
              <p className="text-gray-600">
                The প্রাথমিক শিক্ষা সমাপনী পরীক্ষা (Primary Education Completion Examination) is a nationwide exam in Bangladesh. Securing the <strong>Primary Scholarship</strong> was a significant milestone in my academic journey, reflecting my dedication and hard work during my primary education.
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 italic">
                "This scholarship was a testament to my hard work and dedication during my primary education. It motivated me to continue striving for excellence in my academic and professional life."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrimaryScholarship;