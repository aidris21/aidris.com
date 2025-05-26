import React, { useState } from 'react';
import TimelineCard from './TimelineCard';
import { Education } from '../../types/work';
import dayjs from 'dayjs';
import columbia_university_logo from '../../assets/logos/columbia_university_logo.jpeg';
import choate_rosemary_hall_logo from '../../assets/logos/choate_rosemary_hall_logo.jpeg';

const EducationTab: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Sample data - replace with actual education data
  const education: Education[] = [
    {
      id: '1',
      institution: 'Columbia University in the City of New York',
      degree: 'Bachelor of Arts in Data Science',
      logo: columbia_university_logo,
      startDate: dayjs('2017-08-01'),
      endDate: dayjs('2021-05-01'),
      summary: 'Specialized in Machine Learning and Software Engineering with a focus on distributed systems.',
      description: 'Completed advanced coursework in machine learning, artificial intelligence, distributed systems, and software architecture. Thesis focused on "Scalable Machine Learning Systems for Real-time Data Processing". Maintained a 3.8 GPA and was recognized on the Dean\'s List for academic excellence.\n\nKey Courses:\n• Advanced Algorithms and Data Structures\n• Machine Learning and AI\n• Distributed Systems\n• Software Architecture\n• Database Systems\n• Computer Networks\n\nThesis: Developed a distributed machine learning framework capable of processing real-time data streams with 99.9% uptime and sub-second latency.'
    },
    {
      id: '2',
      institution: 'Choate Rosemary Hall',
      degree: 'High School Diploma',
      logo: choate_rosemary_hall_logo,
      startDate: dayjs('2013-08-01'),
      endDate: dayjs('2017-05-01'),
      summary: 'Graduated Magna Cum Laude with a strong foundation in computer science fundamentals.',
      description: 'Completed comprehensive undergraduate program covering all aspects of computer science. Graduated Magna Cum Laude with a 3.7 GPA. Active member of the Computer Science Student Association and participated in multiple hackathons.\n\nKey Courses:\n• Data Structures and Algorithms\n• Object-Oriented Programming\n• Database Design\n• Web Development\n• Operating Systems\n• Computer Graphics\n• Software Engineering\n\nCapstone Project: Led a team of 4 students in developing a web-based project management application using React and Node.js, which was later adopted by the university\'s IT department.\n\nExtracurricular Activities:\n• President of Computer Science Student Association (2016-2017)\n• Winner of Annual Hackathon (2016)\n• Teaching Assistant for Introduction to Programming (2015-2017)'
    },
  ];

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Educational Background</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          My academic journey that provided the foundation for my technical expertise and problem-solving skills.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6a92de] to-[rgb(167,194,230)]"></div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <TimelineCard
              key={edu.id}
              id={edu.id}
              title={edu.degree}
              subtitle={edu.institution}
              logo={edu.logo}
              dateRange={{
                startDate: edu.startDate,
                endDate: edu.endDate
              }}
              summary={edu.summary}
              description={edu.description}
              isExpanded={expandedCard === edu.id}
              onToggle={() => toggleCard(edu.id)}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationTab; 