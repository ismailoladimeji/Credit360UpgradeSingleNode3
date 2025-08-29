
import { Component, Input } from '@angular/core';
import { SweetAlertService } from './sweet-alert.service';

@Component({
  selector: 'app-sweet-alert',
  standalone: true,
  template: `<!-- no UI; this is just an injectable helper -->`,
})
export class SweetAlertComponent {
  constructor(private sweet: SweetAlertService) {}

  // Optional inputs if you want to bind from a parent later
  @Input() defaultTitle = 'Notice';

  open(text: string, title = this.defaultTitle) {
    return this.sweet.info(text, title);
  }
}
