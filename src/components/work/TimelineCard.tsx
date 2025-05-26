import dayjs from 'dayjs';
import React from 'react';

interface TimelineCardProps {
  id: string;
  title: string;
  subtitle: string;
  logo: string;
  dateRange: {
    startDate: dayjs.Dayjs;
    endDate: dayjs.Dayjs | null;
  };
  summary: string;
  description: string;
  isExpanded: boolean;
  onToggle: () => void;
  isLast?: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  subtitle,
  logo,
  dateRange,
  summary,
  description,
  isExpanded,
  onToggle,
  isLast = false
}) => {
  const startDate = dateRange.startDate.format('MMM YYYY');
  const endDate = dateRange.endDate ? dateRange.endDate.format('MMM YYYY') : 'Present';
  const dateRangeString = `${startDate} - ${endDate}`;

  return (
    <div className="relative pl-20">
      {/* Timeline dot */}
      <div className="absolute left-6 top-6 w-4 h-4 bg-[#6a92de] rounded-full border-4 border-white shadow-lg z-10"></div>
      
      {/* Card */}
      <div 
        className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl ${
          isExpanded ? 'shadow-xl' : ''
        }`}
        onClick={onToggle}
      >
        {/* Card Header */}
        <div className="p-6">
          <div className="flex items-start space-x-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt={`${subtitle} logo`}
                className="w-12 h-12 rounded-lg object-cover border border-gray-200"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzZhOTJkZSIvPgo8dGV4dCB4PSIyNCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57e3N1YnRpdGxlWzBdfX08L3RleHQ+Cjwvc3ZnPgo=';
                }}
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-lg text-[#6a92de] font-medium mb-2">{subtitle}</p>
              <p className="text-sm text-gray-500 mb-3">{dateRangeString}</p>
              <p className="text-gray-700 leading-relaxed">{summary}</p>
            </div>
            
            {/* Expand/Collapse Icon */}
            <div className="flex-shrink-0">
              <svg
                className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Expanded Content */}
        {isExpanded && (
          <div className="px-6 pb-6 border-t border-gray-100">
            <div className="pt-4">
              <h4 className="text-lg font-medium text-gray-900 mb-3">Details</h4>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineCard; 