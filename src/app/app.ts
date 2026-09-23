import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About, Experience],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
