import dayjs from "dayjs";

export interface Skill {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  experience: string;
  projects: string[];
}

export interface ExternalFeature {
  url: string;
  title: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  logo: string;
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs | null;
  summary: string;
  description: string; // Markdown string for rich formatting
  externalFeatures?: ExternalFeature[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  logo: string;
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs | null;
  summary: string;
  description: string; // Markdown string for rich formatting
  externalFeatures?: ExternalFeature[];
} 