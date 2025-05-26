import React, { useState } from 'react';
import ExperienceTab from '../components/work/ExperienceTab';
import EducationTab from '../components/work/EducationTab';
import SkillsTab from '../components/work/SkillsTab';

type TabType = 'experience' | 'education' | 'skills';

export const Work: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('experience');

  const tabs = [
    { id: 'experience' as TabType, label: 'Experience' },
    { id: 'education' as TabType, label: 'Education' },
    { id: 'skills' as TabType, label: 'Skills' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with gradient background similar to home page */}
      <div className="bg-gradient-to-b from-[rgb(167,194,230)] via-[#6a92de] to-white pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-white text-center mb-8 tracking-tight">
            Work
          </h1>
          
          {/* Tab Navigation */}
          <div className="flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
              <div className="flex space-x-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-white text-[#6a92de] shadow-lg'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {activeTab === 'experience' && <ExperienceTab />}
        {activeTab === 'education' && <EducationTab />}
        {activeTab === 'skills' && <SkillsTab />}
      </div>
    </div>
  );
}; 