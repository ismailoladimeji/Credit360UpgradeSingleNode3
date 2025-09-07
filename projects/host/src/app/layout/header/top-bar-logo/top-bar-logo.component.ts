// Angular import
import { Component, Input, output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

// project import


@Component({
  selector: 'app-top-bar-logo',
  imports: [SharedModule],
  templateUrl: './top-bar-logo.component.html',
  styleUrl: './top-bar-logo.component.scss'
})
export class TopBarLogoComponent {
  router = inject(Router);

  // public props
  @Input() navCollapsed!: boolean;
  NavCollapse = output();
  windowWidth: number;
  themeMode!: boolean;

  // Constructor
  constructor() {
    this.windowWidth = window.innerWidth;
  }

  // public method
  navCollapse() {
    //if (this.windowWidth >= 1025) {
      this.navCollapsed = !this.navCollapsed;
      console.log("i fired top logo")
      this.NavCollapse.emit();
 
    //}
  }

  returnToHome() {
    this.router.navigate(['/default']);
  }
}
