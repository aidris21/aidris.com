import dayjs from "dayjs";

export interface Skill {
  id: string;
  name: string;
  category: string;
  icon: string;
  proficiency: number;
  description: string;
  experience: string;
  projects: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  logo: string;
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs | null;
  summary: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  logo: string;
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs | null;
  summary: string;
  description: string;
} 