import React from 'react';
import { FaServer, FaCloud, FaShieldAlt, FaRocket } from 'react-icons/fa';

const About = () => {
  const achievements = [
    {
      icon: FaCloud,
      title: 'Cloud Infrastructure',
      description: 'Designed and implemented scalable cloud architectures on AWS, focusing on high availability and cost optimization.'
    },
    {
      icon: FaServer,
      title: 'DevOps Automation',
      description: 'Developed CI/CD pipelines and automated deployment processes, reducing deployment time by 70%.'
    },
    {
      icon: FaShieldAlt,
      title: 'Security & Compliance',
      description: 'Implemented security best practices and maintained compliance standards across cloud infrastructure.'
    },
    {
      icon: FaRocket,
      title: 'Performance Optimization',
      description: 'Enhanced system performance and reliability through monitoring, logging, and proactive maintenance.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A passionate DevOps Engineer dedicated to building and optimizing the next generation of cloud infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a DevOps and Cloud Engineer with a strong focus on building scalable, 
              secure infrastructure solutions. My expertise lies in automating development workflows, 
              implementing continuous integration and delivery pipelines, and architecting 
              reliable cloud-native applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With hands-on experience in AWS, Docker, Kubernetes, and Infrastructure as Code, 
              I help organizations modernize their infrastructure, streamline their development 
              processes, and achieve operational excellence through DevOps best practices.
            </p>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-soft">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                      Cloud Architecture
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                      CI/CD Pipelines
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                      Infrastructure as Code
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-soft">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                      Container Orchestration
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                      Monitoring & Logging
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                      Security & Compliance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1"
              >
                <achievement.icon className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-soft hover:shadow-medium"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;