import { Project } from '../models/project.model';

export const PROJECTS_DATA: Project[] = [
  {
    title: 'LibraryWebApplication',
    description: 'A comprehensive web platform for managing organize books,members, track borrowing activity, and simply provide a much smarter library experience',
    tech: ['ASP.NET Core', 'C#', 'SQL Server', 'JavaScript', 'Bootstrap'],
    features: ['Role-based access', 'Track book availability', 'Record transactions (borrow / return)','Manage Books (add, edit, delete)','Secure backend with database integration' ,'Responsive design'],
    link: '#',
    github: 'https://github.com/hanadi-securedev/LibraryWebApplication'
  },
  {
    title: 'Oman Digital Shop Platform',
    description: 'The system is designed to manage products, categories, orders, and users in a scalable and maintainable way.',
    tech: ['IoT', 'System Architecture', 'Team Collaboration'],
    features: ['Product Management', 'Clean Architecture', 'Generic Repository Pattern'],
    link: '#',
    github: "https://github.com/hanadi-securedev/OmanDigitalShopPlatform"
  }
];