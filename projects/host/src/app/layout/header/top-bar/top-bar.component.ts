// Angular import
import { Component, Output, EventEmitter, output, Input } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  // public props
  @Output() NavCollapsedMob = new EventEmitter();
   NavCollapse = output();
   @Input() navCollapsed!: boolean;
    navCollapse() {
    //if (this.windowWidth >= 1025) {
      this.navCollapsed = !this.navCollapsed;
      console.log("i fired top logo")
      this.NavCollapse.emit();
 
    //}
  }
}
