import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { ConfigService } from './shared/services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgClass, RouterOutlet],
})
export class AppComponent {
  appName: string;

  constructor(private configService: ConfigService) {
    this.appName = this.configService.appName;
  }
}
