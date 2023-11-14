import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  imports: [DashboardRoutingModule, AngularSvgIconModule.forRoot()],
})
export class DashboardModule {}
