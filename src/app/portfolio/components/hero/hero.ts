import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypingService } from '../../services/typing.service';
import { IconService } from '../../services/icon.service';
import { HIGHLIGHTS_DATA } from '../../data/highlights.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit {
  highlights = HIGHLIGHTS_DATA;

  constructor(
    public typingService: TypingService, // Make it public to access in template
    public iconService: IconService
  ) {}

  ngOnInit(): void {
    this.typingService.startTyping();
  }

  scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}