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
      summary: 'Completed a combined Computer Science and Statistics major, nominally known as Data Science, alongisde several extra-curriculars.',
      description: `Completed advanced coursework in **machine learning**, **artificial intelligence**, and **data structures and algorithms**. Finished with a cumulatove **3.86 GPA** and was recognized on the **Dean's List** for academic excellence each semester.

 ## Work
 While at Columbia, I held several positions that gave me valuable work and leadership experience. While it was difficult maintaining these positions alongside my coursework and extra-curriculars, I feel proud to have accomplished all that I did in the brief 4 years at Columbia.
 - Head Teaching Assistant of Artificial Intelligence
 - Teaching Assistant for Discrete Mathematics
 - Co-coordinator of the Global Ambassador Program
 - Physics Lab Technician
 - Security Desk Attendant

 ## Extra-curriculars
 I also participated in or led several extra-curricular committments.
 - Co-president of the Columbia Data Science Society (CDSS)
 - Columbia University Society of Hip-Hop
 - Black Student Organization
 - Columbia Daily Spectator

  `
    },
    {
      id: '2',
      institution: 'Choate Rosemary Hall',
      degree: 'High School Diploma',
      logo: choate_rosemary_hall_logo,
      startDate: dayjs('2013-08-01'),
      endDate: dayjs('2017-05-01'),
      summary: 'Graduated Magna Cum Laude having completed several formative programs alongside my coursework',
      description: `Completed comprehensive high school program with several AP-level courses, rigorous academic programs, and extra-curriculars. Graduated **Magna Cum Laude**.

## Signature Programs
Choate Rosemary Hall offers several *Signature Programs* (see linked below), of which I had the special opportunity to participate in two during my time:

- **Study Abroad in Beijing**: I had the opportunity to study in Beijing for 8 weeks to study Chinese language, literature, and culture.
- **Science Research Program**: A prepatory program for researchers that has students intern with a research group for a summer and return to write a paper, create a research poster, and present their project.

## Extracurricular Activities
- President of 6th Form Student Council
- Cross-Country Co-Captain
- Ultimate Frisbe Co-Captain
- Afro-Latino Student Alliance
- Robotics Club
`,
externalFeatures: [
  {
    url: "https://www.choate.edu/academics/signature-programs",
    title: "CRH Signature Programs"
  }
]
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
              externalFeatures={edu.externalFeatures}
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