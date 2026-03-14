import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const Resume = () => {
  const resumeRef = useRef();

  const downloadResume = () => {
    const opt = {
      margin: 0,
      filename: 'Gabriel_Omokaro_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(resumeRef.current).save();
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">Looking for more details?</h2>
          <button
            onClick={downloadResume}
            className="inline-flex px-8 py-3.5 bg-primary-600 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-primary-700 hover:shadow-medium"
          >
            Download Full Resume
          </button>
        </div>

        {/* Printable Resume - hidden off-screen but rendered for PDF generation */}
        <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
          <div id="printable-resume" ref={resumeRef} style={{ width: '8.27in', padding: '0.5in 0.6in', fontFamily: 'Arial, sans-serif', color: '#1a1a1a', fontSize: '11px', lineHeight: '1.5' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '16px', borderBottom: '2px solid #2563eb', paddingBottom: '12px' }}>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 4px' }}>Gabriel Omokaro</h1>
              <p style={{ fontSize: '14px', color: '#2563eb', fontWeight: '600', margin: '0 0 8px' }}>DevOps & Cloud Engineer</p>
              <p style={{ fontSize: '10px', color: '#555' }}>
                Lagos, Nigeria &nbsp;|&nbsp; gabrielomokaro@outlook.com &nbsp;|&nbsp; linkedin.com/in/gabriel-omokaro &nbsp;|&nbsp; github.com/omokarogabriel
              </p>
            </div>

            {/* Summary */}
            <div style={{ marginBottom: '14px' }}>
              <h2 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #ddd', paddingBottom: '4px', marginBottom: '6px', color: '#2563eb' }}>Professional Summary</h2>
              <p>
                DevOps and Cloud Engineer with 2+ years of experience specializing in Kubernetes and cloud-native technologies.
                Skilled in building scalable, secure infrastructure using Cilium as CNI and kube-proxy replacement, Hubble for
                network observability, WireGuard for transparent encryption, and Karpenter for intelligent node autoscaling.
                Proven track record of reducing deployment times by 70% and maintaining 99.9% service uptime through automation
                and DevOps best practices.
              </p>
            </div>

            {/* Technical Skills */}
            <div style={{ marginBottom: '14px' }}>
              <h2 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #ddd', paddingBottom: '4px', marginBottom: '6px', color: '#2563eb' }}>Technical Skills</h2>
              <table style={{ width: '100%', fontSize: '11px' }}>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 'bold', width: '160px', verticalAlign: 'top', padding: '2px 0' }}>Cloud & Infrastructure</td>
                    <td style={{ padding: '2px 0' }}>AWS, Kubernetes, Docker, Karpenter (Node Autoscaling)</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold', verticalAlign: 'top', padding: '2px 0' }}>Networking & Security</td>
                    <td style={{ padding: '2px 0' }}>Cilium (CNI & kube-proxy replacement), Hubble (Network Observability), WireGuard (Encryption)</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold', verticalAlign: 'top', padding: '2px 0' }}>DevOps & Automation</td>
                    <td style={{ padding: '2px 0' }}>Terraform, Ansible, GitHub Actions, CI/CD Pipelines</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold', verticalAlign: 'top', padding: '2px 0' }}>Monitoring & Logging</td>
                    <td style={{ padding: '2px 0' }}>Prometheus, Grafana</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold', verticalAlign: 'top', padding: '2px 0' }}>Version Control</td>
                    <td style={{ padding: '2px 0' }}>Git, GitHub</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Experience */}
            <div style={{ marginBottom: '14px' }}>
              <h2 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #ddd', paddingBottom: '4px', marginBottom: '6px', color: '#2563eb' }}>Professional Experience</h2>

              <div style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 'bold' }}>DevOps & Cloud Engineer</span>
                  <span style={{ color: '#555', fontSize: '10px' }}>2+ Years</span>
                </div>
                <ul style={{ margin: '4px 0 0 16px', padding: 0 }}>
                  <li>Designed and implemented scalable cloud architectures on AWS, focusing on high availability and cost optimization</li>
                  <li>Deployed microservices on Amazon EKS with Kubernetes orchestration, Helm charts, and GitOps workflows</li>
                  <li>Implemented Cilium as CNI and kube-proxy replacement for eBPF-based networking with enhanced performance and security</li>
                  <li>Configured Hubble for real-time network observability and WireGuard for transparent pod-to-pod encryption</li>
                  <li>Deployed Karpenter for intelligent, cost-efficient Kubernetes node autoscaling, reducing infrastructure costs</li>
                  <li>Developed CI/CD pipelines using GitHub Actions, reducing deployment time by 70%</li>
                  <li>Automated infrastructure provisioning with Terraform and Ansible across multiple environments</li>
                  <li>Implemented monitoring and alerting with Prometheus and Grafana, maintaining 99.9% service uptime</li>
                  <li>Enforced security best practices and compliance standards across cloud infrastructure</li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div style={{ marginBottom: '14px' }}>
              <h2 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #ddd', paddingBottom: '4px', marginBottom: '6px', color: '#2563eb' }}>Key Projects</h2>

              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold' }}>EKS Microservices Platform</span>
                <span style={{ color: '#555' }}> — AWS EKS, Kubernetes, Helm, Cilium, Karpenter, CI/CD</span>
                <p style={{ margin: '2px 0 0 0' }}>Deployed production-grade microservices on EKS with Cilium CNI for networking, Hubble for observability, WireGuard encryption, and Karpenter for node autoscaling.</p>
              </div>

              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold' }}>S3 Infrastructure with CloudFront</span>
                <span style={{ color: '#555' }}> — AWS S3, CloudFront, IAM, Terraform</span>
                <p style={{ margin: '2px 0 0 0' }}>Created secure S3 buckets with CloudFront distribution and custom permission policies using Infrastructure as Code.</p>
              </div>

              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold' }}>Cloud Infrastructure Automation</span>
                <span style={{ color: '#555' }}> — Terraform, AWS, Ansible</span>
                <p style={{ margin: '2px 0 0 0' }}>Implemented end-to-end Infrastructure as Code for scalable, repeatable cloud deployments across multiple environments.</p>
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h2 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #ddd', paddingBottom: '4px', marginBottom: '6px', color: '#2563eb' }}>Core Competencies</h2>
              <p>
                Cloud Architecture &nbsp;•&nbsp; Kubernetes & Cloud-Native &nbsp;•&nbsp; CI/CD Pipelines &nbsp;•&nbsp; Infrastructure as Code &nbsp;•&nbsp;
                Container Orchestration &nbsp;•&nbsp; Network Observability &nbsp;•&nbsp; Security & Compliance &nbsp;•&nbsp; Performance Optimization
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
