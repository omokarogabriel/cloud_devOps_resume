import React, { useRef } from 'react';

const Resume = () => {
  const resumeRef = useRef();

  const downloadResume = () => {
    const element = document.createElement('a');
    element.href = '/resume.txt';
    element.download = 'Gabriel_Omokaro_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div ref={resumeRef} className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">Gabriel Omokaro</h1>
            <h2 className="text-xl opacity-90 mb-4">DevOps & Cloud Engineer</h2>
            <div className="flex flex-col gap-3 text-sm font-bold">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">📧</span>
                </div>
                <span>gabrielomokaro@outlook.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">💼</span>
                </div>
                <span>LinkedIn</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">🔗</span>
                </div>
                <span>GitHub</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">📍</span>
                </div>
                <span>Remote Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-8">
        {/* Professional Summary */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-primary-600 pb-2">
            Professional Summary
          </h3>
          <p className="text-gray-600 leading-relaxed">
            DevOps and Cloud Engineer with <strong>1+ year</strong> of expertise in designing, 
            implementing, and maintaining scalable cloud infrastructure. Specialized in automation, 
            CI/CD pipelines, and Infrastructure as Code with a proven track record of achieving 
            <strong> 65.9% uptime</strong> and reducing deployment times by <strong>70%</strong>.
          </p>
        </section>

        {/* Technical Skills */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-primary-600 pb-2">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">🌩️ Cloud Platforms</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• AWS (Solutions Architect)</li>
                {/* <li>• Azure (DevOps Expert)</li> */}
                {/* <li>• Google Cloud Platform</li> */}
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">⚙️ DevOps Tools</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Docker & Kubernetes</li>
                <li>• Github Actions</li>
                <li>• Terraform & Ansible</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-3">📈 Monitoring</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                {/* <li>• Prometheus & Grafana</li> */}
                {/* <li>• ELK Stack & Jaeger</li> */}
                <li>• CloudWatch</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-primary-600 pb-2">
            Professional Experience
          </h3>
          <div className="space-y-6">
            <div className="border-l-4 border-primary-600 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-gray-800">EKS Microservices</h4>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">2024 - 2025</span>
              </div>
              <p className="text-primary-600 font-medium mb-3">AltSchool Africa</p>
              <ul className="text-gray-600 space-y-1">
                <li>• Deployed microservices architecture on Amazon EKS</li>
                <li>• Implemented Kubernetes orchestration with Helm charts</li>
                <li>• Configured CI/CD pipelines for automated deployments</li>
                <li>• <a href="https://github.com/omokarogabriel/eks_microservices" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">View Project Repository →</a></li>
              </ul>
            </div>

            <div className="border-l-4 border-gray-300 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-gray-800">Cloud Infrastructure Engineer</h4>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">2024 - 2025</span>
              </div>
              <p className="text-primary-600 font-medium mb-3">AltSchool Africa</p>
              <ul className="text-gray-600 space-y-1">
                {/* <li>• Migrated legacy infrastructure to cloud-native solutions</li> */}
                <li>• Implemented Infrastructure as Code using Terraform</li>
                {/* <li>• Led DevSecOps initiatives achieving SOC2 certification</li> */}
              </ul>
            </div>



            <div className="border-l-4 border-primary-600 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-gray-800">S3 Buckets</h4>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">2024 - 2025</span>
              </div>
              <p className="text-primary-600 font-medium mb-3">AltSchool Africa</p>
              <ul className="text-gray-600 space-y-1">
                <li>• Creating a public static website with permission and CloudFront </li>
                <li>• Creating a private s3 bucket with get,put permission and no delete</li>
                <li>• Creating a private s3 bucket with list only permission and no delete </li>
                <li>• <a href="https://github.com/omokarogabriel/Third-semester-assessment" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">View Project Repository →</a></li>
              </ul>
            </div>
            
          </div>
        </section>

        {/* Key Achievements */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-primary-600 pb-2">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-yellow-50 p-4 rounded-lg">
              <span className="text-2xl">🏆</span>
              <div>
                <h4 className="font-semibold text-gray-800">99.9% Uptime</h4>
                <p className="text-sm text-gray-600">Critical infrastructure availability</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="font-semibold text-gray-800">5+ Projects</h4>
                <p className="text-sm text-gray-600">Successfully delivered solutions</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
              <span className="text-2xl">💰</span>
              <div>
                <h4 className="font-semibold text-gray-800">40% Cost Reduction</h4>
                <p className="text-sm text-gray-600">Cloud spending optimization</p>
              </div>
            </div>
            {/* <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg">
              <span className="text-2xl">🔒</span>
              <div>
                <h4 className="font-semibold text-gray-800">Security Certified</h4>
                <p className="text-sm text-gray-600">SOC2 & ISO27001 compliance</p>
              </div>
            </div> */}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-primary-600 pb-2">
            Certifications
          </h3>
          {/* <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <img src="https://images.credly.com/size/110x110/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png" alt="AWS" className="w-6 h-6" />
              <span className="font-medium">AWS Solutions Architect Professional</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <img src="https://images.credly.com/size/110x110/images/c3ab66f8-5d59-4afa-a6c2-0ba30a1989ca/CERT-Expert-DevOps-Engineer-600x600.png" alt="Azure" className="w-6 h-6" />
              <span className="font-medium">Azure DevOps Engineer Expert</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <img src="https://images.credly.com/size/110x110/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png" alt="Kubernetes" className="w-6 h-6" />
              <span className="font-medium">Certified Kubernetes Administrator</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <img src="https://images.credly.com/size/110x110/images/99289602-861e-4929-8277-773e63a2fa6f/image.png" alt="Terraform" className="w-6 h-6" />
              <span className="font-medium">Terraform Associate</span>
            </div>
          </div> */}
        </section>

        {/* Education */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-primary-600 pb-2">
            Education
          </h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Higher Diploma in Computer Science</h4>
            <p className="text-primary-600 font-medium mb-1">Yaba College of Technology</p>
            <p className="text-gray-600">2014 - 2018</p>
          </div>
        </section>
      </div>

      {/* Download Button */}
      <div className="bg-gray-50 p-6 text-center">
        <button
          onClick={downloadResume}
          className="btn-primary inline-flex items-center gap-2"
        >
          <span>📄</span>
          Download PDF Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;