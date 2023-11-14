import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardItemComponent } from './dashboard-card-item.component';

describe('DashboardCardItemComponent', () => {
  let component: DashboardCardItemComponent;
  let fixture: ComponentFixture<DashboardCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCardItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
