import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  headerText = 'Creating directives';
  items = [1, 2, 3, 4, 5];
  current = 1;

  onClick(num: number) {
    this.current = num;
  }
}
