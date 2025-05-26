import React, { useState } from 'react';
import SkillCard from '../work/SkillCard';
import SkillModal from '../work/SkillModal';
import { Skill } from '../../types/work';

const SkillsTab: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  // Sample data - replace with actual skills data
  const skills: Skill[] = [
    {
      id: '1',
      name: 'React',
      category: 'Frontend',
      icon: '⚛️',
      description: 'Advanced proficiency in React.js for building modern, interactive user interfaces.',
      experience: '4+ years of professional experience',
      projects: ['E-commerce Platform', 'Dashboard Application', 'Portfolio Website', 'Real-time Chat App']
    },
    {
      id: '2',
      name: 'TypeScript',
      category: 'Programming Language',
      icon: '📘',
      description: 'Strong expertise in TypeScript for type-safe JavaScript development.',
      experience: '3+ years of professional experience',
      projects: ['Enterprise Web App', 'API Development', 'Component Library', 'CLI Tools']
    },
    {
      id: '3',
      name: 'Python',
      category: 'Programming Language',
      icon: '🐍',
      description: 'Proficient in Python for web development, data analysis, and automation.',
      experience: '3+ years of professional experience',
      projects: ['Django Applications', 'Data Analysis Scripts', 'Automation Tools', 'Machine Learning Models']
    },
    {
      id: '4',
      name: 'Java',
      category: 'Programming Language',
      icon: '🟢',
      description: 'Proficient in Java for building backend services and APIs.',
      experience: '2+ years of professional experience',
      projects: ['REST APIs', 'Microservices', 'Real-time Applications', 'Database Integration']
    },
    {
        id: '5',
        name: 'PySpark',
        category: 'Data Processing',
        icon: '🐍',
        description: 'Proficient in PySpark for distributed data processing and machine learning.',
        experience: '2+ years of professional experience',
        projects: ['Data Analysis Scripts', 'Machine Learning Models']
      },
    {
      id: '6',
      name: 'PostgreSQL',
      category: 'Database',
      icon: '🐘',
      description: 'Strong database design and optimization skills with PostgreSQL.',
      experience: '3+ years of professional experience',
      projects: ['Database Design', 'Query Optimization', 'Data Migration', 'Performance Tuning']
    },
    {
      id: '7',
      name: 'Docker',
      category: 'DevOps',
      icon: '🐳',
      description: 'Containerization and deployment using Docker and Docker Compose.',
      experience: '2+ years of professional experience',
      projects: ['Application Containerization', 'Development Environment', 'CI/CD Pipelines', 'Microservices Deployment']
    },
    {
      id: '8',
      name: 'Git',
      category: 'Version Control',
      icon: '📝',
      description: 'Advanced Git workflows and version control best practices.',
      experience: '5+ years of professional experience',
      projects: ['Team Collaboration', 'Code Reviews', 'Branch Management', 'Release Management']
    },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  const openModal = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Skills</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise across various domains and technologies.
        </p>
      </div>

      {categories.map(category => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills
              .filter(skill => skill.category === category)
              .map(skill => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  onClick={() => openModal(skill)}
                />
              ))}
          </div>
        </div>
      ))}

      {selectedSkill && (
        <SkillModal
          skill={selectedSkill}
          isOpen={!!selectedSkill}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default SkillsTab; 