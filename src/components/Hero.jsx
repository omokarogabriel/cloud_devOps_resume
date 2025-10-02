import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                DevOps & Cloud
                <span className="text-primary-600 block">Engineer</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Automating infrastructure, optimizing deployments, and building scalable cloud solutions with modern DevOps practices.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="btn-primary text-center">
                View My Work
              </a>
              <a href="/resume.txt" download="Gabriel_Omokaro_Resume.txt" className="btn-secondary text-center">
                📄 Download Resume
              </a>
            </div>

            <div className="flex space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-gray-600">Projects Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime Achieved</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center">
              <div className="text-white text-center space-y-4">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
                  alt="Cloud Computing" 
                  className="w-24 h-24 mx-auto filter brightness-0 invert"
                />
                <div className="text-xl font-semibold">DevOps Engineer</div>
                <div className="text-sm opacity-90">Cloud • Automation • Scale</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
              🚀
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;