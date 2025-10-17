import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'AWS', level: 90 },
    { name: 'Docker', level: 85 },
    { name: 'Kubernetes', level: 80 },
    { name: 'Terraform', level: 85 },
    { name: 'GitHub Actions', level: 80 },
    { name: 'Ansible', level: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-12 h-px bg-gray-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2">
                <div 
                  className="bg-gray-900 h-2 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Cloud Platforms</h3>
            <p className="text-gray-600">AWS, Azure, GCP</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-4">DevOps Tools</h3>
            <p className="text-gray-600">Docker, Kubernetes, Terraform</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Monitoring</h3>
            <p className="text-gray-600">CloudWatch, Prometheus</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;