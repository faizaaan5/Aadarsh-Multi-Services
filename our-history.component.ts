import { Component } from '@angular/core';

@Component({
  selector: 'app-our-history',
  templateUrl: './our-history.component.html',
  styleUrl: './our-history.component.css'
})
export class OurHistoryComponent {
  historyEvents = [
    { year: '2000', description: 'Company founded with the vision of ...' },
    { year: '2005', description: 'First major product launch ...' },
    { year: '2010', description: 'Expansion to international markets ...' },
    { year: '2015', description: 'Launch of innovative new technology ...' },
    { year: '2020', description: 'Company celebrates 20 years ...' },
    // Add more events as needed
  ];
}
