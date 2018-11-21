import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Reminders';
  reminder1 = 'Call Sister'
  reminder2 = 'Get Eggs'
  reminder3 = 'Meeting'
}
