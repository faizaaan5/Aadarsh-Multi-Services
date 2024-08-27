import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements  AfterViewInit {
  ngAfterViewInit() {
    // Initialize the typewriter effect after view initialization
    this.startTypewriter();
  }

  startTypewriter() {
    const element = document.getElementById('typewriter');
    if (!element) {
      console.error('Typewriter element not found');
      return;
    }

    const texts = [
      'Your Success is Our Goal',
      'Innovative Solutions for Modern Challenges',
      'Dedicated to Excellence'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    const typingSpeed = 100; // Speed of typing in milliseconds
    const erasingSpeed = 50; // Speed of erasing in milliseconds
    const pauseDuration = 1500; // Pause duration after completing each text

    const type = () => {
      if (charIndex < texts[textIndex].length) {
        currentText += texts[textIndex][charIndex];
        element.innerHTML = currentText;
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(erase, pauseDuration);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        currentText = currentText.substring(0, currentText.length - 1);
        element.innerHTML = currentText;
        charIndex--;
        setTimeout(erase, erasingSpeed);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, typingSpeed);
      }
    };

    type();
  }
}