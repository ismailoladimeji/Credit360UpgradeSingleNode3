// Angular import
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { SettingsConfig } from '../../../app-config';

// project import

@Component({
  selector: 'app-font-configuration',
  imports: [CommonModule],
  templateUrl: './font-configuration.component.html',
  styleUrls: ['./font-configuration.component.scss']
})
export class FontConfigurationComponent implements OnInit {
  renderer = inject(Renderer2);

  // public method
  styleSelectorToggle!: boolean; // open configuration menu
  setFontFamily!: string; // fontFamily

  // life cycle event
  ngOnInit(): void {
    this.setFontFamily = SettingsConfig.font_family;
    this.fontFamily(this.setFontFamily);
  }

  // public method
  fontFamily(font: string) {
    this.setFontFamily = font;
    this.renderer.removeClass(document.body, 'Roboto');
    this.renderer.removeClass(document.body, 'Poppins');
    this.renderer.removeClass(document.body, 'Inter');
    this.renderer.addClass(document.body, font);
  }
}
