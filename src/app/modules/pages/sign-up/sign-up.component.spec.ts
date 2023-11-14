import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpComponent, HttpClientModule, AngularSvgIconModule.forRoot(), RouterModule.forRoot([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
