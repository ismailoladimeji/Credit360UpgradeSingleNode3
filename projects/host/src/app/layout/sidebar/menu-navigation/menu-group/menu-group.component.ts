// Angular import
import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

// project import
import { NavigationItem } from '../../app-navigation';

import {MenuItemComponent } from '../menu-items/menu-item.component';
import { MenuCollapseComponent } from '../menu-collapse/menu-collapse.component';


@Component({
  selector: 'app-menu-group',
  imports: [CommonModule, MenuCollapseComponent, MenuItemComponent],
  templateUrl: './menu-group.component.html',
  styleUrl: './menu-group.component.scss'
})
export class MenuGroupComponent implements OnInit {
  private location = inject(Location);

  // public props
  @Input() item!: NavigationItem;

  current_url!: string;

  // Life cycle events
  ngOnInit() {
    this.current_url = this.location.path();
    //eslint-disable-next-line
    //@ts-ignore
    const baseHref = this.location['_baseHref'] || '';
    this.current_url = baseHref + this.current_url;

    // Use a more reliable way to find and update the active group
    setTimeout(() => {
      const links = document.querySelectorAll('a.nav-link') as NodeListOf<HTMLAnchorElement>;
      links.forEach((link: HTMLAnchorElement) => {
        if (link.getAttribute('href') === this.current_url) {
          let parent = link.parentElement;
          while (parent && parent.classList) {
            if (parent.classList.contains('coded-hasmenu')) {
              parent.classList.add('coded-trigger');
              parent.classList.add('active');
            }
            parent = parent.parentElement;
          }
        }
      });
    }, 0);
  }
}
