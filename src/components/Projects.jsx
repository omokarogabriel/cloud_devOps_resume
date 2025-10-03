import React from 'react';

const Projects = () => {
  const projects = [
    // {
    //   title: "Multi-Cloud Infrastructure",
    //   description: "Designed and implemented a multi-cloud infrastructure spanning AWS, Azure, and GCP with automated failover and disaster recovery.",
    //   technologies: ["Terraform", "Kubernetes", "AWS", "Azure", "GCP"],
    //   features: ["99.99% uptime", "Auto-scaling", "Cost optimization"],
    //   icon: "☁️"
    // },
      {
      title: "Microservices EKS Infrastructure",
      description: "Designed and implemented a microservices Helm chart into an EKS Cluster.",
      technologies: ["Terraform", "Kubernetes"],
      features: ["65.99% uptime", "Auto-scaling", "Cost optimization"],
      icon: "☁️",
      link: "https://github.com/omokarogabriel/eks_microservices"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Built comprehensive CI/CD pipelines reducing deployment time by 70% and eliminating manual errors through full automation.",
      technologies: ["GitHUb Action", "Docker", "Kubernetes", "Helm"],
      features: ["Zero-downtime deployments", "Automated testing", "Rollback capability"],
      icon: "🚀"
    },
    // {
    //   title: "Microservices Monitoring",
    //   description: "Implemented comprehensive monitoring and observability stack for microservices architecture serving 1M+ daily users.",
    //   technologies: ["Prometheus", "Grafana", "ELK Stack", "Jaeger"],
    //   features: ["Real-time alerts", "Performance metrics", "Distributed tracing"],
    //   icon: "📊"
    // },
    {
      title: "Infrastructure as Code",
      description: "Creating an infrastructure using IaC, improving consistency and reducing provisioning time from days to minutes.",
      technologies: ["Terraform", "Helm"],
      features: ["Version controlled", "Reproducible", "Self-documenting"],
      icon: "🏗️"
    },
    // {
    //   title: "Security & Compliance",
    //   description: "Implemented DevSecOps practices and compliance automation achieving SOC2 and ISO27001 certifications.",
    //   technologies: ["Vault", "SAST/DAST", "Policy as Code", "Compliance"],
    //   features: ["Automated security scans", "Policy enforcement", "Audit trails"],
    //   icon: "🔒"
    // },
    {
      title: "S3 Buckets Management",
      description: "Implemented comprehensive S3 bucket configurations with CloudFront distribution for static website hosting and secure private storage.",
      technologies: ["AWS S3", "CloudFront", "IAM Policies"],
      features: ["Public static website", "Private bucket security", "Permission management"],
      icon: "🪣",
      link: "https://github.com/omokarogabriel/Third-semester-assessment"
    },
    {
      title: "Cost Optimization",
      description: "Reduced cloud infrastructure costs by 40% through rightsizing, reserved instances, and automated resource management.",
      technologies: ["AWS Cost Explorer", "CloudWatch"],
      features: ["40% cost reduction", "Resource optimization", "Budget alerts"],
      icon: "💰"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world DevOps and cloud engineering projects that deliver measurable business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{project.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.link && (
                <div className="mt-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium underline"
                  >
                    View Repository →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;