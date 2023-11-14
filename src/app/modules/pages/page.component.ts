import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  standalone: true,
  imports: [AngularSvgIconModule, RouterOutlet],
})
export class PageComponent {}
