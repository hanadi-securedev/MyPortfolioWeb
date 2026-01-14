import { Project } from '../models/project.model';

export const PROJECTS_DATA: Project[] = [
  {
  title: 'Oman Smart Marketplace',
  description: 'A professional web platform empowering Omani SMEs. Vendors can manage products and orders, while customers enjoy a secure and trusted marketplace to buy local products.',
  tech: ['ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'ASP.NET MVC', 'Razor Views', 'Bootstrap'],
  features: [
    'Role-based access (Admin, Vendor, Customer)',
    'Manage products & categories',
    'Order tracking & handling',
    'Secure authentication & RBAC',
    'Clean Architecture for scalability & maintainability',
    'Responsive Omani-inspired UI'
  ],
  link: '#',
  github: 'https://github.com/hanadi-securedev/OmanSmartMarketplace',
  },
  {
    title: 'ToDo Management System',
    description: 'Manage your tasks effortlessly: create, edit, delete, and view all in a clean, user-friendly interface built with Laravel Blade and MVC architecture.',
    tech: ['IoT','Laravel', 'PHP','MySql','System Architecture', 'Team Collaboration'],
    features: ['Laravel Blade templating', 'MVC architecture', 'Simple and user-friendly interface'],
    link: '#',
    github: "https://github.com/hanadi-securedev/ToDo-Laravel"
  }
];