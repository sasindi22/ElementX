import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-periodic-table',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css'],
})
export class PeriodicTableComponent implements OnInit {
  elements: any[] = [];
  selectedElement: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/periodic-data.json').subscribe((data) => {
      this.elements = data.elements.map((el: any) => {
        if (el['cpk-hex'] === '000000' || !el['cpk-hex']) {
          el['cpk-hex'] = '444444';
        }
        return el;
      });
    });
  }

  openModal(element: any) {
    this.selectedElement = element;
  }
}
