import { Component } from '@angular/core';
import { LibraryComponent } from './library/library.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  standalone: true,// Declara que es un componente independiente
  imports: [LibraryComponent]
})
export class AppComponent {
  title = 'biblioteca-virtual';
}
