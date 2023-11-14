import { Component } from '@angular/core';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [AngularSvgIconModule, ProfileMenuComponent],
})
export class NavbarComponent {
  appName: string;

  constructor(private configService: ConfigService) {
    this.appName = this.configService.appName;
  }
}
