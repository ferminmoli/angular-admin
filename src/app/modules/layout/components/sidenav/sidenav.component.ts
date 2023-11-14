import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgClass, NgIf } from '@angular/common';
import { SideNavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { SideNavService } from '../../services/side-nav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    AngularSvgIconModule,
    SideNavMenuComponent,
    RouterLink,
  ],
})
export class SideNavComponent {
  constructor(public sideNavService: SideNavService) {}

  public toggleSidebar() {
    this.sideNavService.toggleSidebar();
  }
}
