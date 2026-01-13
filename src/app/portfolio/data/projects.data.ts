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
    title: 'ToDo Management System',
    description: 'Manage your tasks effortlessly: create, edit, delete, and view all in a clean, user-friendly interface built with Laravel Blade and MVC architecture.',
    tech: ['IoT', 'System Architecture', 'Team Collaboration'],
    features: ['Laravel Blade templating', 'MVC architecture', 'Simple and user-friendly interface'],
    link: '#',
    github: "https://github.com/hanadi-securedev/ToDo-Laravel"
  }
];