import React, { useState } from 'react';
import TimelineCard from '../work/TimelineCard';
import { Experience } from '../../types/work';
import gecko_robotics_logo from '../../assets/logos/gecko_robotics_llc_logo.jpeg';
import palantir_technologies_logo from '../../assets/logos/palantir_technologies_logo.jpeg';
import dayjs from 'dayjs';
import unifylabs_logo from '../../assets/logos/unify_labs_logo_tagline_med.original.png';
import cleveland_clinic_logo from '../../assets/logos/cleveland_clinic_logo.jpeg';

const ExperienceTab: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Sample data - replace with actual experience data
  const experiences: Experience[] = [
    {
      id: '1',
      company: 'Gecko Robotics',
      position: 'Forward Deployed Software Engineer',
      logo: gecko_robotics_logo,
      startDate: dayjs('2024-06-24'),
      endDate: null,  
      summary: 'Developing a platform of applications utilizing inspection, process, and operational data to optimize capital expenditures at industrial facilities.',
      description: "At Gecko I've both contributed to and led major product developments in the effort of building a platform, Cantilever, that serves as the central solution for maintaining and improving asset integrity, capital maintenance decisions, and process optimization. I've led made major contributions to the core asset maintenance planning product, and led the development of products to automate aspects of the inspection and report delivery process. Most recently, I've created a mobile application that serves as extension of the Cantilever platform, for the purpose of collecting non-robotic data from the field directl into the core platform.  "
    },
    {
      id: '2',
      company: 'Palantir Technologies',
      position: 'Forward Deployed Software Engineer',
      logo: palantir_technologies_logo,
      startDate: dayjs('2021-08-09'),
      endDate: dayjs('2024-05-23'),
      summary: 'Led multiple teams of engineers in both healthcare and manufacturing verticals, deploying novel applications within Palantir Foundry to develop digital twins of their operations.',
      description: "As a Technical Lead at Palantir Technologies, I worked with multiple clients in the healthcare industry to build solutions optimizing hospital operations to deliver care to more patients, and led the integration of multiple legacy data systems, and subsequently led the development of software solutions to increase patient capacity by forecasting hospital patient demand, allocating nursing staff based on patient need, and optimizing operating room schedules, leveraging a robust ontology and machine learning models. I've also worked with a Fortune 500 manufacturing client to automate multiple business processes, including large-scale ERP data migrations, order fulfillment, and enterprise rebate programs. The former created a 10M+ enterprise deal, and the latter created a 30M+ enterprise deal.",
      externalFeatures: [{
        url: 'https://www.cnbc.com/2023/06/17/palantir-hospital-operations-platform-accounts-for-10percent-of-revenue.html',
        title: 'Palantir Hospital Operations Platform Accounts for 10% of Revenue'
      }, {
        url: "https://www.youtube.com/watch?v=5uE_bY85bGU",
        title: 'Palantir Hospital Operations at Cleveland Clinic'
      }]
    },
    {
      id: '3',
      company: 'Palantir Technologies',
      position: 'Forward Deployed Software Engineer Intern',
      logo: palantir_technologies_logo,
      startDate: dayjs('2020-06-01'),
      endDate: dayjs('2020-08-01'),
      summary: 'Developed a new application for monitoring data pipeline health within projects in the Palantir Foundry Platform',
      description: 'In the projects dashboard in Palantir Foundry, developed a new application for monitoring data pipeline health, including issues and alerts. This application was used to monitor the health of the data pipeline and to alert on any issues. In addition, built new data transforms as part of the work with a Forbes 2000 customer. This internship occurred during the summer of 2020, so it was fully remote, which presented challenges with learning and collaborating with teammates. Nonetheless, it was still a foundational experience.'
    },
    {
      id: '4',
      company: 'UnifyLabs',
      position: 'Data Science Intern',
      logo: unifylabs_logo,
      startDate: dayjs('2019-06-01'),
      endDate: dayjs('2019-08-01'),
      summary: 'Worked as a data science intern on the Unify project\'s Predictive Analytics team, devising strategies and testing code for Unfiy\'s analytics workflow. Also created a video playlist explaining computational ontologies, which was viewed by over 1000 people.',
      description: 'Worked as a data science intern on the Unify project\'s Predictive Analytics team, devising strategies and adding automated testing for Unfiy\'s analytics workflow. In addition, worked on Unify\'s ontology product, with the aim of building a core data asset useable by other non-profit organizations.  Also created a video playlist explaining computational ontologies, intended to be used within the company. Both videos have now amassed a combined 45,000 views',
      externalFeatures: [{
        url: 'https://www.youtube.com/watch?v=-bSYWBG_ayM',
        title: 'Ontology Explainer Video'
      }, {
        url: 'https://www.youtube.com/watch?v=akz0Me7Mdmg',
        title: 'Protege Tutorial Video'
      }]
    },
    {
      id: '5',
      company: 'Cleveland Clinic',
      position: 'Data Analytics Intern',
      logo: cleveland_clinic_logo,
      startDate: dayjs('2018-05-30'),
      endDate: dayjs('2018-08-01'),
      summary: 'Worked to develop machine learning-based methods for data cleaning and curation for Cleveland Clinic neurological data exports.',
      description: 'Worked to develop machine learning-based methods for more automatic data cleaning for datasets of medical images for neurological patients. This data was to be used for training predictive models for neurological conditions based on MRI images, and needed to be curated automatically for supervised learning. In addition, worked to better understand state-of-the-art imaging machine-learning models for future use by the research group. '
    }
  ];

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Professional Experience</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A timeline of my professional journey, showcasing the roles and responsibilities that have shaped my career.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6a92de] to-[rgb(167,194,230)]"></div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <TimelineCard
              key={experience.id}
              id={experience.id}
              title={experience.position}
              subtitle={experience.company}
              logo={experience.logo}
              dateRange={{
                startDate: experience.startDate,
                endDate: experience.endDate
              }}
              summary={experience.summary}
              description={experience.description}
              externalFeatures={experience.externalFeatures}
              isExpanded={expandedCard === experience.id}
              onToggle={() => toggleCard(experience.id)}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTab; 