import { SkillCategory } from '../models/skill.model';

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Backend',
    icon: 'server',
    color: 'cyan',
    skills: [
      { name: 'C# & .NET Core', level: 85 },
      { name: 'ASP.NET Core MVC', level: 80 },
      { name: 'Entity Framework', level: 75 },
      { name: 'SQL Server', level: 80 },
      { name: 'PHP & Laravel', level: 80 },
      { name: 'RESTful APIs', level: 75 }
    ]
  },
  {
    title: 'Frontend',
    icon: 'palette',
    color: 'purple',
    skills: [
      { name: 'JavaScript ', level: 80 },
      { name: 'React', level: 70 },
      { name: 'Angular', level: 65 },
      { name: 'TypeScript', level: 70 },
      { name: 'HTML5 & CSS3', level: 85 }
    ]
  },
  {
    title: 'Tools',
    icon: 'terminal',
    color: 'blue',
    skills: [
      { name: 'Docker', level: 60 },
      { name: 'Git & GitHub', level: 80 },
      { name: 'Linux', level: 70 },
      { name: 'WordPress', level: 65 }
    ]
  }
];