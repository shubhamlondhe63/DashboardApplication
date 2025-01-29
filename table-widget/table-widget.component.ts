import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-table-widget',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './table-widget.component.html',
  styleUrl: './table-widget.component.css',
})
export class TableWidgetComponent {
  @Input() config: any;

  onInit(): void {
    console.log('config is', this.config);
    this.updatePageData();
  }

  ngOnchange(): void {
    console.log('config is', this.config);
  }

  get columnKeys() {
    return (
      this.config?.columns?.map((column: { key: string }) => column.key) || []
    );
  }

  // Method to handle page changes
  onPageChange(event: PageEvent) {
    this.config.pageSize = event.pageSize;
    this.config.pageIndex = event.pageIndex;
    this.updatePageData();
  }

  // Method to update the displayed data based on the page size and index
  updatePageData() {
    const startIndex = this.config.pageIndex * this.config.pageSize;
    const endIndex = startIndex + this.config.pageSize;
    this.config.data = this.config.data.slice(startIndex, endIndex);
  }
}
