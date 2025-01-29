import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-chart-widget',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './chart-widget.component.html',
  styleUrl: './chart-widget.component.css',
})
export class ChartWidgetComponent {
  @Input() chartData: any[] = [];
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnChanges(): void {
    this.updateChartOptions();
  }
  updateChartOptions(): void {
    this.chartOptions = {
      chart: {
        type: 'line', // Specify the chart type here
      },
      title: {
        text: 'Sample Chart',
      },
      series: [
        {
          type: 'line', // Ensure the series type is specified
          name: 'Data Series',
          data: this.chartData,
        },
      ],
    };
  }
}
