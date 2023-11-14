import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgFor, NgClass, NgTemplateOutlet, NgIf } from '@angular/common';
import { SideNavChildItem } from 'src/app/shared/models/side-nav-child-item.model';
import { SideNavSubmenuComponent } from '../sidenav-submenu/sidenav-submenu.component';
import { SideNavService } from '../../../services/side-nav.service';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    AngularSvgIconModule,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
    SideNavSubmenuComponent,
  ],
})
export class SideNavMenuComponent {
  constructor(public sideNavService: SideNavService) {}

  public toggleMenu(subMenu: SideNavChildItem) {
    this.sideNavService.toggleMenu(subMenu);
  }
}
