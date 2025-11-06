import React from 'react';
import { FaAws, FaDocker, FaGitAlt, FaLinux, FaGithub, FaTools } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiJenkins, SiPrometheus, SiGrafana } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS', icon: FaAws, proficiency: 'Advanced' },
        { name: 'Kubernetes', icon: SiKubernetes, proficiency: 'Advanced' },
        { name: 'Docker', icon: FaDocker, proficiency: 'Advanced' },
      ]
    },
    {
      title: 'DevOps & Automation',
      skills: [
        { name: 'Terraform', icon: SiTerraform, proficiency: 'Advanced' },
        { name: 'Ansible', icon: SiAnsible, proficiency: 'Advanced' },
        { name: 'GitHub Actions', icon: FaGithub, proficiency: 'Advanced' },
      ]
    },
    {
      title: 'Monitoring & Logging',
      skills: [
        { name: 'Prometheus', icon: SiPrometheus, proficiency: 'Advanced' },
        { name: 'Grafana', icon: SiGrafana, proficiency: 'Advanced' },
      ]
    },
    {
      title: 'Version Control & CI/CD',
      skills: [
        { name: 'Git', icon: FaGitAlt, proficiency: 'Advanced' },
        { name: 'GitHub', icon: FaGithub, proficiency: 'Advanced' },

      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Proficient in modern DevOps practices and cloud technologies, with a focus on automation and scalability
          </p>
        </div>

        <div className="grid gap-16 md:gap-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary-900 mb-2">{category.title}</h3>
                <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <skill.icon className="w-12 h-12 text-primary-600" />
                      <div>
                        <h4 className="text-lg font-semibold text-primary-900 mb-2">{skill.name}</h4>
                        <span className="text-sm font-medium text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full">
                          {skill.proficiency}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Strong background in implementing end-to-end DevOps solutions, including CI/CD pipelines, 
            infrastructure as code, and maintaining high-availability systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;