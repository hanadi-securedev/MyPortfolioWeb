import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconService } from '../../services/icon.service';
import { PROJECTS_DATA } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects = PROJECTS_DATA;

  constructor(public iconService: IconService) {}
}