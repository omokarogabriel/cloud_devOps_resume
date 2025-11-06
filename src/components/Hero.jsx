import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const downloadResume = () => {
    const element = document.createElement('a');
    element.href = '/resume.pdf';
    element.download = 'Gabriel_Omokaro_Resume.pdf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-primary-50/10 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Gabriel Omokaro
          </h1>
          
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-primary-600 font-semibold">
              DevOps & Cloud Engineer
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Specializing in building scalable, secure, and efficient cloud infrastructure with modern DevOps practices. 
              Transforming business operations through automation and continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">1+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 sm:col-span-2 md:col-span-1">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Service Uptime</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={downloadResume}
              className="w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-soft hover:shadow-medium"
            >
              Download Resume
            </button>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="https://github.com/omokarogabriel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/gabriel-omokaro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;