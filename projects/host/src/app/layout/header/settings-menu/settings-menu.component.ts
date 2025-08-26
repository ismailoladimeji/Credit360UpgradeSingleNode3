// Angular import
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

// third party import


@Component({
  selector: 'app-settings-menu',
  imports: [RouterModule, SharedModule],
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent {}
