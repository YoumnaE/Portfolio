import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Experience } from '../experience/experience';
import { Gprojects } from '../gprojects/gprojects';
import { About } from '../about/about';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Experience, Gprojects, About],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
