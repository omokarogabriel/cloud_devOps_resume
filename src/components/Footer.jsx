import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold text-primary-500 mb-4">
              omokaro.G
            </div>
            <p className="text-gray-400 mb-4">
              Building scalable, secure, and efficient cloud infrastructure with modern DevOps practices.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/gabriel-omokaro-b6b57a32b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/omokarogabriel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                GitHub
              </a>
              <a href="mailto:gabrielomokaro@outlook.com" className="text-gray-400 hover:text-primary-500 transition-colors">
                Email
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Cloud Architecture</li>
              {/* <li>DevOps Consulting</li> */}
              <li>Infrastructure as Code</li>
              <li>CI/CD Implementation</li>
              <li>Monitoring & Observability</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2 text-gray-400">
              <li>AWS, Azure, GCP</li>
              <li>Docker & Kubernetes</li>
              <li>Terraform & Ansible</li>
              {/* <li>Jenkins & GitLab CI</li> */}
              {/* <li>Prometheus & Grafana</li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 omokaro.G DevOps Engineer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;