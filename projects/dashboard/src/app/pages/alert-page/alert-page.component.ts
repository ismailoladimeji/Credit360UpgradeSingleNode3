
import { Component } from '@angular/core';
import { SweetAlertService } from 'projects/shared/src/lib/sweet-alert/sweet-alert.service';

@Component({
  selector: 'app-alert-page',
  standalone: true,
  templateUrl: './alert-page.component.html',
  styleUrl: './alert-page.component.css'
})

export class AlertPageComponent {

constructor(private sweet: SweetAlertService) {}

  async save() {
    // fake save...
    await this.sweet.success('Data saved successfully.');
  }

  async remove() {
    const ok = await this.sweet.confirm({
      title: 'Delete item?',
      text: 'This action cannot be undone.',
      confirmText: 'Yes, delete it',
      cancelText: 'No, keep it',
      icon: 'warning'
    });
    if (ok) {
      // do delete...
      await this.sweet.success('Item deleted.');
    }
  }

  notify() {
    this.sweet.toast('Operation complete', 'success');
  }
}
