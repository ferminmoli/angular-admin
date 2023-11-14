import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    LayoutRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class LayoutModule {}
