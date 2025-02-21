import React from 'react'

const Skill = () => {
  return (
    <section className="py-12 bg-gray-50">
                    <div className="container mx-auto px-16">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Language Skills */}
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-700 mb-4">Languages</h3>
                                <ul className="space-y-2">
                                    <li className="text-gray-600">C</li>
                                    <li className="text-gray-600">C++</li>
                                    <li className="text-gray-600">JavaScript</li>
                                </ul>
                            </div>

                            {/* Framework and Libraries */}
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-700 mb-4">Frameworks & Libraries</h3>
                                <ul className="space-y-2">
                                    <li className="text-gray-600">React</li>
                                    <li className="text-gray-600">Redux</li>
                                    <li className="text-gray-600">Node.js</li>
                                    <li className="text-gray-600">Express.js</li>
                                    <li className="text-gray-600">Koa.js</li>
                                    <li className="text-gray-600">Axios</li>
                                </ul>
                            </div>

                            {/* Databases */}
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-700 mb-4">Databases</h3>
                                <ul className="space-y-2">
                                    <li className="text-gray-600">MySQL</li>
                                    <li className="text-gray-600">MongoDB</li>
                                    <li className="text-gray-600">DynamoDB</li>
                                </ul>
                            </div>

                            {/* Tools */}
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-700 mb-4">Tools</h3>
                                <ul className="space-y-2">
                                    <li className="text-gray-600">HTML</li>
                                    <li className="text-gray-600">CSS</li>
                                    <li className="text-gray-600">Tailwind CSS</li>
                                    <li className="text-gray-600">Git</li>
                                    <li className="text-gray-600">GitHub</li>
                                    <li className="text-gray-600">Figma</li>
                                </ul>
                            </div>

                            {/* Others */}
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-700 mb-4">Others</h3>
                                <ul className="space-y-2">
                                    <li className="text-gray-600">Object-Oriented Programming (OOP)</li>
                                    <li className="text-gray-600">REST API</li>
                                    <li className="text-gray-600">JSON Web Token (JWT)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
  )
}

export default Skill