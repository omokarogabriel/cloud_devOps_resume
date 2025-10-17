import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-4">About Me</h2>
          <div className="w-12 h-px bg-gray-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a passionate DevOps and Cloud Engineer with expertise in building scalable, 
              secure infrastructure solutions. My focus is on automation, continuous integration, 
              and delivering reliable cloud-native applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              With experience in AWS, Docker, Kubernetes, and Infrastructure as Code, 
              I help organizations streamline their development processes and achieve 
              operational excellence.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
            >
              Let's Work Together
            </a>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Core Competencies</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cloud Architecture & Migration</li>
                <li>• CI/CD Pipeline Development</li>
                <li>• Infrastructure as Code</li>
                <li>• Container Orchestration</li>
                <li>• Monitoring & Observability</li>
                <li>• Security & Compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;