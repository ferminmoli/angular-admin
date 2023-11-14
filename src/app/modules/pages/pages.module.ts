import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
})
export class PagesModule {}
