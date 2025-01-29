import { Type } from '@angular/core';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';
import { TableWidgetComponent } from './table-widget/table-widget.component';
import { GaugeWidgetComponent } from './gauge-widget/gauge-widget.component';
import { MapWidgetComponent } from './map-widget/map-widget.component';

export interface WidgetDefinition {
  component: Type<any>;
  name: string;
  configFields: any; // Form fields for the widget
}

export const WIDGET_REGISTRY: { [key: string]: WidgetDefinition } = {
  chart: {
    component: ChartWidgetComponent,
    name: 'Chart',
    configFields: { type: 'line', dataSource: '' },
  },
  table: {
    component: TableWidgetComponent,
    name: 'Table',
    configFields: { columns: 3, dataSource: '' },
  },
  gauge: {
    component: GaugeWidgetComponent,
    name: 'Gauge',
    configFields: { min: 0, max: 100, value: 50 },
  },
  map: {
    component: MapWidgetComponent,
    name: 'Map',
    configFields: { location: '', zoom: 10 },
  },
};
