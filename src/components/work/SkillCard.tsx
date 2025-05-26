import React from 'react';
import { Skill } from '../../types/work';

interface SkillCardProps {
  skill: Skill;
  onClick: () => void;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 group"
      onClick={onClick}
    >
      {/* Icon and Name */}
      <div className="text-center mb-4">
        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.name}</h3>
        <p className="text-sm text-[#6a92de] font-medium">{skill.category}</p>
      </div>



      {/* Click to learn more */}
      <div className="text-center">
        <span className="text-sm text-gray-500 group-hover:text-[#6a92de] transition-colors duration-300">
          Click to learn more →
        </span>
      </div>
    </div>
  );
};

export default SkillCard; 