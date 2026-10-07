import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PlayingCard} from './components/playing-card/playing-card';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,PlayingCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('playing-cards');
}
