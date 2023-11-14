import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DashboardItem } from '../../models/dashboard-item.model';

@Component({
  selector: 'app-dashboard-card-item',
  templateUrl: './dashboard-card-item.component.html',
  standalone: true,
  imports: [AngularSvgIconModule],
})
export class DashboardCardItemComponent {
  @Input() item: DashboardItem = new DashboardItem();
}
