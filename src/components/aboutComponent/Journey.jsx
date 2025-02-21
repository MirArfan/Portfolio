import React from 'react'

const Journey = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">My Journey</h2>

        {/* Timeline Container */}
        <div className="space-y-8 relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>

          {/* Education Section */}
          <div className="flex items-center w-full">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-xl font-semibold text-gray-700">B.Sc. in Computer Science & Engineering</h3>
              <p className="text-gray-600">International Islamic University Chittagong</p>
              <p className="text-sm text-gray-500">Graduated: March 2024</p>
            </div>
            <div className="w-1/2 pl-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <p className="text-gray-700">
                  I completed my B.Sc. in Computer Science and Engineering with a focus on programming, data structures, and algorithms. During my university years, I actively participated in competitive programming, solving over <strong>1300 problems</strong> in online and onsite contests.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Development Section */}
          <div className="flex items-center w-full">
            <div className="w-1/2 pr-8 text-right">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <p className="text-gray-700">
                  After graduation, I completed the <strong>Jump Start Career Program</strong> with Spring Rain Pvt Ltd. This intensive 3-month training enhanced my skills in web technologies, including <strong>JavaScript, Node.js, React.js, AWS Lambda, and DynamoDB</strong>.
                </p>
              </div>
            </div>
            <div className="w-1/2 pl-8">
              <h3 className="text-xl font-semibold text-gray-700">Skills Development</h3>
              <p className="text-gray-600">Spring Rain Pvt Ltd</p>
              <p className="text-sm text-gray-500">2024</p>
            </div>
          </div>

          {/* Internship Section */}
          <div className="flex items-center w-full">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-xl font-semibold text-gray-700">Software Engineer Intern (WordPress)</h3>
              <p className="text-gray-600">Growthly IT</p>
              <p className="text-sm text-gray-500">Nov 2024 - Present</p>
            </div>
            <div className="w-1/2 pl-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <p className="text-gray-700">
                  At Growthly IT, I designed and customized dynamic websites using <strong>Elementor</strong> and integrated <strong>WooCommerce</strong> for e-commerce functionality. I also managed interactive forms with <strong>WPForms</strong> and <strong>Bit Form</strong>, and developed e-learning platforms using <strong>Tutor LMS</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Future Goals Section */}
          <div className="flex items-center w-full">
            <div className="w-1/2 pr-8 text-right">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <p className="text-gray-700">
                  Now, I am eager to apply my technical expertise and creative problem-solving skills at an innovative software company. I am passionate about building scalable, user-friendly applications and continuously learning new technologies.
                </p>
              </div>
            </div>
            <div className="w-1/2 pl-8">
              <h3 className="text-xl font-semibold text-gray-700">Future Goals</h3>
              <p className="text-gray-600">Looking Ahead</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey