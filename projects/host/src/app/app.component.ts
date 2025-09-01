import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoggerService } from 'projects/shared/src/public-api';
import { SpinnerComponent } from './layout/shared/components/spinner/spinner.component';
import { BarChartComponent } from "./layout/shared/components/apexchart/bar-chart/bar-chart.component";
import { BajajChartComponent } from "./layout/shared/components/apexchart/bajaj-chart/bajaj-chart.component";
import { ChartDataMonthComponent } from "./layout/shared/components/apexchart/chart-data-month/chart-data-month.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpinnerComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'host';
   constructor(private logger: LoggerService) {}

  testLog() {
    this.logger.log('Hello from remote app!');
  }

}
