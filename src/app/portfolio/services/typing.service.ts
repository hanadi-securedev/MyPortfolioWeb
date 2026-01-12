import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, takeWhile } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypingService {
  private taglines = [
    'Building secure web applications',
    'Learning full stack development',
    'Solving problems with code'
  ];
  
  private currentIndex = 0;
  private typedTextSubject = new BehaviorSubject<string>('');
  
  typedText$ = this.typedTextSubject.asObservable();

  startTyping(): void {
    this.typeText();
  }

  private typeText(): void {
    const currentTagline = this.taglines[this.currentIndex];
    let charIndex = 0;

    const typeInterval = interval(80)
      .pipe(takeWhile(() => charIndex <= currentTagline.length))
      .subscribe(() => {
        this.typedTextSubject.next(currentTagline.slice(0, charIndex));
        charIndex++;

        if (charIndex > currentTagline.length) {
          setTimeout(() => {
            this.currentIndex = (this.currentIndex + 1) % this.taglines.length;
            this.typedTextSubject.next('');
            this.typeText();
          }, 2000);
        }
      });
  }
}
