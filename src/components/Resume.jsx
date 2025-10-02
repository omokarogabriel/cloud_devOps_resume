import React, { useRef } from 'react';

const Resume = () => {
  const resumeRef = useRef();

  const downloadResume = () => {
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    
    if (printWindow) {
      const styles = `
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 800px; margin: 0 auto; background: white; }
          .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 2rem; }
          .header h1 { font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem; }
          .header h2 { font-size: 1.25rem; opacity: 0.9; margin-bottom: 1rem; }
          .contact-info { display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.875rem; font-weight: bold; }
          .content { padding: 2rem; }
          .section { margin-bottom: 2rem; }
          .section h3 { font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem; border-bottom: 2px solid #2563eb; padding-bottom: 0.5rem; }
          .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 1rem; }
          .skill-category { background: #f8fafc; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #2563eb; }
          .skill-category h4 { font-weight: 600; margin-bottom: 0.75rem; }
          .skill-category ul { list-style: none; }
          .skill-category li { margin-bottom: 0.25rem; font-size: 0.875rem; }
          .experience-item { margin-bottom: 1.5rem; padding-left: 1rem; border-left: 4px solid #2563eb; }
          .experience-header { display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem; }
          .experience-title { font-size: 1.25rem; font-weight: 600; }
          .experience-date { background: #f3f4f6; padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.875rem; }
          .experience-company { color: #2563eb; font-weight: 500; margin-bottom: 0.75rem; }
          .experience-item ul { margin-left: 1rem; }
          .experience-item li { margin-bottom: 0.25rem; }
          .achievements-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
          .achievement-item { background: #fef3c7; padding: 1rem; border-radius: 0.5rem; display: flex; align-items: center; gap: 0.75rem; }
          .achievement-icon { font-size: 1.5rem; }
          .achievement-title { font-weight: 600; }
          .achievement-desc { font-size: 0.875rem; color: #6b7280; }
          .certifications-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
          .cert-item { padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; display: flex; align-items: center; gap: 0.75rem; }
          .cert-icon { font-size: 1.25rem; }
          @media print { body { -webkit-print-color-adjust: exact; } }
        </style>
      `;
      
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Gabriel Omokaro - Resume</title>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
          ${styles}
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Gabriel Omokaro</h1>
              <h2>DevOps & Cloud Engineer</h2>
              <div class="contact-info">
                <span>📧 gabrielomokaro@outlook.com</span>
                <span>💼 linkedin.com/in/gabriel-omokaro-b6b57a32b</span>
                <span>🔗 github.com/omokarogabriel</span>
                <span>📍 Remote Available</span>
              </div>
            </div>
            
            <div class="content">
              <div class="section">
                <h3>Professional Summary</h3>
                <p>Experienced DevOps and Cloud Engineer with <strong>5+ years</strong> of expertise in designing, implementing, and maintaining scalable cloud infrastructure. Specialized in automation, CI/CD pipelines, and Infrastructure as Code with a proven track record of achieving <strong>99.9% uptime</strong> and reducing deployment times by <strong>70%</strong>.</p>
              </div>
              
              <div class="section">
                <h3>Technical Skills</h3>
                <div class="skills-grid">
                  <div class="skill-category">
                    <h4>🌩️ Cloud Platforms</h4>
                    <ul>
                      <li>• AWS (Solutions Architect)</li>
                      <li>• Azure (DevOps Expert)</li>
                      <li>• Google Cloud Platform</li>
                    </ul>
                  </div>
                  <div class="skill-category">
                    <h4>⚙️ DevOps Tools</h4>
                    <ul>
                      <li>• Docker & Kubernetes</li>
                      <li>• Jenkins & GitLab CI</li>
                      <li>• Terraform & Ansible</li>
                    </ul>
                  </div>
                  <div class="skill-category">
                    <h4>📈 Monitoring</h4>
                    <ul>
                      <li>• Prometheus & Grafana</li>
                      <li>• ELK Stack & Jaeger</li>
                      <li>• CloudWatch & Azure Monitor</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="section">
                <h3>Professional Experience</h3>
                <div class="experience-item">
                  <div class="experience-header">
                    <h4 class="experience-title">Senior DevOps Engineer</h4>
                    <span class="experience-date">2021 - Present</span>
                  </div>
                  <p class="experience-company">Tech Solutions Inc.</p>
                  <ul>
                    <li>• Designed multi-cloud infrastructure spanning AWS, Azure, and GCP</li>
                    <li>• Built CI/CD pipelines reducing deployment time by 70%</li>
                    <li>• Achieved 99.9% uptime through automated monitoring</li>
                    <li>• Reduced cloud costs by 40% through optimization</li>
                  </ul>
                </div>
                
                <div class="experience-item">
                  <div class="experience-header">
                    <h4 class="experience-title">Cloud Infrastructure Engineer</h4>
                    <span class="experience-date">2019 - 2021</span>
                  </div>
                  <p class="experience-company">Digital Innovations Ltd.</p>
                  <ul>
                    <li>• Migrated legacy infrastructure to cloud-native solutions</li>
                    <li>• Implemented Infrastructure as Code using Terraform</li>
                    <li>• Led DevSecOps initiatives achieving SOC2 certification</li>
                  </ul>
                </div>
              </div>
              
              <div class="section">
                <h3>Key Achievements</h3>
                <div class="achievements-grid">
                  <div class="achievement-item">
                    <span class="achievement-icon">🏆</span>
                    <div>
                      <h4 class="achievement-title">99.9% Uptime</h4>
                      <p class="achievement-desc">Critical infrastructure availability</p>
                    </div>
                  </div>
                  <div class="achievement-item">
                    <span class="achievement-icon">⚡</span>
                    <div>
                      <h4 class="achievement-title">50+ Projects</h4>
                      <p class="achievement-desc">Successfully delivered solutions</p>
                    </div>
                  </div>
                  <div class="achievement-item">
                    <span class="achievement-icon">💰</span>
                    <div>
                      <h4 class="achievement-title">40% Cost Reduction</h4>
                      <p class="achievement-desc">Cloud spending optimization</p>
                    </div>
                  </div>
                  <div class="achievement-item">
                    <span class="achievement-icon">🔒</span>
                    <div>
                      <h4 class="achievement-title">Security Certified</h4>
                      <p class="achievement-desc">SOC2 & ISO27001 compliance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="section">
                <h3>Certifications</h3>
                <div class="certifications-grid">
                  <div class="cert-item">
                    <span class="cert-icon">🏅</span>
                    <span>AWS Solutions Architect Professional</span>
                  </div>
                  <div class="cert-item">
                    <span class="cert-icon">🏅</span>
                    <span>Azure DevOps Engineer Expert</span>
                  </div>
                  <div class="cert-item">
                    <span class="cert-icon">🏅</span>
                    <span>Certified Kubernetes Administrator</span>
                  </div>
                  <div class="cert-item">
                    <span class="cert-icon">🏅</span>
                    <span>Terraform Associate</span>
                  </div>
                </div>
              </div>
              
              <div class="section">
                <h3>Education</h3>
                <div style="background: #f9fafb; padding: 1.5rem; border-radius: 0.5rem;">
                  <h4 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Bachelor of Science in Computer Science</h4>
                  <p style="color: #2563eb; font-weight: 500; margin-bottom: 0.25rem;">University of Technology</p>
                  <p style="color: #6b7280;">2014 - 2018</p>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `;
      
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      
      // Wait for content to load then trigger print
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 500);
      };
    }
  };

  return (
    <div ref={resumeRef} className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">Gabriel Omokaro</h1>
            <h2 className="text-xl opacity-90 mb-4">DevOps & Cloud Engineer</h2>
            <div className="flex flex-col gap-2 text-sm font-bold">
              <span><img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg" alt="Email" className="w-4 h-4 inline mr-2" />gabrielomokaro@outlook.com</span>
              <span><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-4 h-4 inline mr-2" />LinkedIn</span>
              <span><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="w-4 h-4 inline mr-2" />GitHub</span>
              <span><img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Location" className="w-4 h-4 inline mr-2" />Remote Available</span>
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
            Experienced DevOps and Cloud Engineer with <strong>5+ years</strong> of expertise in designing, 
            implementing, and maintaining scalable cloud infrastructure. Specialized in automation, 
            CI/CD pipelines, and Infrastructure as Code with a proven track record of achieving 
            <strong> 99.9% uptime</strong> and reducing deployment times by <strong>70%</strong>.
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
                <li>• Azure (DevOps Expert)</li>
                <li>• Google Cloud Platform</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">⚙️ DevOps Tools</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Docker & Kubernetes</li>
                <li>• Jenkins & GitLab CI</li>
                <li>• Terraform & Ansible</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-3">📈 Monitoring</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Prometheus & Grafana</li>
                <li>• ELK Stack & Jaeger</li>
                <li>• CloudWatch & Azure Monitor</li>
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
                <h4 className="text-xl font-semibold text-gray-800">Senior DevOps Engineer</h4>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">2021 - Present</span>
              </div>
              <p className="text-primary-600 font-medium mb-3">Tech Solutions Inc.</p>
              <ul className="text-gray-600 space-y-1">
                <li>• Designed multi-cloud infrastructure spanning AWS, Azure, and GCP</li>
                <li>• Built CI/CD pipelines reducing deployment time by 70%</li>
                <li>• Achieved 99.9% uptime through automated monitoring</li>
                <li>• Reduced cloud costs by 40% through optimization</li>
              </ul>
            </div>

            <div className="border-l-4 border-gray-300 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-gray-800">Cloud Infrastructure Engineer</h4>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">2019 - 2021</span>
              </div>
              <p className="text-primary-600 font-medium mb-3">Digital Innovations Ltd.</p>
              <ul className="text-gray-600 space-y-1">
                <li>• Migrated legacy infrastructure to cloud-native solutions</li>
                <li>• Implemented Infrastructure as Code using Terraform</li>
                <li>• Led DevSecOps initiatives achieving SOC2 certification</li>
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
                <h4 className="font-semibold text-gray-800">50+ Projects</h4>
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
            <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg">
              <span className="text-2xl">🔒</span>
              <div>
                <h4 className="font-semibold text-gray-800">Security Certified</h4>
                <p className="text-sm text-gray-600">SOC2 & ISO27001 compliance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-primary-600 pb-2">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
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
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-primary-600 pb-2">
            Education
          </h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Bachelor of Science in Computer Science</h4>
            <p className="text-primary-600 font-medium mb-1">University of Technology</p>
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