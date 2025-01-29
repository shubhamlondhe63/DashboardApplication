import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widget-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './widget-list.component.html',
  styleUrl: './widget-list.component.css',
})
export class WidgetListComponent {
  searchText: string = '';
  widgets = [
    { name: 'Chart', route: '/config/chart' },
    { name: 'Table', route: '/config/table' },
    { name: 'Gauge', route: '/config/gauge' },
    { name: 'Map', route: '/config/map' },
  ];

  constructor(private router: Router) {}

  get filteredWidgets() {
    return this.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  navigateToConfig(route: string) {
    this.router.navigate([route]);
  }
}
