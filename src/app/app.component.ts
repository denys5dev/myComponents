import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public items: any[];

  constructor() {
    this.items = [
      { id: 1, value: "First" },
      { id: 2, value: "Second" },
      { id: 3, value: "Third" },
      { id: 4, value: "Fouth" },
      { id: 5, value: "Fifth" },
      { id: 6, value: "Sixth" },
      { id: 7, value: "Seventh" },
      { id: 8, value: "Eigth" },
      { id: 9, value: "Nineth" }
    ]
  }

  onValueChanged(event: any) {
        
  }
}
