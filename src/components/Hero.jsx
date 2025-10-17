import React from 'react';

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
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
          Gabriel Omokaro
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          DevOps & Cloud Engineer
        </p>
        
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Building scalable, secure, and efficient cloud infrastructure with modern DevOps practices.
        </p>

        <div className="grid grid-cols-3 gap-8 mb-12 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-light text-gray-900 mb-1">1+</div>
            <div className="text-sm text-gray-500">Years</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-gray-900 mb-1">5+</div>
            <div className="text-sm text-gray-500">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-gray-900 mb-1">99.9%</div>
            <div className="text-sm text-gray-500">Uptime</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Get In Touch
          </a>
          <button 
            onClick={downloadResume}
            className="px-8 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;