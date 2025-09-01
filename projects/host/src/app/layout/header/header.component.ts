

// Angular import
import { Component, output } from '@angular/core';
import { SettingsConfig } from '../../app-config';
import { TopBarLogoComponent } from './top-bar-logo/top-bar-logo.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';

// project import




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopBarLogoComponent, SettingsMenuComponent, TopBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // public props
  NavCollapse = output();
  NavCollapsedMob = output();
  navCollapsed: boolean;
  windowWidth: number;
  navCollapsedMob: boolean;

  // Constructor
  constructor() {
    this.windowWidth = window.innerWidth;
    //this.navCollapsed = this.windowWidth >= 1025 ? SettingsConfig.isCollapse_menu : false;
     if (this.windowWidth < 1025) {
       SettingsConfig.isCollapse_menu=true;
    }
    this.navCollapsed = SettingsConfig.isCollapse_menu;
   
    this.navCollapsedMob = false;
  }

  // public method
  navCollapse() {
    //if (this.windowWidth >= 1025) {
      this.navCollapsed = !this.navCollapsed;
      console.log("i fired header container")
      this.NavCollapse.emit();
       
    //}
  }

  navCollapseMob() {
    //if (this.windowWidth < 1025) {
     console.log("i fired drop down")
      this.NavCollapsedMob.emit();
      
    //}
  }
}
