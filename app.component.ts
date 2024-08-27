import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoading = true;

  ngOnInit() {
    // Simulate a loading delay
    setTimeout(() => {
      this.isLoading = false;
    }, 1000); // 2 seconds
  }
}
