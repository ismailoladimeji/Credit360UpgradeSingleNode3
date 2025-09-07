
// Angular import
import { Component, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarContentComponent } from './menu-navigation/sidebar-content/sidebar-content.component';

// project import



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarContentComponent, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  // public props
  NavCollapsedMob = output();
  SubmenuCollapse = output();
  navCollapsedMob = false;
  windowWidth = window.innerWidth;
  themeMode!: string;

  // public method
  navCollapseMob() {
    //if (this.windowWidth < 1025) {
     console.log("i fired sidebar")
      this.NavCollapsedMob.emit();
     
    //}
  }

  navSubmenuCollapse() {
    document.querySelector('app-navigation.coded-navbar')?.classList.add('coded-trigger');
  }
}
