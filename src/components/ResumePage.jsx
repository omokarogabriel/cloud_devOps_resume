import React from 'react';
import Resume from './Resume';

const ResumePage = () => {
  return (
    <section id="resume" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Resume
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive overview of my experience, skills, and achievements in DevOps and Cloud Engineering
          </p>
        </div>
        
        <Resume />
      </div>
    </section>
  );
};

export default ResumePage;