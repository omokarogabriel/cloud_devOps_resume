import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gabriel-omokaro-b6b57a32b/',
      icon: FaLinkedin
    },
    {
      name: 'GitHub',
      url: 'https://github.com/omokarogabriel',
      icon: FaGithub
    },
    {
      name: 'Email',
      url: 'mailto:gabrielomokaro@outlook.com',
      icon: FaEnvelope
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: FaTwitter
    }
  ];

  const services = [
    'Cloud Architecture & Migration',
    'Infrastructure as Code (IaC)',
    'CI/CD Pipeline Implementation',
    'Container Orchestration',
    'DevOps Automation',
    'Security & Compliance'
  ];

  const technologies = [
    'AWS Cloud Services',
    'Docker & Kubernetes',
    'Terraform & Ansible',
    'Jenkins & GitHub Actions',
    'Prometheus & Grafana',
    'ELK Stack'
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Gabriel Omokaro</h2>
              <p className="text-gray-400 leading-relaxed">
                DevOps Engineer crafting efficient cloud solutions and automating development workflows.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 hover:text-white transition-colors duration-200">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Technologies</h3>
            <ul className="space-y-3">
              {technologies.map((tech, index) => (
                <li key={index} className="text-gray-400 hover:text-white transition-colors duration-200">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                <strong className="text-white">Email:</strong><br />
                gabrielomokaro@outlook.com
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Location:</strong><br />
                Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              &copy; {currentYear} Gabriel Omokaro. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;