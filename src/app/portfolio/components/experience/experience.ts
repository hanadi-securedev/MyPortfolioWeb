import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconService } from '../../services/icon.service';
import { EXPERIENCES_DATA } from '../../data/experiences.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class ExperienceComponent {
  experiences = EXPERIENCES_DATA;

  constructor(public iconService: IconService) {}
}
