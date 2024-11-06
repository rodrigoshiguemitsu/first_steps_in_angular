import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = "Murakami"
  sobrenome = "Shiguemitsu"

  userData = {
    email: 'murakami@gmail.com',
    role: 'Admin'
  }

  title = 'angular-basico';
}
