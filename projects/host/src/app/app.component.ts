import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoggerService } from 'projects/shared/src/public-api';
import { SpinnerComponent } from './layout/shared/components/spinner/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpinnerComponent,RouterModule],
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
