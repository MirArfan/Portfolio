import React from 'react'

const Handwritting = () => {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-12 px-6 rounded-xl shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          ✍️ সুন্দর হাতের লিখা প্রতিযোগিতা
        </h2>

        <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-600">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">
            School Handwriting Competition Achievements
          </h3>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-medium">Achievement:</span> Won <strong>1st Prize</strong> three times in school-level সুন্দর হাতের লিখা প্রতিযোগিতা.
            </p>
            <p>
              <span className="font-medium">Organization:</span> Kanchan Nagar Multilateral High School
            </p>
            <p>
              <span className="font-medium">Years:</span> 2010 to 2015
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              About the Competition:
            </h4>
            <p className="text-gray-600">
              সুন্দর হাতের লিখা প্রতিযোগিতা (Beautiful Handwriting Competition) was an annual event at my school that encouraged students to develop neat and artistic handwriting. Winning the competition three times in a row was a proud achievement and a testament to my dedication to improving my skills.
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              "Handwriting is the mirror of one's personality and patience. It reflects the beauty of discipline and creativity."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Handwritting