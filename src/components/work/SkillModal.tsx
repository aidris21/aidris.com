import React, { useEffect } from 'react';
import { Skill } from '../../types/work';

interface SkillModalProps {
  skill: Skill;
  isOpen: boolean;
  onClose: () => void;
}

const SkillModal: React.FC<SkillModalProps> = ({ skill, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-[#6a92de] to-[rgb(167,194,230)] text-white p-8 rounded-t-2xl">
            <div className="flex items-center space-x-4">
              <div className="text-5xl">{skill.icon}</div>
              <div>
                <h2 className="text-3xl font-bold mb-2">{skill.name}</h2>
                <p className="text-blue-100 text-lg">{skill.category}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Description</h3>
              <p className="text-gray-700 leading-relaxed">{skill.description}</p>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience</h3>
              <p className="text-gray-700 leading-relaxed">{skill.experience}</p>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Notable Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {skill.projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-3 border border-gray-200"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#6a92de] rounded-full"></div>
                      <span className="text-gray-800 font-medium">{project}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillModal; 