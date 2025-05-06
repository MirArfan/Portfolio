import React from "react";
import github from '/src/assets/github.svg';
import shareicon from '/src/assets/share.svg';
import task1 from '/src/assets/task-input-form.png';
import task2 from '/src/assets/task-list.png';

const TaskManagementProject = () => {
  return (
    <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="flex flex-col lg:flex-row gap-12 items-center">


        {/* Project Details */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🧠</span>
            <span className="text-sm font-medium tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              AI ASSISTED PROJECT
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            TaskPilot
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            TaskPilot is a simple and responsive task management application built using HTML, CSS, and JavaScript, with support from Windsurf AI. It allows users to add tasks with a title, description, due date, and priority. Users can view all tasks, filter them by status (Pending, In Progress, Completed), and delete tasks as needed.
          </p>
          
          <div className="mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
          
          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {['HTML', 'CSS', 'JavaScript', 'Windsurf AI'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-indigo-100 hover:text-indigo-800 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/MirArfan/taskpilot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <img className="w-5 h-5" src={github} alt="GitHub" />
              <span className="font-medium">View Code</span>
            </a>
            <a 
              href="https://mirarfan.github.io/taskpilot/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img className="w-5 h-5" src={shareicon} alt="Live Link" />
              <span className="font-medium">Live Demo</span>
            </a>
          </div>
        </div>

        
        {/* Images - Carousel style */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="relative  overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ">
            <div className="flex flex-col gap-6">
              <img 
                src={task1} 
                alt="TaskPilot Screenshot 1" 
                className="rounded-xl transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <img 
                src={task2} 
                alt="TaskPilot Screenshot 2" 
                className="rounded-xl transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="absolute inset-0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagementProject;