import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", level: 95 },
        // { name: "Azure", level: 85 },
        // { name: "Google Cloud", level: 80 }
      ]
    },
    {
      title: "DevOps Tools",
      skills: [
        { name: "Docker", level: 55 },
        { name: "Kubernetes", level: 50 },
        { name: "GitHub Action", level: 55 }
      ]
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", level: 75 },
        // { name: "CloudFormation", level: 85 },
        { name: "Ansible", level: 55 }
      ]
    },
    {
      title: "Programming",
      skills: [
        { name: "Java", level: 50 },
        { name: "Bash/Shell", level: 65 },
        { name: "Javascript", level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expertise across cloud platforms, DevOps tools, and modern infrastructure technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Certifications</h3>
            {/* <p className="text-gray-600">AWS Solutions Architect, Azure DevOps Engineer</p> */}
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
            <p className="text-gray-600">70.1% uptime, 50% faster deployments</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔧</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Automation</h3>
            <p className="text-gray-600">Full CI/CD pipeline automation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;