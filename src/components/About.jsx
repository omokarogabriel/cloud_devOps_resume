import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About Me
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate DevOps and Cloud Engineer with 5+ years of experience in designing, 
                implementing, and maintaining scalable cloud infrastructure. I specialize in automation, 
                CI/CD pipelines, and infrastructure as code.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Cloud Architecture</h3>
                  <p className="text-gray-600">Designing resilient, scalable cloud solutions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">DevOps Automation</h3>
                  <p className="text-gray-600">Streamlining deployment and operations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Infrastructure as Code</h3>
                  <p className="text-gray-600">Terraform, CloudFormation, and Ansible</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary-50 p-6 rounded-xl">
              <div className="text-3xl mb-2">☁️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Cloud Platforms</h3>
              <p className="text-sm text-gray-600">AWS, Azure, GCP certified</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="font-semibold text-gray-900 mb-2">DevOps Tools</h3>
              <p className="text-sm text-gray-600">Docker, Kubernetes, Jenkins</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-semibold text-gray-900 mb-2">Monitoring</h3>
              <p className="text-sm text-gray-600">Prometheus, Grafana, ELK</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
              <p className="text-sm text-gray-600">DevSecOps, compliance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;