import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'EKS Microservices',
      description: 'Deployed microservices architecture on Amazon EKS with Kubernetes orchestration and Helm charts.',
      tech: ['AWS EKS', 'Kubernetes', 'Helm', 'CI/CD'],
      link: 'https://github.com/omokarogabriel/eks_microservices'
    },
    {
      title: 'S3 Infrastructure',
      description: 'Created secure S3 buckets with CloudFront distribution and custom permission policies.',
      tech: ['AWS S3', 'CloudFront', 'IAM', 'Terraform'],
      link: 'https://github.com/omokarogabriel/Third-semester-assessment'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Implemented Infrastructure as Code using Terraform for scalable cloud deployments.',
      tech: ['Terraform', 'AWS', 'IaC', 'Automation'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-12 h-px bg-gray-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;