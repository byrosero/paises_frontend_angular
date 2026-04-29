import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaisComponent } from './components/pais-component/pais-component';
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaisComponent, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular21');
}
