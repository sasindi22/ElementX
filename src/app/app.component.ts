import { Component } from '@angular/core';
import { PeriodicTableComponent } from './components/periodic-table/periodic-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PeriodicTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cyber-periodic-table';
}
