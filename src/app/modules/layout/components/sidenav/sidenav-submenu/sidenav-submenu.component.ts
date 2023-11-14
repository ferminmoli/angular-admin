import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { SideNavChildItem } from 'src/app/shared/models/side-nav-child-item.model';
import { SideNavService } from '../../../services/side-nav.service';

@Component({
  selector: 'app-sidenav-submenu',
  templateUrl: './sidenav-submenu.component.html',
  styleUrls: ['./sidenav-submenu.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    NgFor,
    NgTemplateOutlet,
    RouterLinkActive,
    RouterLink,
    AngularSvgIconModule,
  ],
})
export class SideNavSubmenuComponent {
  @Input() public submenu = <SideNavChildItem>{};

  constructor(public sideNavService: SideNavService) {}

  public toggleMenu(menu: any) {
    this.sideNavService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach(item => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }
}
